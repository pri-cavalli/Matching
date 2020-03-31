import MatchingFinder from "./MatchingFinder";
import { mentors, mentees } from "./Data";
import { voteClassificationTiebreaker } from "./tiebreaker/VoteClassificationTiebreaker";
import { oldestStartDateTiebreaker } from "./tiebreaker/OldestStartDateTiebreaker";
import { Display } from "./MatchingDisplayer";
import { optionsPreferenceTiebreaker } from "./tiebreaker/OptionsPreferenceTiebreaker";

const matching = new MatchingFinder(mentors, mentees);
matching.setTiebreaksInMentors([voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker]);
matching.setTiebreaksInMentees([voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker]);

Display.matching(matching.run());
