import "mocha";
import { mentors, mentees } from "../src/Data";
import { voteClassificationTiebreaker } from "../src/tiebreaker/VoteClassificationTiebreaker";
import { optionsPreferenceTiebreaker } from "../src/tiebreaker/OptionsPreferenceTiebreaker";
import { oldestStartDateTiebreaker } from "../src/tiebreaker/OldestStartDateTiebreaker";
import MatchingFinder from "../src/MatchingFinder";
import { Display } from "../src/MatchingDisplayer";

describe.only("Main tests", () => {
  describe("build preference list", () => {
    it("", async () => {
      const matching = new MatchingFinder(mentors, mentees);
      matching.setPreferenceListInMentors([voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker])//, popOptionsTiebreaker]);
      matching.setPreferenceListInMentees([voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker])//, popOptionsTiebreaker]);
      matching.run().then((result) => 
        Display.matching(result)
    );
    });
  }); 
}); 