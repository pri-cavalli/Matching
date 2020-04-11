import { expect } from "chai";
import "mocha";
import { Participant, ParticipantType } from "../../src/Participant";
import { DesiredTiebreaker, DesiredTiebreakerType } from "../../src/tiebreaker/DesiredTiebreaker";
import { VoteClassification } from "../../src/Vote";

const mentor1 = new Participant(ParticipantType.Mentor, "mentor1", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Green, mentee3: VoteClassification.Green, mentee4: VoteClassification.Green, mentee5: VoteClassification.Red
});
const mentor2 = new Participant(ParticipantType.Mentor, "mentor2", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Green, mentee3: VoteClassification.Green, mentee4: VoteClassification.Green, mentee5: VoteClassification.Red
});
const mentor3 = new Participant(ParticipantType.Mentor, "mentor3", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Yellow, mentee3: VoteClassification.Yellow, mentee4: VoteClassification.Yellow, mentee5: VoteClassification.Red
});
const mentor4 = new Participant(ParticipantType.Mentor, "mentor4", new Date(1), {
    mentee1: VoteClassification.Green, mentee2: VoteClassification.Yellow, mentee3: VoteClassification.Red, mentee4: VoteClassification.Red, mentee5: VoteClassification.Red
});
const mentee1 = new Participant(ParticipantType.Mentee, "mentee1", new Date(1), {});
const mentee2 = new Participant(ParticipantType.Mentee, "mentee2", new Date(1), {});
const mentee3 = new Participant(ParticipantType.Mentee, "mentee3", new Date(1), {});
const mentee4 = new Participant(ParticipantType.Mentee, "mentee4", new Date(1), {});
const mentee5 = new Participant(ParticipantType.Mentee, "mentee5", new Date(1), {});

const mostDesiredTiebreaker =
    new DesiredTiebreaker([mentor1,mentor2,mentor3,mentor4], [mentee1,mentee2,mentee3,mentee4, mentee5], DesiredTiebreakerType.MostDesired);    
const mostUndesiredTiebreaker =
    new DesiredTiebreaker([mentor1,mentor2,mentor3,mentor4], [mentee1,mentee2,mentee3,mentee4, mentee5], DesiredTiebreakerType.MostUndesired);       
describe("DesiredTiebreaker tests", () => {
  describe("run", () => {
      it("should return null when the options are zero", () => {
          expect(mostDesiredTiebreaker.run([], mentee1)).to.be.null;       
          expect(mostUndesiredTiebreaker.run([], mentee1)).to.be.null;            
      });
      it("should return the options without change when don't have decidingParticipant", () => {
          const options = [mentee1, mentee2, mentee3, mentee4, mentee5];
          expect(
              mostDesiredTiebreaker.run(options, undefined)
          ).to.be.equal(options);                
          expect(
                mostUndesiredTiebreaker.run(options, undefined)
          ).to.be.equal(options);     
      });
    describe("most desired", () => {
        it("should return the option with higher green received votes", () => {
            const options = [mentee4, mentee1, mentee2, mentee3, mentee5];
            expect(
                mostDesiredTiebreaker.run(options, mentor1)
            ).to.be.deep.equal(mentee1);                
        });
        it("should return the option with higher yellow, when the higher green received votes still have more than one option", () => {
            const options = [mentee4, mentee2, mentee3, mentee5];
            expect(
                mostDesiredTiebreaker.run(options, mentor1)
            ).to.be.deep.equal(mentee2);                
        });
        it("should return the options with higher yellow, when the higher green received votes still have more than one option", () => {
            const options = [mentee4, mentee3, mentee5];
            expect(
                mostDesiredTiebreaker.run(options, mentor1)
            ).to.be.deep.equal([mentee4, mentee3]);                
        });          
    });
    describe("most undesired", () => {
        it("should return the option with higher red received votes", () => {
            const options = [mentee4, mentee1, mentee2, mentee3, mentee5];
            expect(
                mostUndesiredTiebreaker.run(options, mentor1)
            ).to.be.deep.equal(mentee5);                
        });
        it("should return the option with higher yellow, when the red green received votes still have more than one option", () => {
            const options = [mentee4, mentee1, mentee2, mentee3, mentee5];
            expect(
                mostUndesiredTiebreaker.run(options, mentor1)
            ).to.be.deep.equal(mentee5);                
        });
        it("should return the options with higher red, when the red green received votes still have more than one option", () => {
            const options = [mentee1, mentee4, mentee3];
            expect(
                mostUndesiredTiebreaker.run(options, mentor1)
            ).to.be.deep.equal([mentee4, mentee3]);                
        });          
    });
  }); 
}); 