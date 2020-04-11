import { expect } from "chai";
import "mocha";
import { VoteClassificationTiebreaker } from "../../src/tiebreaker/VoteClassificationTiebreaker";
import { Participant, ParticipantType } from "../../src/Participant";
import { VoteClassification } from "../../src/Vote";

let mentor1: Participant, mentor2: Participant, mentor3: Participant, mentor4: Participant;
const voteClassificationTiebreaker = new VoteClassificationTiebreaker();
describe("Tiebreaker tests", () => {
    beforeEach(() => {
        mentor1 = new Participant(ParticipantType.Mentor, "mentor1", new Date(1), {})
        mentor2 = new Participant(ParticipantType.Mentor, "mentor2", new Date(2), {})
        mentor3 = new Participant(ParticipantType.Mentor, "mentor3", new Date(3), {})
        mentor4 = new Participant(ParticipantType.Mentor, "mentor4", new Date(4), {})
    });
  describe("voteClassificationTiebreaker", () => {
    it("should return null when the options are zero", () => {
        const mentee = new Participant(ParticipantType.Mentee, "", new Date(1), {});
        expect(
            voteClassificationTiebreaker.run([], mentee)
        ).to.be.equal(null);                
    });
    it("should return the options without change when don't have decidingParticipant", () => {
        const options = [mentor1, mentor2, mentor3];
        expect(
            voteClassificationTiebreaker.run(options, undefined)
        ).to.be.equal(options);                
    });
    it("should return mentor with the Green vote when options have only one Green mentor", () => {
        const mentee = new Participant(ParticipantType.Mentee, "", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow,
            mentor3: VoteClassification.Green
        });
        expect(
            voteClassificationTiebreaker.run([mentor1, mentor2, mentor3], mentee)
        ).to.be.equal(mentor3);                
    });
    it("should return mentors array with the Green vote when options more than one Green mentor", () => {
        const mentee = new Participant(ParticipantType.Mentee, "", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow,
            mentor3: VoteClassification.Green,
            mentor4: VoteClassification.Green
        });
        expect(
            voteClassificationTiebreaker.run([mentor1, mentor2, mentor3, mentor4], mentee)
        ).to.be.deep.equal([mentor3, mentor4]);                
    });
    it("should return mentor with the Yellow vote when options have only one Yellow mentor", () => {
        const mentee = new Participant(ParticipantType.Mentee, "", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow
        });
        expect(
            voteClassificationTiebreaker.run([mentor1, mentor2], mentee)
        ).to.be.equal(mentor2);              
    });
    it("should return mentors array with the Yellow vote when options more than one Yellow mentor", () => {
        const mentee = new Participant(ParticipantType.Mentee, "", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Yellow,
            mentor3: VoteClassification.Yellow
        });
        expect(
            voteClassificationTiebreaker.run([mentor1, mentor2, mentor3], mentee)
        ).to.be.deep.equal([mentor2, mentor3]);                
    });
    it("should return mentor with the Red vote when options have only one Red mentor", () => {
        const mentee = new Participant(ParticipantType.Mentee, "", new Date(1), {
            mentor1: VoteClassification.Red
        });
        expect(
            voteClassificationTiebreaker.run([mentor1], mentee)
        ).to.be.equal(mentor1);              
    });
    it("should return mentors array with the Red vote when options more than one Red mentor", () => {
        const mentee = new Participant(ParticipantType.Mentee, "", new Date(1), {
            mentor1: VoteClassification.Red,
            mentor2: VoteClassification.Red,
            mentor3: VoteClassification.Red
        });
        expect(
            voteClassificationTiebreaker.run([mentor1, mentor2, mentor3], mentee)
        ).to.be.deep.equal([mentor1, mentor2, mentor3]);                
    });
  }); 
}); 