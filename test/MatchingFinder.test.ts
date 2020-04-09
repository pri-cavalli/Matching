// import { expect } from "chai";
// import "mocha";
// import MatchingFinder from "../src/MatchingFinder";
// import { VoteClassification } from "../src/Vote";
// import { Mentee, Mentor } from "../src/Participant";
// import { voteClassificationTiebreaker } from "../src/tiebreaker/VoteClassificationTiebreaker";
// import { oldestStartDateTiebreaker } from "../src/tiebreaker/OldestStartDateTiebreaker";

// export const mentors: Mentor[] = [
//   new Mentor(
//     "luis",
//     new Date(2009, 12), 
//     { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow }
//   ),
//   new Mentor(
//     "carol",
//     new Date(2010, 2),
//     { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red }
//   ),
//   new Mentor(
//     "priscila",
//     new Date(2018, 4),
//     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green }
//   ),
//   new Mentor(
//     "maiara",
//     new Date(2018, 4),
//     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green }
//   )
// ];
// export const mentees: Mentee[] = [
//   new Mentee(
//     "joice",
//     new Date(2018, 12),
//     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red }
//   ),
//   new Mentee(
//     "nicolas",
//     new Date(2018, 10),
//     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red }
//   ),
//   new Mentee(
//     "willian",
//     new Date(2019, 5),
//     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow }
//   ),
//   new Mentee(
//     "wagner",
//     new Date(2019, 5),
//     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green  }
//   )
// ];
// 
// describe("MatchingFinder tests", () => {
//   describe("run", () => {
//     it("should return empty array when don't have mentors and mentees", () => {
//       const matchingFinder = new MatchingFinder([], []);
//       expect(matchingFinder.run()).to.be.deep.equals([[]]);
//     });
//     it.only("should return array with pairs", () => {
//       const matchingFinder = new MatchingFinder(mentors, mentees);
//       matchingFinder.setPreferenceListInMentors([voteClassificationTiebreaker, oldestStartDateTiebreaker]);
//       expect(matchingFinder.run().map(
//         matching => matching.map(pair => {
//           return [ pair.mentor.name, pair.mentee.name ];
//         }
//       ))).to.be.deep.equals([[                      
//         ['luis', 'nicolas'],   
//         ['maiara', 'wagner'],  
//         ['carol', 'joice'],    
//         ['priscila', 'willian']
//       ]]);
//     });
//   }); 
// }); 