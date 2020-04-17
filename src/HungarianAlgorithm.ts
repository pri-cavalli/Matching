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
    "Zero" = 1,
    "Pivot" = 2,
    "None" = 0
}

const MaxNumber = 999999999;

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

    public findAssignments(): Matching {
        let nextStep = GoTo.Step1;
        while(nextStep !== GoTo.End) {
            nextStep = this.MapExecutions[nextStep]();
        }
        return this.matching;
    }

    private step1(): GoTo {
        this.menteeNames.forEach(mentee => {
            let min = MaxNumber;
            this.mentorNames.forEach(mentor => {
                min = Math.min(min, this.matrix.value[mentor][mentee])
            });
            this.mentorNames.forEach(mentor => {
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
                        this.marks.addCell(mentor, mentee, MarkValue.Zero);
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
        let coveredMentorsNumber = 0;
        this.mentorNames.forEach(mentor => {
            if (this.marks.value[mentor] &&
                Object.values(this.marks.value[mentor]).some(mark => mark === MarkValue.Zero)) {
                this.coveredMentors[mentor] = true;
                coveredMentorsNumber++;
            }
        });
        if (coveredMentorsNumber >= this.matrix.size) return GoTo.LastStep;
        return GoTo.Step4;
    }

    private step4(): GoTo {
        while(true) {
            const zeroLocation = this.findZero();
            if (!zeroLocation) {
                return GoTo.Step6;
            }
            this.marks.addCell(zeroLocation.mentor, zeroLocation.mentee, MarkValue.Pivot);
            const zeroMentor = this.findMentorThatHasMarkWithMentee(zeroLocation.mentee, MarkValue.Zero);

            if (zeroMentor) {
                this.coveredMentees[zeroLocation.mentee] = true;
                this.coveredMentors[zeroMentor] = false
            } else {
                this.matching[0] = zeroLocation;
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
        for (let mentee of this.menteeNames) {
            if (this.marks.value[mentor] && this.marks.value[mentor][mentee] === markValue) {
                return mentee;
            }
        };
        return undefined;
    }

    private step5(): GoTo {
        let count = 0;

        while(true) {
            let mentor: string | undefined = this.matching[count].mentor;
            let mentee = this.findMenteeThatHasMarkWithMentor(mentor, MarkValue.Zero);
            if (mentee) {
                count++;
                this.matching[count] = { mentee, mentor };

                mentee = this.matching[count].mentee;
                mentor = this.findMentorThatHasMarkWithMentee(mentee, MarkValue.Pivot);
                if (!mentor) {
                    debugger
                    throw new Error("should not happen")
                }
                count++;
                this.matching[count] = { mentee, mentor };
            } else {
                this.matching.forEach(pair => {
                    if (this.marks.value[pair.mentor][pair.mentee] === MarkValue.Zero) {
                        this.marks.value[pair.mentor][pair.mentee] = MarkValue.None;
                    } else {
                        this.marks.value[pair.mentor][pair.mentee] = MarkValue.Zero;
                    }
                });

                this.clearCovered();
                this.clearPivotsInMarks();
                return GoTo.Step3;
            }

        }
    }

    private clearPivotsInMarks(): void {
        this.mentorNames.forEach(mentor => {
            this.menteeNames.forEach(mentee => {
                if(this.marks.value[mentor] && this.marks.value[mentor][mentee] === MarkValue.Pivot) {
                    this.marks.value[mentor][mentee] = MarkValue.None;
                }
            });
        });

    }

    private step6(): GoTo {
        const min = this.findMinUncovered();
        this.mentorNames.forEach(mentor => {
            this.menteeNames.forEach(mentee => {
                if (this.coveredMentees[mentee]) {
                    this.matrix.value[mentor][mentee] += min;
                }
                if (!this.coveredMentors[mentor]) {
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
                if(this.marks.value[mentor][mentee] === MarkValue.Zero) {
                    this.matching.push({mentor, mentee});
                }
            });
        });
        return GoTo.End;
    }
}

/*
https://github.com/google/or-tools/blob/v7.5/ortools/algorithms/hungarian.cc
https://github.com/vivet/HungarianAlgorithm/blob/master/HungarianAlgorithm/HungarianAlgorithm.cs
https://www.youtube.com/watch?v=ezSx8OyBZVc

*/