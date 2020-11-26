import { expect } from "chai";
import "mocha";
import { Participant, ParticipantType } from "../src/Participant";

describe("Participant tests", () => {
  describe("isHisFirstMatching", () => {
    it("should return false when the participant already worked with someone", () => {
      const participant = new Participant(ParticipantType.Mentee, "id", new Date(), {}, { "colleague": true});
      expect(participant.isHisFirstMatching()).to.be.false;
    });
    it("should return true when the participant never worked with someone", () => {
      const participant = new Participant(ParticipantType.Mentee, "id", new Date(), {}, {});
      expect(participant.isHisFirstMatching()).to.be.true;
    });
  });
  describe("isOldForAMentee", () => {
    it("should throw error if its a Mentor", () => {
      const participant = new Participant(ParticipantType.Mentor, "id", new Date(), {}, { "colleague": true});
      expect(() => participant.isOldForAMentee()).to.throws("You shouldn't use this condition for a mentor");
    });
    it("should return true if the Mentee works in SAP by 13 months or more", () => {
      const participant = new Participant(ParticipantType.Mentee, "id", new Date(Date.now() - (365 + 30) * 24 * 60 * 60 * 1000), {}, { "colleague": true});
      expect(participant.isOldForAMentee()).to.be.true;
    });
    it("should return false if the Mentee works in SAP by less than 13", () => {
      const participant = new Participant(ParticipantType.Mentee, "id", new Date(Date.now() - (365 + 29) * 24 * 60 * 60 * 1000), {}, { "colleague": true});
      expect(participant.isOldForAMentee()).to.be.false;
    });
  });
});
