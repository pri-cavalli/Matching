import { Matrix } from "./Matrix";
import { Participant } from "./Participant";
import _ from "lodash";

export interface Pair {
    mentor: string,
    mentee: string
}
export type Matching = Pair[];

enum GoTo {
    Step1 = "Step 1",
    Step2 = "Step 2",
    Step3 = "Step 3",
    Step4 = "Step 4",
    Step5 = "Step 5",
    Step6 = "Step 6",
    LastStep = "Last Step",
    End = "End"
}

enum MarkValue {
    "Star" = 1,
    "Prime" = 2,
    "None" = 0
}

export const MaxNumber = 999999999;

export class HungarianAlgorithm {
    private mentorNames: string[];
    private menteeNames: string[];
    private coveredMentees: {[menteeName: string]: boolean} = {};
    private coveredMentors: {[mentorName: string]: boolean} = {};
    private marks = new Matrix(0);
    private matching: Matching = [];

    private readonly MapExecutions = {
        [GoTo.Step1]: () => this.step1(),
        [GoTo.Step2]: () => this.step2(),
        [GoTo.Step3]: () => this.step3(),
        [GoTo.Step4]: () => this.step4(),
        [GoTo.Step5]: () => this.step5(),
        [GoTo.Step6]: () => this.step6(),
        [GoTo.LastStep]: () => this.lastStep(),
        [GoTo.End]: () => {}
    }

    constructor(private matrix: Matrix, mentors: Participant[], mentees: Participant[]) {
        this.menteeNames = mentees.map(m => m.name);
        this.mentorNames = mentors.map(m => m.name);
        this.mentorNames.forEach(mentor => {
            this.menteeNames.forEach(mentee => {
                this.matrix.value[mentor][mentee] = MaxNumber - this.matrix.value[mentor][mentee];
            });
        });
    }

    public findOptimalAssignments(): Matching {
        let nextStep = GoTo.Step1;
        while(nextStep !== GoTo.End) {
            nextStep = this.MapExecutions[nextStep]();
        }
        return this.matching;
    }

    private step1(): GoTo {
        this.mentorNames.forEach(mentor => {
            let min = MaxNumber;
            this.menteeNames.forEach(mentee => {
                min = Math.min(min, this.matrix.value[mentor][mentee])
            });
            this.menteeNames.forEach(mentee => {
                this.matrix.value[mentor][mentee] -= min;
            });
        });
        return GoTo.Step2;
    }

    private step2(): GoTo {
        this.mentorNames.forEach(mentor => {
            if (!this.coveredMentors[mentor]) {
                this.menteeNames.every(mentee => {
                    if (!this.coveredMentees[mentee] && this.matrix.value[mentor][mentee] === 0) {
                        this.marks.addCell(mentor, mentee, MarkValue.Star);
                        this.coveredMentors[mentor] = true;
                        this.coveredMentees[mentee] = true;
                        return false; //break
                    }
                    return true; //keep loop
                });
            }
        });
        this.clearCovered();
        return GoTo.Step3;
    }

    private clearCovered(): void {
        this.coveredMentees = {};
        this.coveredMentors = {};
    }

    private step3(): GoTo {
        let count = 0;
        this.menteeNames.forEach(mentee => {
            if (this.manteeHasStar(mentee)) {
                this.coveredMentees[mentee] = true;
                count++;
            }
        });
        if (count >= this.matrix.size) return GoTo.LastStep;
        return GoTo.Step4;
    }

    private manteeHasStar(mentee: string): boolean {
        for(let mentor of this.mentorNames) {
            if (this.marks.value[mentor] &&
                this.marks.value[mentor][mentee] === MarkValue.Star) {
                return true;
            }
        }
        return false;
    }

    private step4(): GoTo {
        while(true) {
            const zeroLocation = this.findZero();
            if (!zeroLocation) {
                return GoTo.Step6;
            }
            this.marks.addCell(zeroLocation.mentor, zeroLocation.mentee, MarkValue.Prime);
            const zeroMentee = this.findMenteeThatHasMarkWithMentor(zeroLocation.mentor , MarkValue.Star);

            if (zeroMentee) {
                this.coveredMentors[zeroLocation.mentor] = true;
                this.coveredMentees[zeroMentee] = false
            } else {
                this.matching = [zeroLocation];
                return GoTo.Step5;
            }
        }
    }

    private findZero(): { mentor: string, mentee: string} | undefined {
        for(let mentor of this.mentorNames) {
            if (!this.coveredMentors[mentor]) {
                for(let mentee of this.menteeNames) {
                    if (!this.coveredMentees[mentee] && this.matrix.value[mentor][mentee] === 0) {
                        return {mentee, mentor};
                    }
                }
            }
        };
        return undefined;
    }

    private findMentorThatHasMarkWithMentee(mentee: string, markValue: MarkValue): string | undefined {
        for (let mentor of this.mentorNames) {
            if (this.marks.value[mentor] && this.marks.value[mentor][mentee] === markValue) {
                return mentor;
            }
        };
        return undefined;
    }

    private findMenteeThatHasMarkWithMentor(mentor: string, markValue: MarkValue): string | undefined {
        if (!this.marks.value[mentor]) return undefined;
        for (let mentee of this.menteeNames) {
            if (this.marks.value[mentor][mentee] === markValue) {
                return mentee;
            }
        };
        return undefined;
    }

