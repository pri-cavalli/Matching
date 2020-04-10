import MatchingFinder from "./MatchingFinder";
import { mentors, mentees } from "./Data";
import { voteClassificationTiebreaker } from "./tiebreaker/VoteClassificationTiebreaker";
import { oldestStartDateTiebreaker } from "./tiebreaker/OldestStartDateTiebreaker";
import { Display } from "./MatchingDisplayer";
import { optionsPreferenceTiebreaker } from "./tiebreaker/OptionsPreferenceTiebreaker";
import { popOptionsTiebreaker } from "./tiebreaker/PopOptionsTiebreaker";


const matching = new MatchingFinder(mentors, mentees);
matching.setPreferenceListInMentors([voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker])//, popOptionsTiebreaker]);
matching.setPreferenceListInMentees([voteClassificationTiebreaker, optionsPreferenceTiebreaker])//, oldestStartDateTiebreaker])//, popOptionsTiebreaker]);
matching.run().then((result) => {
        Display.matching(result);
        process.exit();
    }
);
