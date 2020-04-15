import { Participant, ParticipantType } from "./Participant";
import { VoteClassification } from "./Vote";


const luis = {
    type: ParticipantType.Mentor,
    name: "luis",
    startDate: new Date(2009, 12), 
    votes: { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Yellow, 
      vinicius: VoteClassification.Green, giovana: VoteClassification.Red, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    },
    workedWith: []
};
const carol = {
    type: ParticipantType.Mentor,
    name: "carol",
    startDate: new Date(2010, 2),
    votes: { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Yellow 
    },
    workedWith: [{participant: "joice", mentorshipStartDate: new Date(2019, 9)}]
};
const priscila = {
    type: ParticipantType.Mentor,
    name: "priscila",
    startDate: new Date(2018, 4),
    votes: { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    },
    workedWith: []
};
const maiara = {
    type: ParticipantType.Mentor,
    name: "maiara",
    startDate: new Date(2018, 4),
    votes: { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Green, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    },
    workedWith: []
};
const mateus = {
    type: ParticipantType.Mentor,
    name: "mateus",
    startDate: new Date(2013, 12), 
    votes: { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Green, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Red, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    },
    workedWith: []
};
const cassiano = {
    type: ParticipantType.Mentor,
    name: "cassiano",
    startDate: new Date(2015, 2),
    votes: { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Red, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green 
    },
    workedWith: []
};
const lucas = {
    type: ParticipantType.Mentor,
    name: "lucas",
    startDate: new Date(2018, 3),
    votes: { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green
    },
    workedWith: []
};
const marcia = {
    type: ParticipantType.Mentor,
    name: "marcia",
    startDate: new Date(2007, 4),
    votes: { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Red, henrique: VoteClassification.Yellow, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Green, natalia: VoteClassification.Red
    },
    workedWith: [{participant: "joice", mentorshipStartDate: new Date(2019, 4)}]
};
 const guilherme = {
    type: ParticipantType.Mentor,
    name:  "guilherme",
    startDate:  new Date(2007, 12), 
    votes:  { joice: VoteClassification.Red, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Yellow 
     },
  workedWith: []
};
 const luan = {
    type: ParticipantType.Mentor,
    name:  "luan",
    startDate:  new Date(2015, 5),
    votes:  { joice: VoteClassification.Yellow, nicolas: VoteClassification.Yellow, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Red, natalia: VoteClassification.Red
     }
 ,
workedWith: [] };
 const gabriel = {
    type: ParticipantType.Mentor,
    name:  "gabriel",
    startDate:  new Date(2015, 1),
    votes:  { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     },
    workedWith: []
};
 const daniel = {
    type: ParticipantType.Mentor,
    name:  "daniel",
    startDate:  new Date(2017, 4),
    votes:  { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     },
    workedWith: []
};
export const joice = {
    type: ParticipantType.Mentee,
    name: "joice",
    startDate: new Date(2018, 12),
    votes: { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Red, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Red
    },
    workedWith: [{participant: "carol", mentorshipStartDate: new Date(2019, 9)}, {participant: "marcia", mentorshipStartDate: new Date(2019, 4)}]
};
const nicolas = {
    type: ParticipantType.Mentee,
    name: "nicolas",
    startDate: new Date(2018, 10),
    votes: { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Green, guilherme: VoteClassification.Red, daniel: VoteClassification.Yellow
    },
    workedWith: []
};
const willian = {
    type: ParticipantType.Mentee,
    name: "willian",
    startDate: new Date(2019, 5),
    votes: { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Green, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Green, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    workedWith: []
};
const wagner = {
    type: ParticipantType.Mentee,
    name: "wagner",
    startDate: new Date(2019, 5),
    votes: { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    workedWith: []
};
 const natalia = {
    type: ParticipantType.Mentee,
    name:  "natalia",
    startDate:  new Date(2020, 1),
    votes:  { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    workedWith: []
};
 const pedro = {
    type: ParticipantType.Mentee,
    name:  "pedro",
    startDate:  new Date(2019, 10),
    votes:  { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    workedWith: []
};
 const giovana = {
    type: ParticipantType.Mentee,
    name:  "giovana",
    startDate:  new Date(2020, 2),
    votes:  { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
     },
    workedWith: []
};
 const vinicius = {
    type: ParticipantType.Mentee,
    name:  "vinicius",
    startDate:  new Date(2019, 2),
    votes:  { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    workedWith: []
};
const athos = {
    type: ParticipantType.Mentee,
    name: "athos",
    startDate: new Date(2020, 3),
    votes: { luis: VoteClassification.Yellow, carol: VoteClassification.Red, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Red, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    },
    workedWith: []
};
const felipe = {
    type: ParticipantType.Mentee,
    name: "felipe",
    startDate: new Date(2019, 3),
    votes: { luis: VoteClassification.Yellow, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Green, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    },
    workedWith: []
};
const henrique = {
    type: ParticipantType.Mentee,
    name: "henrique",
    startDate: new Date(2020, 1),
    votes: { luis: VoteClassification.Green, carol: VoteClassification.Yellow, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    workedWith: []
};
const joao = {
    type: ParticipantType.Mentee,
    name: "joao",
    startDate: new Date(2020, 1),
    votes: { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Yellow, maiara: VoteClassification.Green,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    },
    workedWith: []
};

export const mentees: Participant[] = [ joice, nicolas, willian, wagner, joao, henrique, felipe, athos, vinicius, giovana, pedro, natalia ];
export const mentors: Participant[] = [ luis, carol, maiara, priscila, marcia, lucas, cassiano, mateus, gabriel, luan, guilherme, daniel ];



const participants: {[participant: string]: Participant} = {};
mentors.forEach(mentor => {participants[mentor.name] = mentor });
mentees.forEach(mentee => {participants[mentee.name] = mentee });

export const participantsMap = participants;