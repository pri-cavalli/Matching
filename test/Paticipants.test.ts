import { expect } from "chai";
import "mocha";
import { Participant, Mentor, Mentee } from "../src/Participant";
import { VoteClassification } from "../src/Vote";

let mentor1: Mentor, mentor2: Mentor, mentor3: Mentor, mentor4: Mentor;
describe("Participant tests", () => {
    it("Mentor and Mentee extends Participant", () => {
        expect(
            Mentor.prototype
        ).to.be.instanceof(Participant);
        expect(
            Mentee.prototype
        ).to.be.instanceof(Participant);
    }); 
    describe("Mentee", () => {
        describe("getHigherNonProposedMentor", () => {
            beforeEach(() => {
                mentor1 = new Mentor("mentor1", new Date(1), {})
                mentor2 = new Mentor("mentor2", new Date(2), {})
                mentor3 = new Mentor("mentor3", new Date(3), {})
                mentor4 = new Mentor("mentor4", new Date(4), {})
            });
            it("should return null when Mentee already proposed to all Mentors", () => {
                const mentee = new Mentee("", new Date(1), {
                    mentor1: VoteClassification.Green 
                });
                mentee.proposedMentors = [mentor1];
                expect(
                    mentee.getHigherNonProposedMentor([mentor1])
                ).to.be.equal(null);                
            });
            it("should return mentor with the green vote when Mentee have only one green voted non-proposed mentor", () => {
                const mentee = new Mentee("", new Date(1), {
                    mentor1: VoteClassification.Yellow,
                    mentor2: VoteClassification.Red,
                    mentor3: VoteClassification.Green,
                    mentor4: VoteClassification.Green
                });
                mentee.proposedMentors = [mentor4];
                expect(
                    mentee.getHigherNonProposedMentor([mentor1, mentor2, mentor3, mentor4])
                ).to.be.equal(mentor3);                
            });
            it("should return mentor with the yellow vote when Mentee have only one yellow voted non-proposed mentor", () => {
                const mentee = new Mentee("", new Date(1), {
                    mentor1: VoteClassification.Yellow,
                    mentor2: VoteClassification.Red,
                    mentor3: VoteClassification.Green,
                    mentor4: VoteClassification.Yellow
                });
                mentee.proposedMentors = [mentor3, mentor4];
                expect(
                    mentee.getHigherNonProposedMentor([mentor1, mentor2, mentor3, mentor4])
                ).to.be.equal(mentor1);                
            });
            it("should return mentor with the red vote when Mentee have only one this non-proposed mentor option", () => {
                const mentee = new Mentee("", new Date(1), {
                    mentor1: VoteClassification.Yellow,
                    mentor2: VoteClassification.Red,
                    mentor3: VoteClassification.Green,
                    mentor4: VoteClassification.Red
                });
                mentee.proposedMentors = [mentor1, mentor3, mentor4];
                expect(
                    mentee.getHigherNonProposedMentor([mentor1, mentor2, mentor3, mentor4])
                ).to.be.equal(mentor2);                
            });
            it("should return the oldest mentor with green vote when Mentee have more than one green voted non-proposed mentor", () => {
                const mentee = new Mentee("", new Date(1), {
                    mentor1: VoteClassification.Green,
                    mentor2: VoteClassification.Green,
                    mentor3: VoteClassification.Red,
                    mentor4: VoteClassification.Yellow
                });
                expect(
                    mentee.getHigherNonProposedMentor([mentor1, mentor2, mentor3, mentor4])
                ).to.be.equal(mentor1);                
            });
            it("should return the oldest mentor with yellow vote when Mentee have no green options and more than one yellow options", () => {
                const mentee = new Mentee("", new Date(1), {
                    mentor1: VoteClassification.Yellow,
                    mentor2: VoteClassification.Yellow,
                    mentor3: VoteClassification.Red,
                    mentor4: VoteClassification.Green
                });
                mentee.proposedMentors = [mentor4];
                expect(
                    mentee.getHigherNonProposedMentor([mentor1, mentor2, mentor3, mentor4])
                ).to.be.equal(mentor1);                
            });
            it("should return the oldest mentor with red vote when Mentee have no green and yellow options and more than one red options", () => {
                const mentee = new Mentee("", new Date(1), {
                    mentor1: VoteClassification.Yellow,
                    mentor2: VoteClassification.Red,
                    mentor3: VoteClassification.Red,
                    mentor4: VoteClassification.Green
                });
                mentee.proposedMentors = [mentor1, mentor4];
                expect(
                    mentee.getHigherNonProposedMentor([mentor1, mentor2, mentor3, mentor4])
                ).to.be.equal(mentor2);                
            });
        });
    }); 
}); 