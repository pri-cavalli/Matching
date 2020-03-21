import MatchingFinder from "./MatchingFinder";
import { mentors, mentees } from "./Data";

const matching = new MatchingFinder(mentors, mentees);
matching.run();
matching.displayMatching();
