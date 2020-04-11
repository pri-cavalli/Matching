import MatchingFinder from "./MatchingFinder";
import { mentors, mentees } from "./Data";
import { Display } from "./MatchingDisplayer";
import { VoteClassificationTiebreaker } from "./tiebreaker/VoteClassificationTiebreaker";
import { OptionsPreferenceTiebreaker } from "./tiebreaker/OptionsPreferenceTiebreaker";
import { OldestStartDateTiebreaker } from "./tiebreaker/OldestStartDateTiebreaker";
import { GetFirstOptionTiebreaker } from "./tiebreaker/GetFirstOptionTiebreaker";

const voteClassificationTiebreaker = new VoteClassificationTiebreaker();
const optionsPreferenceTiebreaker = new OptionsPreferenceTiebreaker();
const oldestStartDateTiebreaker = new OldestStartDateTiebreaker();
const getFirstOptionTiebreaker = new GetFirstOptionTiebreaker();
const matching = new MatchingFinder(mentors, mentees);
matching.setPreferenceListInMentors([voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker])//, getFirstOptionTiebreaker]);
matching.setPreferenceListInMentees([voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker])//, getFirstOptionTiebreaker]);
matching.run().then((result) => {
        Display.matching(result);
        process.exit();
    }
);
