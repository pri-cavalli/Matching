import { mentors, mentees } from "./Data";
import { Display } from "./MatchingDisplayer";
import { AllOptimalMatchingFinder } from "./AllOptimalMatchingFinder";

export function main(): void {
    const allOptimalMatchings = AllOptimalMatchingFinder.find(mentors, mentees);
    Display.matchings(allOptimalMatchings, mentors, mentees);
}

console.time("execution");
main();
console.timeEnd("execution");
