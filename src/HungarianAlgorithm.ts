import { Matrix } from "./Matrix";
import { Participant } from "./Participant";

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
    private mentorIds: string[];
    private menteeIds: string[];
    private coveredMentees: {[menteeId: string]: boolean} = {};
    private coveredMentors: {[mentorId: string]: boolean} = {};
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
        this.menteeIds = mentees.map(m => m.id);
        this.mentorIds = mentors.map(m => m.id);
        this.mentorIds.forEach(mentor => {
            this.menteeIds.forEach(mentee => {
                this.matrix.value[mentor][mentee] = MaxNumber - this.matrix.value[mentor][mentee];
            });
        });
    }

    public getMatrix(): Matrix {
        return this.matrix;
    }

    public findOptimalAssignments(): Matching {
        let nextStep = GoTo.Step1;
        while(nextStep !== GoTo.End) {
            nextStep = this.MapExecutions[nextStep]();
        }
        return this.matching;
    }

    private step1(): GoTo {
        this.mentorIds.forEach(mentor => {
            let min = MaxNumber;
            this.menteeIds.forEach(mentee => {
                min = Math.min(min, this.matrix.value[mentor][mentee])
            });
            this.menteeIds.forEach(mentee => {
                this.matrix.value[mentor][mentee] -= min;
            });
        });
        return GoTo.Step2;
    }

    private step2(): GoTo {
        this.mentorIds.forEach(mentor => {
            if (!this.coveredMentors[mentor]) {
                this.menteeIds.every(mentee => {
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
        this.menteeIds.forEach(mentee => {
            if (this.manteeHasStar(mentee)) {
                this.coveredMentees[mentee] = true;
                count++;
            }
        });
        if (count >= this.matrix.size) return GoTo.LastStep;
        return GoTo.Step4;
    }

    private manteeHasStar(mentee: string): boolean {
        for(let mentor of this.mentorIds) {
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
        for(let mentor of this.mentorIds) {
            if (!this.coveredMentors[mentor]) {
                for(let mentee of this.menteeIds) {
                    if (!this.coveredMentees[mentee] && this.matrix.value[mentor][mentee] === 0) {
                        return {mentee, mentor};
                    }
                }
            }
        };
        return undefined;
    }

    private findMentorThatHasMarkWithMentee(mentee: string, markValue: MarkValue): string | undefined {
        for (let mentor of this.mentorIds) {
            if (this.marks.value[mentor] && this.marks.value[mentor][mentee] === markValue) {
                return mentor;
            }
        };
        return undefined;
    }

    private findMenteeThatHasMarkWithMentor(mentor: string, markValue: MarkValue): string | undefined {
        if (!this.marks.value[mentor]) return undefined;
        for (let mentee of this.menteeIds) {
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
        this.mentorIds.forEach(mentor => {
            this.menteeIds.forEach(mentee => {
                if(this.marks.value[mentor] && this.marks.value[mentor][mentee] === MarkValue.Prime) {
                    this.marks.value[mentor][mentee] = MarkValue.None;
                }
            });
        });

    }

    private step6(): GoTo {
        const min = this.findMinUncovered();
        this.mentorIds.forEach(mentor => {
            this.menteeIds.forEach(mentee => {
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
        this.mentorIds.forEach(mentor => {
            if (!this.coveredMentors[mentor]) {
                this.menteeIds.forEach(mentee => {
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
        this.mentorIds.forEach(mentor => {
            this.menteeIds.forEach(mentee => {
                if(this.marks.value[mentor] && this.marks.value[mentor][mentee] === MarkValue.Star) {
                    this.matching.push({mentor, mentee});
                }
            });
        });
        return GoTo.End;
    }
}
