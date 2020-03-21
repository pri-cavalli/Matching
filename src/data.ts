import { Mentor, Mentee } from "./Participant";
import { VoteClassification } from "./Vote";


const luis = new Mentor(
    "luis",
    new Date(2009, 12), 
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow }
);
const carol = new Mentor(
    "carol",
    new Date(2010, 2),
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red }
);
const priscila = new Mentor(
    "priscila",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green }
);
const maiara = new Mentor(
    "maiara",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green }
);
export const mentors: Mentor[] = [ priscila, luis, carol, maiara ];

const joice = new Mentee(
    "joice",
    new Date(2018, 12),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red }
);
const nicolas = new Mentee(
    "nicolas",
    new Date(2018, 11),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red }
);
const willian = new Mentee(
    "willian",
    new Date(2019, 5),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow }
);
const wagner = new Mentee(
    "wagner",
    new Date(2019, 5),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green  }
);
export const mentees: Mentee[] = [ joice, nicolas, willian, wagner ];

/*
    resultado final = <luis, nicolas> <carol, joice>
*/
