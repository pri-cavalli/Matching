import { expect } from "chai";
import "mocha";
import { oldestStartDateTiebreaker } from "../../src/tiebreaker/OldestStartDateTiebreaker";
import { Mentor } from "../../src/Participant";

let mentor1: Mentor, mentor2: Mentor, mentor3: Mentor, oldestMentor: Mentor, oldestMentor2: Mentor;
describe("Tiebreaker tests", () => {
    beforeEach(() => {
        mentor1 = new Mentor("mentor1", new Date(2020, 1), {})
        mentor2 = new Mentor("mentor2", new Date(2020, 1), {})
        mentor3 = new Mentor("mentor3", new Date(2020, 1), {})
        oldestMentor = new Mentor("oldestMentor", new Date(2008, 1), {})
        oldestMentor2 = new Mentor("oldestMentor2", new Date(2008, 1), {})
    });
  describe("oldestStartDateTiebreaker", () => {
    it("should return null when the options are zero", () => {
        expect(
            oldestStartDateTiebreaker([])
        ).to.be.equal(null);                
    });
    it("should return the mentor when options have only one mentor", () => {
        expect(
            oldestStartDateTiebreaker([mentor1])
        ).to.be.equal(mentor1);                
    });
    it("should return the oldest mentor when options have more than one mentor", () => {
        expect(
            oldestStartDateTiebreaker([mentor3, oldestMentor, mentor1, mentor2])
        ).to.be.deep.equal(oldestMentor);                
    });
    it("should return the oldest mentors when options have more than one oldest mentor with same start date", () => {
        expect(
            oldestStartDateTiebreaker([mentor3, oldestMentor, mentor1, mentor2, oldestMentor2])
        ).to.be.deep.equal([oldestMentor, oldestMentor2]);                
    });
  }); 
}); 