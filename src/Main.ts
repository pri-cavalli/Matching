import MatchingFinder from "./MatchingFinder";
import { mentors, mentees } from "./Data";
import { Display } from "./MatchingDisplayer";
import { VoteClassificationTiebreaker } from "./tiebreaker/VoteClassificationTiebreaker";
import { OptionsPreferenceTiebreaker } from "./tiebreaker/OptionsPreferenceTiebreaker";
import { StartDateTiebreaker, TimeTiebreakType } from "./tiebreaker/StartDateTiebreaker";
import { FirstOptionTiebreaker } from "./tiebreaker/FirstOptionTiebreaker";
import { DesiredTiebreaker, DesiredTiebreakerType } from "./tiebreaker/DesiredTiebreaker";

export function main(): void {
    const voteClassificationTiebreaker = new VoteClassificationTiebreaker();
    const optionsPreferenceTiebreaker = new OptionsPreferenceTiebreaker();
    const oldestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Oldest, new Date(2019, 4));
    const newestStartDateTiebreaker = new StartDateTiebreaker(TimeTiebreakType.Newest, new Date(2019, 12));
    const firstOptionTiebreaker = new FirstOptionTiebreaker();
    const mostDesiredOptionTiebreaker = new DesiredTiebreaker(mentors, mentees, DesiredTiebreakerType.MostDesired);
    const mostUndesiredOptionTiebreaker = new DesiredTiebreaker(mentors, mentees, DesiredTiebreakerType.MostUndesired);
    
    const menteesTiebreakers = [voteClassificationTiebreaker, optionsPreferenceTiebreaker, mostUndesiredOptionTiebreaker, firstOptionTiebreaker];
    const mentorsTiebreakers = [voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker, newestStartDateTiebreaker, mostUndesiredOptionTiebreaker, firstOptionTiebreaker];
    
    
    const matching = new MatchingFinder(mentors, mentees);
    matching.setPreferenceListInMentors(mentorsTiebreakers);
    matching.setPreferenceListInMentees(menteesTiebreakers);
    matching.run().then((result) => {
            Display.matching(result);
            process.exit();
        }
    );
}

main();
