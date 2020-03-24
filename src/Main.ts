import MatchingFinder from "./MatchingFinder";
import { mentors, mentees } from "./Data";
import { voteClassificationTiebreaker } from "./tiebreaker/VoteClassificationTiebreaker";
import { oldestStartDateTiebreaker } from "./tiebreaker/OldestStartDateTiebreaker";
import { Display } from "./MatchingDisplayer";

const matching = new MatchingFinder(mentors, mentees);
matching.setTiebreaksInMentors([voteClassificationTiebreaker, oldestStartDateTiebreaker]);
matching.setTiebreaksInMentees([voteClassificationTiebreaker, oldestStartDateTiebreaker]);

Display.matching(matching.run());
