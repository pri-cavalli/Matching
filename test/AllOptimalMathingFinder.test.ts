import { expect } from "chai";
import "mocha";
import { AllOptimalMatchingFinder } from "../src/AllOptimalMatchingFinder";
import { Participant, ParticipantType } from "../src/Participant";
import { VoteClassification } from "../src/Vote";

describe("AllOptimalMatchingFinder tests", () => {
    it("When has more than one optimal matching, should find all of them", () => {
      expect(AllOptimalMatchingFinder.find(mentors, mentees)).to.be.deep.equals([
          [
            { mentee: "t1", mentor: "a1"},
            { mentee: "t2", mentor: "a2"},
            { mentee: "t3", mentor: "a3"},
          ],
          [
            { mentee: "t1", mentor: "a1"},
            { mentee: "t3", mentor: "a2"},
            { mentee: "t2", mentor: "a3"},
          ],
          [
            { mentee: "t2", mentor: "a1"},
            { mentee: "t3", mentor: "a2"},
            { mentee: "t1", mentor: "a3"},
          ],
          [
            { mentee: "t3", mentor: "a1"},
            { mentee: "t2", mentor: "a2"},
            { mentee: "t1", mentor: "a3"},
          ]
        ]);
    });
});

const a1 = new Participant(
  ParticipantType.Mentor,
    "a1",
    new Date(), 
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Green },
    { }
);
const a2 = new Participant(
  ParticipantType.Mentor,
    "a2",
    new Date(),
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Green },
    { t1: true }
);
const a3 = new Participant(
  ParticipantType.Mentor,
    "a3",
    new Date(),
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Green },
    { }
);
const t1 = new Participant(
  ParticipantType.Mentee,
     "t1",
     new Date(),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green },
     { a2: true }
);
const t2 = new Participant(
  ParticipantType.Mentee,
     "t2",
     new Date(),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green },
     { }
);
const t3 = new Participant(
  ParticipantType.Mentee,
     "t3",
     new Date(),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green },
    { }
);

const mentees: Participant[] = 
  [ t1, t2, t3 ];
const mentors: Participant[] = 
  [ a1, a2, a3 ];