    private step5(): GoTo {
        let count = 0;

        while(true) {
            let mentee: string | undefined = this.matching[count].mentee;
            let mentor = this.findMentorThatHasMarkWithMentee(mentee, MarkValue.Star);
            if (mentor) {
                count++;
                this.matching[count] = { mentee, mentor };

                mentee = this.findMenteeThatHasMarkWithMentor(mentor, MarkValue.Prime);
                if (!mentee) {
                    throw new Error("should not happen")
                }
                count++;
                this.matching[count] = { mentee, mentor };
            } else {
                this.matching.forEach(pair => {
                    if (this.marks.value[pair.mentor][pair.mentee] === MarkValue.Star) {
                        this.marks.value[pair.mentor][pair.mentee] = MarkValue.None;
                    } else {
                        this.marks.value[pair.mentor][pair.mentee] = MarkValue.Star;
                    }
                });

                this.clearCovered();
                this.clearPrimesInMarks();
                return GoTo.Step3;
            }

        }
    }

    private clearPrimesInMarks(): void {
        this.mentorNames.forEach(mentor => {
            this.menteeNames.forEach(mentee => {
                if(this.marks.value[mentor] && this.marks.value[mentor][mentee] === MarkValue.Prime) {
                    this.marks.value[mentor][mentee] = MarkValue.None;
                }
            });
        });

    }

    private step6(): GoTo {
        const min = this.findMinUncovered();
        this.mentorNames.forEach(mentor => {
            this.menteeNames.forEach(mentee => {
                if (this.coveredMentors[mentor]) {
                    this.matrix.value[mentor][mentee] += min;
                }
                if (!this.coveredMentees[mentee]) {
                    this.matrix.value[mentor][mentee] -= min;
                }
            });
        });
        return GoTo.Step4;
    }

    private findMinUncovered(): number {
        let min = MaxNumber;
        this.mentorNames.forEach(mentor => {
            if (!this.coveredMentors[mentor]) {
                this.menteeNames.forEach(mentee => {
                    if(!this.coveredMentees[mentee]) {
                        min =  Math.min(min, this.matrix.value[mentor][mentee]);
                    }
                });
            }
        });
        return min;
    }

    private lastStep(): GoTo {        
        this.matching = [];
        this.mentorNames.forEach(mentor => {
            this.menteeNames.forEach(mentee => {
                if(this.marks.value[mentor] && this.marks.value[mentor][mentee] === MarkValue.Star) {
                    this.matching.push({mentor, mentee});
                }
            });
        });
        return GoTo.End;
    }


    public findMultipleOptimalAssignments(originalMatrix: Matrix): Matching[] {
        const matchings = [this.findOptimalAssignments()];
        const maxValue = this.matching.reduce((acc, {mentor, mentee}) => {
            acc += originalMatrix.value[mentor][mentee];
            return acc;
        }, 0);
        let fixedPairs: Pair[] = [];
        let fixedPartialMatching: Pair[] = [];
        do {
            fixedPairs = this.getFixedPairs();
            fixedPartialMatching = fixedPartialMatching.concat(fixedPairs);
            fixedPairs.forEach(pair => {
                this.matrix.removeMenteeAndMentor(pair.mentee, pair.mentor);
            });
        } while(fixedPairs.length > 0);

        const flexiblePartialMatchings = this.getFlexiblePairsCombination(this.matrix);
        const allMatchings: Matching[] = [];
        flexiblePartialMatchings.forEach(fexiblePartialMatching => {
            allMatchings.push(fexiblePartialMatching.concat(fixedPartialMatching));
        });

        // todo: filter max value
    
        return allMatchings;
    }

    private getFlexiblePairsCombination(matrix: Matrix): Matching[] {

        let allPossibleRestOfMatching: Matching[] = [];
        if (matrix.size === 0) {
            return [];
        }
        for(let mentor of Object.keys(matrix.value)) {
            for(let mentee of Object.keys(matrix.value[mentor])) {
                if (matrix.value[mentor][mentee] === 0) {
                    const currentMatrix = _.cloneDeep(matrix);
                    currentMatrix.removeMenteeAndMentor(mentee, mentor);
                    let restOfMatching = this.getFlexiblePairsCombination(currentMatrix);
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

    private getFixedPairs(): Pair[] {
        const fixedPairs: Pair[] = [];
        this.matrix.allMentors.forEach(mentor => {
            let count = 0;
            let lastMentee = "";
            this.matrix.allMentees.forEach(mentee => {
                if (this.matrix.value[mentor][mentee] === 0) {
                    count++;
                    lastMentee = mentee;
                }
            });
            if (count <= 1) {
                fixedPairs.push({mentor, mentee: lastMentee});
            }
        });
        this.matrix.allMentees.forEach(mentee => {
            if (!fixedPairs.some(pair => mentee === pair.mentee)) {
                let count = 0;
                let lastMentor = "";
                this.matrix.allMentors.forEach(mentor => {
                    if (this.matrix.value[mentor][mentee] === 0) {
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
}

/*
https://github.com/google/or-tools/blob/v7.5/ortools/algorithms/hungarian.cc
https://github.com/vivet/HungarianAlgorithm/blob/master/HungarianAlgorithm/HungarianAlgorithm.cs
https://www.youtube.com/watch?v=ezSx8OyBZVc

*/