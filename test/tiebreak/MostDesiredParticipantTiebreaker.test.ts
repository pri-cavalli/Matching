import { expect } from "chai";
import "mocha";
import { Participant, ParticipantType } from "../../src/Participant";
import { MostDesiredParticipantTiebreaker } from "../../src/tiebreaker/MostDesiredParticipantTiebreaker";
import { VoteClassification } from "../../src/Vote";

const mentor1 = new Participant(ParticipantType.Mentor, "mentor1", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Green, mentee3: VoteClassification.Green, mentee4: VoteClassification.Green
});
const mentor2 = new Participant(ParticipantType.Mentor, "mentor2", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Green, mentee3: VoteClassification.Green, mentee4: VoteClassification.Green
});
const mentor3 = new Participant(ParticipantType.Mentor, "mentor3", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Yellow, mentee3: VoteClassification.Yellow, mentee4: VoteClassification.Yellow
});
const mentor4 = new Participant(ParticipantType.Mentor, "mentor4", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Yellow, mentee3: VoteClassification.Red, mentee4: VoteClassification.Red
});
const mentee1 = new Participant(ParticipantType.Mentee, "mentee1", new Date(1), {});
const mentee2 = new Participant(ParticipantType.Mentee, "mentee2", new Date(1), {});
const mentee3 = new Participant(ParticipantType.Mentee, "mentee3", new Date(1), {});
const mentee4 = new Participant(ParticipantType.Mentee, "mentee4", new Date(1), {});

const mostDesiredParticipantTiebreaker =
    new MostDesiredParticipantTiebreaker([mentor1,mentor2,mentor3,mentor4], [mentee1,mentee2,mentee3,mentee4]);          
describe("MostDesiredParticipantTiebreaker tests", () => {
  describe("run", () => {
    it("should return null when the options are zero", () => {
        expect(mostDesiredParticipantTiebreaker.run([], mentee1)).to.be.null;            
    });
    it("should return the options without change when don't have decidingParticipant", () => {
        const options = [mentee1, mentee2, mentee3, mentee4];
        expect(
            mostDesiredParticipantTiebreaker.run(options, undefined)
        ).to.be.equal(options);                
    });
    it("should return the option with higher green received votes", () => {
        const options = [mentee4, mentee1, mentee2, mentee3];
        expect(
            mostDesiredParticipantTiebreaker.run(options, mentor1)
        ).to.be.deep.equal(mentee1);                
    });
    it("should return the option with higher yellow, when the higher green received votes still have more than one option", () => {
        const options = [mentee4, mentee2, mentee3];
        expect(
            mostDesiredParticipantTiebreaker.run(options, mentor1)
        ).to.be.deep.equal(mentee2);                
    });
    it("should return the options with higher yellow, when the higher green received votes still have more than one option", () => {
        const options = [mentee4, mentee3];
        expect(
            mostDesiredParticipantTiebreaker.run(options, mentor1)
        ).to.be.deep.equal([mentee4, mentee3]);                
    });
  }); 
}); 