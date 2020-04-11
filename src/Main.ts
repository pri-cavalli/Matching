import MatchingFinder from "./MatchingFinder";
import { mentors, mentees } from "./Data";
import { Display } from "./MatchingDisplayer";
import { VoteClassificationTiebreaker } from "./tiebreaker/VoteClassificationTiebreaker";
import { OptionsPreferenceTiebreaker } from "./tiebreaker/OptionsPreferenceTiebreaker";
import { OldestStartDateTiebreaker } from "./tiebreaker/OldestStartDateTiebreaker";
import { FirstOptionTiebreaker } from "./tiebreaker/FirstOptionTiebreaker";
import { MostDesiredParticipantTiebreaker } from "./tiebreaker/MostDesiredParticipantTiebreaker";

const voteClassificationTiebreaker = new VoteClassificationTiebreaker();
const optionsPreferenceTiebreaker = new OptionsPreferenceTiebreaker();
const oldestStartDateTiebreaker = new OldestStartDateTiebreaker(new Date(2019, 4));
const firstOptionTiebreaker = new FirstOptionTiebreaker();
const mostDesiredOptionTiebreaker = new MostDesiredParticipantTiebreaker(mentors, mentees);

const menteesTiebreakers = [voteClassificationTiebreaker, optionsPreferenceTiebreaker, mostDesiredOptionTiebreaker];
const mentorsTiebreakers = [voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker];


const matching = new MatchingFinder(mentors, mentees);
matching.setPreferenceListInMentors(mentorsTiebreakers);
matching.setPreferenceListInMentees(menteesTiebreakers);
matching.run().then((result) => {
        Display.matching(result);
        process.exit();
    }
);
