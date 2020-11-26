import { mentors, mentees } from "./Data";
import { Display } from "./MatchingDisplayer";
import { AllOptimalMatchingFinder } from "./AllOptimalMatchingFinder";

/* istanbul ignore file: it's only useful for use the algorithm in console, the real application won't use it */
export function main(): void {
    const allOptimalMatchings = AllOptimalMatchingFinder.find(mentors, mentees);
    Display.matchings(allOptimalMatchings, mentors, mentees);
}

console.time("execution");
main();
console.timeEnd("execution");
