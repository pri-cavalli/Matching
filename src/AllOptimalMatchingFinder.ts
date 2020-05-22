import { Matching, Pair, HungarianAlgorithm } from "./HungarianAlgorithm";
import { Matrix } from "./Matrix";
import _ from "lodash";
import { Participant } from "./Participant";
import { MatrixBuilder } from "./MatrixBuilder";

export namespace AllOptimalMatchingFinder {
    export function find(mentors: Participant[], mentees: Participant[]): Matching[] {
        const originalMatrix = MatrixBuilder.build(mentors, mentees);
        const matrix = _.cloneDeep(originalMatrix);
        const optimalMatchingFinder = new HungarianAlgorithm(matrix, mentors, mentees);
        const optimalMatching = optimalMatchingFinder.findOptimalAssignments();
        return findAllOptimalMatchings(optimalMatching, optimalMatchingFinder.getMatrix(), originalMatrix);
    }

    function findAllOptimalMatchings(optimalMatching: Matching, afterHungarianMatrix: Matrix, originalMatrix: Matrix): Matching[] {        
        const fixedPartialMatching = findFixedPairs(afterHungarianMatrix);
        if (afterHungarianMatrix.allMentees.length === 0) {
            return [optimalMatching];
        }
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
            const pair = getPairWhenMentorHasOnlyOnePossibleMentee(mentor, matrix);
            if (pair) {
                fixedPairs.push(pair);
            }
        });
        matrix.allMentees.forEach(mentee => {
            if (!fixedPairs.some(pair => mentee === pair.mentee)) {
                const pair = getPairWhenMenteeHasOnlyOnePossibleMentor(mentee, matrix);
                if (pair) {
                    fixedPairs.push(pair);
                }
            }
        });
        return fixedPairs;
    }

    function getPairWhenMentorHasOnlyOnePossibleMentee(mentor: string, matrix: Matrix): Pair | undefined {
        let count = 0;
        let optimalMentee = "";
        matrix.allMentees.forEach(mentee => {
            if (isThisPairOptimal(mentor, mentee, matrix)) {
                count++;
                optimalMentee = mentee;
            }
        });
        if (count <= 1) {
            return {mentor, mentee: optimalMentee};
        }
        return undefined;
    }

    function getPairWhenMenteeHasOnlyOnePossibleMentor(mentee: string, matrix: Matrix): Pair | undefined {
        let count = 0;
        let optimalMentor = "";
        matrix.allMentors.forEach(mentor => {
            if (isThisPairOptimal(mentor, mentee, matrix)) {
                count++;
                optimalMentor = mentor;
            }
        });
        if (count <= 1) {
            return {mentor: optimalMentor, mentee};
        }
        return undefined;
    }

    function buildAllOptimalMatchings(optimalMatching: Matching, fixedPartOfMatching: Matching, workingMatrix: Matrix, originalMatrix: Matrix): Matching[] {
        const optimalTotalValue = matchingTotal(optimalMatching, originalMatrix);
        const flexiblePartOfMatchings = getFlexiblePairsCombination(workingMatrix);
        const allMatchings: Matching[] = [];
        flexiblePartOfMatchings.forEach(flexiblePart => {
            const newMatching = fixedPartOfMatching.concat(flexiblePart);
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
                if (isThisPairOptimal(mentor, mentee, matrix)) {
                    const restOfMatching = findRestOfMatchingWithNewFixedPair(matrix, { mentor, mentee })
                    allPossibleRestOfMatching = allPossibleRestOfMatching.concat(restOfMatching);
                }
            };
        };

        return _.uniqBy(
            allPossibleRestOfMatching.filter(matching => matrix.size === matching.length),
            (item: Matching) => JSON.stringify(item)
        );
    }

    function isThisPairOptimal(mentor: string, mentee: string, matrix: Matrix): boolean {
        return matrix.value[mentor][mentee] === 0;
    }

    function findRestOfMatchingWithNewFixedPair(matrix: Matrix, fixedPair: Pair): Matching[] {
        const {mentor, mentee} = fixedPair;
        const currentMatrix = _.cloneDeep(matrix);
        currentMatrix.removeMenteeAndMentor(mentee, mentor);
        let restOfMatching = getFlexiblePairsCombination(currentMatrix);
        if (restOfMatching.length === 0) {
            restOfMatching = [[fixedPair]];
        } else {
            restOfMatching = restOfMatching.map(possibleMatching => {
                possibleMatching.push(fixedPair);
                return possibleMatching.sort((a: Pair, b: Pair) => a.mentor > b.mentor ? 1 : -1);
            });
        }
        return restOfMatching;
    }
}