import { expect } from "chai";
import "mocha";
import { Matrix } from "../src/Matrix";
import { MatrixBuilder } from "../src/MatrixBuilder";
import { Participant, ParticipantType } from "../src/Participant";
import { VoteClassification } from "../src/Vote";

const dateForOldMentee = new Date(Date.now() - (365 + 30) * 24 * 60 * 60 * 1000);
const dateForNewMentee = new Date();

function buildMatrixUsingCase(
    menteeVoteColor: VoteClassification, mentorVoteColor: VoteClassification, menteeStartDate: Date, hasAlreadyWorkedTogether: boolean = false
  ): Matrix {
  const mentor = new Participant(ParticipantType.Mentor, "mentor", new Date(), { mentee: mentorVoteColor}, { mentee: hasAlreadyWorkedTogether });
  const mentee = new Participant(ParticipantType.Mentee, "mentee", menteeStartDate, { mentor: menteeVoteColor}, { mentor: hasAlreadyWorkedTogether });
  return MatrixBuilder.build([mentor], [mentee])
}

describe("MatrixBuilder tests", () => {
  describe("build right value for cells", () => {
    it("should cell should have 1200 as value when both voted green and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Green, VoteClassification.Green, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(1200);
    });
    it("should cell should have 1120 as value when both voted green and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Green, VoteClassification.Green, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(1120);
    });
  
    it("should cell should have 984 as value when mentee voted green, mentor voted yellow and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Green, VoteClassification.Yellow, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(984);
    });
    it("should cell should have 940 as value when mentee voted green, mentor voted yellow and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Green, VoteClassification.Yellow, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(940);
    });
  
    it("should cell should have 936 as value when mentee voted Yellow, mentor voted Green and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Yellow, VoteClassification.Green, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(936);
    });
    it("should cell should have 900 as value when mentee voted Yellow, mentor voted Green and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Yellow, VoteClassification.Green, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(900);
    });
  
    it("should cell should have 720 as value when both voted Yellow and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Yellow, VoteClassification.Yellow, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(720);
    });
    it("should cell should have 720 as value when both voted Yellow and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Yellow, VoteClassification.Yellow, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(720);
    });
  
    it("should cell should have 715 as value when mentee voted green, mentor voted red and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Green, VoteClassification.Red, dateForNewMentee)
      expect(matrix.value.mentor.mentee).to.be.equals(715);
    });
    it("should cell should have 714 as value when mentee voted green, mentor voted red and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Green, VoteClassification.Red, dateForOldMentee)
      expect(matrix.value.mentor.mentee).to.be.equals(714);
    });
  
    it("should cell should have 625 as value when mentee voted Red, mentor voted Green and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Red, VoteClassification.Green, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(625);
    });
    it("should cell should have 606 as value when mentee voted Red, mentor voted Green and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Red, VoteClassification.Green, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(606);
    });
  
    it("should cell should have 445 as value when mentee voted Red, mentor voted Yellow and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Red, VoteClassification.Yellow, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(445);
    });
    it("should cell should have 390 as value when mentee voted Red, mentor voted Yellow and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Red, VoteClassification.Yellow, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(390);
    });
  
    it("should cell should have 495 as value when mentee voted Yellow, mentor voted Red and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Yellow, VoteClassification.Red, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(495);
    });
    it("should cell should have 450 as value when mentee voted Yellow, mentor voted Red and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Yellow, VoteClassification.Red, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(450);
    });
  
    it("should cell should have 220 as value when both voted Red and mentee is new", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Red, VoteClassification.Red, dateForNewMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(220);
    });
    it("should cell should have 120 as value when both voted Red and mentee is old", () => {
      const matrix = buildMatrixUsingCase(VoteClassification.Red, VoteClassification.Red, dateForOldMentee);
      expect(matrix.value.mentor.mentee).to.be.equals(120);
    });
  
    it("should cell should have 0 as value when participants already worked with each other, don't matter anything else", () => {
      let matrix = buildMatrixUsingCase(VoteClassification.Red, VoteClassification.Red, dateForNewMentee, true);
      expect(matrix.value.mentor.mentee).to.be.equals(0);
      matrix = buildMatrixUsingCase(VoteClassification.Green, VoteClassification.Green, dateForOldMentee, true);
      expect(matrix.value.mentor.mentee).to.be.equals(0);
    });
  });
  it("build right the matrix", () => {
    const mentor1 = new Participant(ParticipantType.Mentor, "mentor1", new Date(), { mentee1: VoteClassification.Green, mentee2: VoteClassification.Yellow}, { });
    const mentee1 = new Participant(ParticipantType.Mentee, "mentee1", new Date(), { mentor1: VoteClassification.Yellow, mentor2: VoteClassification.Red}, { });
    const mentor2 = new Participant(ParticipantType.Mentor, "mentor2", new Date(), { mentee1: VoteClassification.Red, mentee2: VoteClassification.Yellow}, { });
    const mentee2 = new Participant(ParticipantType.Mentee, "mentee2", new Date(), { mentor1: VoteClassification.Yellow, mentor2: VoteClassification.Green}, { });
    const matrix = MatrixBuilder.build([mentor1, mentor2], [mentee1, mentee2]);
    expect(matrix.value).to.be.deep.equals({
      mentor1: {
        mentee1: 900,
        mentee2: 720
      },
      mentor2: {
        mentee1: 220,
        mentee2: 940
      }
    });
  });
});
