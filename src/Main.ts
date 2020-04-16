import { MatrixBuilder } from "./MatrixBuilder";
import { mentors, mentees } from "./Data";
import { HungarianAlgorithm } from "./HungarianAlgorithm";
import { Display } from "./MatchingDisplayer";

export function main(): void {
    const matrix = MatrixBuilder.build(mentors, mentees);
    const matchingFinder = new HungarianAlgorithm(matrix, mentors, mentees);
    const matching = matchingFinder.findAssignments();
    const matchingObjs = matching.map(({mentor, mentee}) => {
        const mentorObj = mentors.find(m => m.name === mentor)!;
        const menteeObj = mentees.find(m => m.name === mentee)!;
        return {mentor: mentorObj, mentee: menteeObj};
    })
    Display.matching(matchingObjs);
    debugger
}

main();
