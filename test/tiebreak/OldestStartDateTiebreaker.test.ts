import { expect } from "chai";
import "mocha";
import { OldestStartDateTiebreaker } from "../../src/tiebreaker/OldestStartDateTiebreaker";
import { Participant, ParticipantType } from "../../src/Participant";

let mentor1: Participant, mentor2: Participant, mentor3: Participant, oldestMentor: Participant, oldestMentor2: Participant;
const oldestStartDateTiebreaker = new OldestStartDateTiebreaker();
describe("OldestStartDateTiebreaker tests", () => {
    beforeEach(() => {
        mentor1 = new Participant(ParticipantType.Mentor, "mentor1", new Date(2020, 1), {})
        mentor2 = new Participant(ParticipantType.Mentor, "mentor2", new Date(2020, 1), {})
        mentor3 = new Participant(ParticipantType.Mentor, "mentor3", new Date(2020, 1), {})
        oldestMentor = new Participant(ParticipantType.Mentor, "oldestMentor", new Date(2008, 1), {})
        oldestMentor2 = new Participant(ParticipantType.Mentor, "oldestMentor2", new Date(2008, 1), {})
    });
  describe("run", () => {
    it("should return null when the options are zero", () => {
        expect(
            oldestStartDateTiebreaker.run([])
        ).to.be.null;                
    });
    it("should return the mentor when options have only one mentor", () => {
        expect(
            oldestStartDateTiebreaker.run([mentor1])
        ).to.be.equal(mentor1);                
    });
    it("should return the oldest mentor when options have more than one mentor", () => {
        expect(
            oldestStartDateTiebreaker.run([mentor3, oldestMentor, mentor1, mentor2])
        ).to.be.deep.equal(oldestMentor);                
    });
    it("should return the oldest mentors when options have more than one oldest mentor with same start date", () => {
        expect(
            oldestStartDateTiebreaker.run([mentor3, oldestMentor, mentor1, mentor2, oldestMentor2])
        ).to.be.deep.equal([oldestMentor, oldestMentor2]);                
    });
  }); 
}); 