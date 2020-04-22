import { Matching, Pair } from "./HungarianAlgorithm";
import { Matrix } from "./Matrix";
import _ from "lodash";

export namespace AllOptimalMatchingFinder {
    export function find(optimalMatching: Matching, afterHungarianMatrix: Matrix, originalMatrix: Matrix): Matching[] {        
        const fixedPartialMatching = findFixedPairs(afterHungarianMatrix);
        console.log("Flexible participants:");
        console.log(afterHungarianMatrix.allMentees);
        console.log(afterHungarianMatrix.allMentors);
        return buildAllOptimalMatchings(optimalMatching, fixedPartialMatching, afterHungarianMatrix, originalMatrix);
    }

    function findFixedPairs(matrix: Matrix): Pair[] {        
        let fixedPairs: Pair[] = [];
        let allFixedPairs: Pair[] = [];
        do {
            fixedPairs = getFixedPairs(matrix);
            fixedPairs.forEach(pair => {
                matrix.removeMenteeAndMentor(pair.mentee, pair.mentor);
            });

            allFixedPairs = allFixedPairs.concat(fixedPairs);
        } while(fixedPairs.length > 0);
        return allFixedPairs;
    }

    function getFixedPairs(matrix: Matrix): Pair[] {
        const fixedPairs: Pair[] = [];
        matrix.allMentors.forEach(mentor => {
            let count = 0;
            let lastMentee = "";
            matrix.allMentees.forEach(mentee => {
                if (matrix.value[mentor][mentee] === 0) {
                    count++;
                    lastMentee = mentee;
                }
            });
            if (count <= 1) {
                fixedPairs.push({mentor, mentee: lastMentee});
            }
        });
        matrix.allMentees.forEach(mentee => {
            if (!fixedPairs.some(pair => mentee === pair.mentee)) {
                let count = 0;
                let lastMentor = "";
                matrix.allMentors.forEach(mentor => {
                    if (matrix.value[mentor][mentee] === 0) {
                        count++;
                        lastMentor = mentor;
                    }
                });
                if (count <= 1) {
                    fixedPairs.push({mentor: lastMentor, mentee});
                }
            }
        });
        return fixedPairs;
    }

    function buildAllOptimalMatchings(optimalMatching: Matching, partOfMatching: Matching, workingMatrix: Matrix, originalMatrix: Matrix): Matching[] {
        const optimalTotalValue = matchingTotal(optimalMatching, originalMatrix);
        const otherPartOfMatchings = getFlexiblePairsCombination(workingMatrix);
        const allMatchings: Matching[] = [];
        otherPartOfMatchings.forEach(otherPart => {
            const newMatching = otherPart.concat(partOfMatching);
            if (optimalTotalValue === matchingTotal(newMatching, originalMatrix)) {
                allMatchings.push(newMatching);
            }
        });

        return allMatchings;
    }

    function matchingTotal(matching: Matching, originalMatrix: Matrix): number {
        return matching.reduce((acc, {mentor, mentee}) => {
            acc += originalMatrix.value[mentor][mentee];
            return acc;
        }, 0)
    }

    function getFlexiblePairsCombination(matrix: Matrix): Matching[] {
        let allPossibleRestOfMatching: Matching[] = [];
        if (matrix.size === 0) {
            return [];
        }
        for(let mentor of Object.keys(matrix.value)) {
            for(let mentee of Object.keys(matrix.value[mentor])) {
                if (matrix.value[mentor][mentee] === 0) {
                    const currentMatrix = _.cloneDeep(matrix);
                    currentMatrix.removeMenteeAndMentor(mentee, mentor);
                    let restOfMatching = getFlexiblePairsCombination(currentMatrix);
                    if (restOfMatching.length === 0) {
                        restOfMatching = [[{mentor, mentee}]];
                    } else {
                        restOfMatching = restOfMatching.map(possibleMatching => {
                            possibleMatching.push({mentor, mentee});
                            return possibleMatching.sort((a: Pair, b: Pair) => a.mentor > b.mentor ? 1 : -1);
                        });
                    }
                    allPossibleRestOfMatching = allPossibleRestOfMatching.concat(restOfMatching);
                }
            };
        };

        allPossibleRestOfMatching = _.uniqBy(
            allPossibleRestOfMatching.filter(a => matrix.size === a.length), (item: Matching) => JSON.stringify(item)
        );
        return allPossibleRestOfMatching;
    }
}