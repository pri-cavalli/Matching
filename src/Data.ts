import { Participant, ParticipantType } from "./Participant";
import { VoteClassification } from "./Vote";


const luis = new Participant(
  ParticipantType.Mentor,
    "luis",
    new Date(2009, 12), 
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Yellow, 
      vinicius: VoteClassification.Green, giovana: VoteClassification.Red, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    },
    {name: 1}
);
const carol = new Participant(
  ParticipantType.Mentor,
    "carol",
    new Date(2010, 2),
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
      vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Yellow 
    },
    { joice: 1 }
);
const priscila = new Participant(
  ParticipantType.Mentor,
    "priscila",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
      vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    },
    {name: 1}
);
const maiara = new Participant(
  ParticipantType.Mentor,
    "maiara",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Green, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
      vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    },
    {name: 1}
);
const mateus = new Participant(
  ParticipantType.Mentor,
    "mateus",
    new Date(2013, 12), 
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Green, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Red, felipe: VoteClassification.Yellow, athos: VoteClassification.Yellow, 
      vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    },
    {name: 1}
);
const cassiano = new Participant(
  ParticipantType.Mentor,
    "cassiano",
    new Date(2015, 2),
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Red, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green 
    },
    {name: 1}
);
const lucas = new Participant(
  ParticipantType.Mentor,
    "lucas",
    new Date(2018, 3),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
      vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green
    },
    {name: 1}
);
const marcia = new Participant(
  ParticipantType.Mentor,
     "marcia",
     new Date(2007, 4),
     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Red, henrique: VoteClassification.Yellow, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Green, natalia: VoteClassification.Red
    },
    { joice: 1}
);
 const guilherme = new Participant(
    ParticipantType.Mentor,
    "guilherme",
    new Date(2007, 12), 
    { joice: VoteClassification.Red, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
      vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Yellow 
    },
    {name: 1}
);
 const luan = new Participant(
   ParticipantType.Mentor,
      "luan",
      new Date(2015, 5),
      { joice: VoteClassification.Yellow, nicolas: VoteClassification.Yellow, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Red, natalia: VoteClassification.Red
     },
     {name: 1}
 );
 const gabriel = new Participant(
   ParticipantType.Mentor,
      "gabriel",
      new Date(2015, 1),
      { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     },
     {name: 1}
 );
 const daniel = new Participant(
   ParticipantType.Mentor,
      "daniel",
      new Date(2017, 4),
      { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     },
     {name: 1}
 );
export const joice = new Participant(
  ParticipantType.Mentee,
     "joice",
     new Date(2018, 12),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Red, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Red
    },
     { carol: 2, marcia: 1 }
);
const nicolas = new Participant(
  ParticipantType.Mentee,
     "nicolas",
     new Date(2018, 10),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Green, guilherme: VoteClassification.Red, daniel: VoteClassification.Yellow
    },
    {name: 1}
);
const willian = new Participant(
  ParticipantType.Mentee,
     "willian",
     new Date(2019, 5),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Green, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Green, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    {name: 1}
);
const wagner = new Participant(
  ParticipantType.Mentee,
     "wagner",
     new Date(2019, 5),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Green, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    {name: 1}
);
 const natalia = new Participant(
   ParticipantType.Mentee,
      "natalia",
      new Date(2020, 1),
      { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    {name: 1}
);
 const pedro = new Participant(
   ParticipantType.Mentee,
      "pedro",
      new Date(2019, 10),
      { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    {name: 1}
);
 const giovana = new Participant(
   ParticipantType.Mentee,
      "giovana",
      new Date(2020, 2),
      { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
     },
     {}
);
 const vinicius = new Participant(
   ParticipantType.Mentee,
      "vinicius",
      new Date(2019, 2),
      { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    {name: 1}
);
const athos = new Participant(
  ParticipantType.Mentee,
     "athos",
     new Date(2020, 3),
     { luis: VoteClassification.Yellow, carol: VoteClassification.Red, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Red, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    },
     {}
);
const felipe = new Participant(
  ParticipantType.Mentee,
     "felipe",
     new Date(2019, 3),
     { luis: VoteClassification.Yellow, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Green, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    },
    {name: 1}
);
const henrique = new Participant(
  ParticipantType.Mentee,
     "henrique",
     new Date(2020, 1),
     { luis: VoteClassification.Green, carol: VoteClassification.Yellow, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    },
    {name: 1}
);
const joao = new Participant(
  ParticipantType.Mentee,
     "joao",
     new Date(2020, 1),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Yellow, maiara: VoteClassification.Green,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    },
    {name: 1}
);




const x1 = new Participant(
  ParticipantType.Mentee,
    "x1",
    new Date(2020, 1),
    { y1: VoteClassification.Green, y2: VoteClassification.Yellow},
   {name: 1}
);
const x2 = new Participant(
  ParticipantType.Mentee,
    "x2",
    new Date(2020, 1),
    { y1: VoteClassification.Green, y2: VoteClassification.Green},
   {name: 1}
);

const y1 = new Participant(
  ParticipantType.Mentee,
    "y1",
    new Date(2020, 1),
    { x1: VoteClassification.Yellow, x2: VoteClassification.Green},
   {name: 1}
);
const y2 = new Participant(
  ParticipantType.Mentee,
    "y2",
    new Date(2020, 1),
    { x1: VoteClassification.Green, x2: VoteClassification.Green},
   {name: 1}
);



export const mentees: Participant[] = 
  // [x1, x2];
  [ joice, nicolas, willian, wagner, joao, henrique, felipe, athos, vinicius, giovana, pedro, natalia ];
export const mentors: Participant[] = 
  // [y1, y2];
  [ luis, carol, maiara, priscila, marcia, lucas, cassiano, mateus, gabriel, luan, guilherme, daniel ];