import { expect } from "chai";
import "mocha";
import { voteClassificationTiebreaker } from "../../src/tiebreaker/VoteClassificationTiebreaker";
import { Mentee, Mentor } from "../../src/Participant";
import { VoteClassification } from "../../src/Vote";

let mentor1: Mentor, mentor2: Mentor, mentor3: Mentor, mentor4: Mentor;
describe("Tiebreaker tests", () => {
    beforeEach(() => {
        mentor1 = new Mentor("mentor1", new Date(1), {})
        mentor2 = new Mentor("mentor2", new Date(2), {})
        mentor3 = new Mentor("mentor3", new Date(3), {})
        mentor4 = new Mentor("mentor4", new Date(4), {})
    });
  describe("voteClassificationTiebreaker", () => {
    it("should return null when the options are zero", () => {
        const mentee = new Mentee("", new Date(1), {});
        expect(
            voteClassificationTiebreaker([], mentee)
        ).to.be.equal(null);                
    });
    it("should return the options without change when don't have decidingParticipant", () => {
        const options = [mentor1, mentor2, mentor3];
        expect(
            voteClassificationTiebreaker(options, undefined)
        ).to.be.equal(options);                
    });
    it("should return mentor with the Green vote when options have only one Green mentor", () => {
        const mentee = new Mentee("", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow,
            mentor3: VoteClassification.Green
        });
        expect(
            voteClassificationTiebreaker([mentor1, mentor2, mentor3], mentee)
        ).to.be.equal(mentor3);                
    });
    it("should return mentors array with the Green vote when options more than one Green mentor", () => {
        const mentee = new Mentee("", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow,
            mentor3: VoteClassification.Green,
            mentor4: VoteClassification.Green
        });
        expect(
            voteClassificationTiebreaker([mentor1, mentor2, mentor3, mentor4], mentee)
        ).to.be.deep.equal([mentor3, mentor4]);                
    });
    it("should return mentor with the Yellow vote when options have only one Yellow mentor", () => {
        const mentee = new Mentee("", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow
        });
        expect(
            voteClassificationTiebreaker([mentor1, mentor2], mentee)
        ).to.be.equal(mentor2);              
    });
    it("should return mentors array with the Yellow vote when options more than one Yellow mentor", () => {
        const mentee = new Mentee("", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow,
            mentor3: VoteClassification.Yellow
        });
        expect(
            voteClassificationTiebreaker([mentor1, mentor2, mentor3], mentee)
        ).to.be.deep.equal([mentor2, mentor3]);                
    });
    it("should return mentor with the Red vote when options have only one Red mentor", () => {
        const mentee = new Mentee("", new Date(1), {
            mentor1: VoteClassification.Red
        });
        expect(
            voteClassificationTiebreaker([mentor1], mentee)
        ).to.be.equal(mentor1);              
    });
    it("should return mentors array with the Red vote when options more than one Red mentor", () => {
        const mentee = new Mentee("", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Red,
            mentor3: VoteClassification.Red
        });
        expect(
            voteClassificationTiebreaker([mentor1, mentor2, mentor3], mentee)
        ).to.be.deep.equal([mentor1, mentor2, mentor3]);                
    });
  }); 
}); 