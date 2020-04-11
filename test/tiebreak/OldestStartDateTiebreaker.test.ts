import { expect } from "chai";
import "mocha";
import { OldestStartDateTiebreaker } from "../../src/tiebreaker/OldestStartDateTiebreaker";
import { Participant, ParticipantType } from "../../src/Participant";

let mentor1: Participant, mentor2: Participant, mentor3: Participant, oldestMentor: Participant, oldestMentor2: Participant;
let oldestStartDateTiebreaker = new OldestStartDateTiebreaker();
describe.only("OldestStartDateTiebreaker tests", () => {
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
    it("should return all the options when the range is older than all the mentors", () => {
        oldestStartDateTiebreaker = new OldestStartDateTiebreaker(new Date(1999, 1));
        const options = [mentor3, oldestMentor, mentor1, mentor2, oldestMentor2];
        expect(
            oldestStartDateTiebreaker.run(options)
        ).to.be.deep.equal(options);                
    });
    it("should return the oldest mentor when options have more than one mentor and he is older than the range", () => {
        oldestStartDateTiebreaker = new OldestStartDateTiebreaker(new Date(2222, 1));
        expect(
            oldestStartDateTiebreaker.run([mentor3, oldestMentor, mentor1, mentor2])
        ).to.be.deep.equal(oldestMentor);                
    });
    it("should return the oldest mentors when options have more than one oldest mentor with same start date and they are older than the range", () => {
        oldestStartDateTiebreaker = new OldestStartDateTiebreaker(new Date(2222, 1));
        expect(
            oldestStartDateTiebreaker.run([mentor3, oldestMentor, mentor1, mentor2, oldestMentor2])
        ).to.be.deep.equal([oldestMentor, oldestMentor2]);                
    });
  }); 
}); 