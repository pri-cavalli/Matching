import { expect } from "chai";
import "mocha";
import { HungarianAlgorithm } from "../src/HungarianAlgorithm";
import { Matrix } from "../src/Matrix";
import { Participant, ParticipantType } from "../src/Participant";
import { VoteClassification } from "../src/Vote";

describe("HungarianAlgorithm tests", () => {
  it("should find the optimal assignments", () => {
    const matrix = new Matrix(4);
    matrix.allMentees = ['t1', 't2', 't3', 't4'];
    matrix.allMentors = ['a1', 'a2', 'a4', 'a3'];
    matrix.value = {
      a1:{t1: 1120, t2: 1120, t3: 984, t4: 984},
      a2:{t1: 0, t2: 1120, t3: 984, t4: 714},
      a3:{t1: 445, t2: 625, t3: 984, t4: 1200},
      a4:{t1: 445, t2: 625, t3: 720, t4: 1200}
    };
    const algorithm = new HungarianAlgorithm(matrix, mentors, mentees);
    expect(algorithm.findOptimalAssignments()).to.be.deep.equals([
      {
        mentee: "t1",
        mentor: "a1"
      },
      {
        mentee: "t2",
        mentor: "a2"
      },
      {
        mentee: "t4",
        mentor: "a4"
      },
      {
        mentee: "t3",
        mentor: "a3"
      }
    ]);
  });
});
const dateForOldMentee = new Date(Date.now() - (365 + 30) * 24 * 60 * 60 * 1000);
const dateForNewMentee = new Date();

const a1 = new Participant(
  ParticipantType.Mentor,
    "a1",
    new Date(), 
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Yellow },
    { }
);
const a2 = new Participant(
  ParticipantType.Mentor,
    "a2",
    new Date(),
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Red },
    { t1: true }
);
const a3 = new Participant(
  ParticipantType.Mentor,
    "a3",
    new Date(),
    { t1: VoteClassification.Yellow, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Green },
    { }
);
const a4 = new Participant(
  ParticipantType.Mentor,
    "a4",
    new Date(),
    { t1: VoteClassification.Yellow, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Green },
    { }
);
const t1 = new Participant(
  ParticipantType.Mentee,
     "t1",
     dateForNewMentee,
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Red, a4: VoteClassification.Red },
     { a2: true }
);
const t2 = new Participant(
  ParticipantType.Mentee,
     "t2",
     dateForNewMentee,
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Red, a4: VoteClassification.Red },
     { }
);
const t3 = new Participant(
  ParticipantType.Mentee,
     "t3",
     dateForOldMentee,
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green, a4: VoteClassification.Yellow },
    { }
);
const t4 = new Participant(
  ParticipantType.Mentee,
     "t4",
     dateForOldMentee,
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green, a4: VoteClassification.Green },
    { }
);

const mentees: Participant[] = 
  [ t1, t2, t3, t4 ];
const mentors: Participant[] = 
  [ a1, a2, a4, a3 ];