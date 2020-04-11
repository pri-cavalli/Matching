import { expect } from "chai";
import "mocha";
import { StartDateTiebreaker, TimeTiebreakType } from "../../src/tiebreaker/StartDateTiebreaker";
import { Participant, ParticipantType } from "../../src/Participant";

let mentee1: Participant, mentee2: Participant, mentee3: Participant
let oldestMentee: Participant, oldestMentee2: Participant;
let newestMentee: Participant, newestMentee2: Participant;
let oldestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Oldest);
let newestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Newest);
describe("StartDateTiebreaker tests", () => {
    beforeEach(() => {
        mentee1 = new Participant(ParticipantType.Mentee, "mentee1", new Date(2019, 4), {})
        mentee2 = new Participant(ParticipantType.Mentee, "mentee2", new Date(2019, 4), {})
        mentee3 = new Participant(ParticipantType.Mentee, "mentee3", new Date(2019, 4), {})
        oldestMentee = new Participant(ParticipantType.Mentee, "oldestMentee", new Date(2008, 1), {})
        oldestMentee2 = new Participant(ParticipantType.Mentee, "oldestMentee2", new Date(2008, 1), {})
        newestMentee = new Participant(ParticipantType.Mentee, "newestMentee", new Date(2020, 1), {})
        newestMentee2 = new Participant(ParticipantType.Mentee, "newestMentee2", new Date(2020, 1), {})
    });
  describe("run", () => {
      it("should return null when the options are zero", () => {
          expect(
              oldestStartDateTiebreaker.run([])
          ).to.be.null;                
      });
      it("should return the mentee when options have only one mentee", () => {
          expect(
              oldestStartDateTiebreaker.run([mentee1])
          ).to.be.equal(mentee1);                
      });
    describe("using oldest time tiebreak type", () => {
        it("should return the oldest mentee when options have more than one mentee", () => {
            expect(
                oldestStartDateTiebreaker.run([mentee3, oldestMentee, mentee1, mentee2])
            ).to.be.deep.equal(oldestMentee);                
        });
        it("should return the oldest mentees when options have more than one oldest mentee with same start date", () => {
            expect(
                oldestStartDateTiebreaker.run([mentee3, oldestMentee, mentee1, mentee2, oldestMentee2])
            ).to.be.deep.equal([oldestMentee, oldestMentee2]);                
        });
        it("should return all the options when the range is older than all the mentees", () => {
            oldestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Oldest, new Date(1999, 1));
            const options = [mentee3, oldestMentee, mentee1, mentee2, oldestMentee2];
            expect(
                oldestStartDateTiebreaker.run(options)
            ).to.be.deep.equal(options);                
        });
        it("should return the oldest mentee when options have more than one mentee and he is older than the range", () => {
            oldestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Oldest, new Date(2222, 1));
            expect(
                oldestStartDateTiebreaker.run([mentee3, oldestMentee, mentee1, mentee2])
            ).to.be.deep.equal(oldestMentee);                
        });
        it("should return the oldest mentees when options have more than one oldest mentee with same start date and they are older than the range", () => {
            oldestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Oldest, new Date(2222, 1));
            expect(
                oldestStartDateTiebreaker.run([mentee3, oldestMentee, mentee1, mentee2, oldestMentee2])
            ).to.be.deep.equal([oldestMentee, oldestMentee2]);                
        });
    });
    describe("using newest time tiebreak type", () => {
        it("should return the newest mentee when options have more than one mentee", () => {
            expect(
                newestStartDateTiebreaker.run([mentee3, newestMentee, mentee1, mentee2])
            ).to.be.deep.equal(newestMentee);                
        });
        it("should return the newest mentees when options have more than one newest mentee with same start date", () => {
            expect(
                newestStartDateTiebreaker.run([mentee3, newestMentee, mentee1, mentee2, newestMentee2])
            ).to.be.deep.equal([newestMentee, newestMentee2]);                
        });
        it("should return all the options when the range is newer than all the mentees", () => {
            newestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Newest, new Date(2222, 1));
            const options = [mentee3, newestMentee, mentee1, mentee2, newestMentee2];
            expect(
                newestStartDateTiebreaker.run(options)
            ).to.be.deep.equal(options);                
        });
        it("should return the newest mentee when options have more than one mentee and he is newer than the range", () => {
            newestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Newest, new Date(1999, 1));
            expect(
                newestStartDateTiebreaker.run([mentee3, newestMentee, mentee1, mentee2])
            ).to.be.deep.equal(newestMentee);                
        });
        it("should return the newest mentees when options have more than one newest mentee with same start date and they are newer than the range", () => {
            newestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Newest, new Date(1999, 1));
            expect(
                newestStartDateTiebreaker.run([mentee3, newestMentee, mentee1, mentee2, newestMentee2])
            ).to.be.deep.equal([newestMentee, newestMentee2]);                
        });
    });
  }); 
}); 