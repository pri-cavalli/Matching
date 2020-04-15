import { MatrixBuilder } from "./MatrixBuilder";
import { mentors, mentees } from "./Data";

export function main(): void {
    const matrix = MatrixBuilder.build(mentors, mentees);
    debugger
}

main();
