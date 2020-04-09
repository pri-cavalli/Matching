import { Participant, ParticipantType } from "./Participant";
import { VoteClassification } from "./Vote";


const luis = new Participant(
    ParticipantType.Mentor,
    "luis",
    new Date(2009, 12), 
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Yellow, 
      vinicius: VoteClassification.Green, giovana: VoteClassification.Red, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    }
);
const carol = new Participant(
    ParticipantType.Mentor,
    "carol",
    new Date(2010, 2),
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Yellow 
    }
);
const priscila = new Participant(
    ParticipantType.Mentor,
    "priscila",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    }
);
const maiara = new Participant(
    ParticipantType.Mentor,
    "maiara",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Green, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    }
);
const mateus = new Participant(
    ParticipantType.Mentor,
    "mateus",
    new Date(2013, 12), 
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Green, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Red, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    }
);
const cassiano = new Participant(
    ParticipantType.Mentor,
    "cassiano",
    new Date(2015, 2),
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Red, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green 
    }
);
const lucas = new Participant(
    ParticipantType.Mentor,
    "lucas",
    new Date(2018, 3),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green
    }
);
const marcia = new Participant(
    ParticipantType.Mentor,
    "marcia",
    new Date(2007, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Red, henrique: VoteClassification.Yellow, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Green, natalia: VoteClassification.Red
    }
);
 const guilherme = new Participant(
    ParticipantType.Mentor,
     "guilherme",
     new Date(2007, 12), 
     { joice: VoteClassification.Red, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Yellow 
     }
 );
 const luan = new Participant(
    ParticipantType.Mentor,
     "luan",
     new Date(2015, 5),
     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Yellow, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Red, natalia: VoteClassification.Red
     }
 );
 const gabriel = new Participant(
    ParticipantType.Mentor,
     "gabriel",
     new Date(2015, 1),
     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     }
 );
 const daniel = new Participant(
    ParticipantType.Mentor,
     "daniel",
     new Date(2017, 4),
     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     }
 );
export const joice = new Participant(
    ParticipantType.Mentee,
    "joice",
    new Date(2018, 12),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Red, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Red
    }
);
const nicolas = new Participant(
    ParticipantType.Mentee,
    "nicolas",
    new Date(2018, 10),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Green, guilherme: VoteClassification.Red, daniel: VoteClassification.Yellow
    }
);
const willian = new Participant(
    ParticipantType.Mentee,
    "willian",
    new Date(2019, 5),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Green, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Green, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
);
const wagner = new Participant(
    ParticipantType.Mentee,
    "wagner",
    new Date(2019, 5),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
);
 const natalia = new Participant(
    ParticipantType.Mentee,
     "natalia",
     new Date(2020, 1),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
 );
 const pedro = new Participant(
    ParticipantType.Mentee,
     "pedro",
     new Date(2019, 10),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
 );
 const giovana = new Participant(
    ParticipantType.Mentee,
     "giovana",
     new Date(2020, 2),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
     }
 );
 const vinicius = new Participant(
    ParticipantType.Mentee,
     "vinicius",
     new Date(2019, 2),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
 );
const athos = new Participant(
    ParticipantType.Mentee,
    "athos",
    new Date(2020, 3),
    { luis: VoteClassification.Yellow, carol: VoteClassification.Red, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Red, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    }
);
const felipe = new Participant(
    ParticipantType.Mentee,
    "felipe",
    new Date(2019, 3),
    { luis: VoteClassification.Yellow, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Green, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    }
);
const henrique = new Participant(
    ParticipantType.Mentee,
    "henrique",
    new Date(2020, 1),
    { luis: VoteClassification.Green, carol: VoteClassification.Yellow, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
);
const joao = new Participant(
    ParticipantType.Mentee,
    "joao",
    new Date(2020, 1),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Yellow, maiara: VoteClassification.Green,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    }
);
carol.alreadyWorkedWith = [{participant: joice, mentorshipStartDate: new Date(2019, 9)}];
joice.alreadyWorkedWith = [{participant: carol, mentorshipStartDate: new Date(2019, 9)}, {participant: marcia, mentorshipStartDate: new Date(2019, 4)}];
marcia.alreadyWorkedWith = [{participant: joice, mentorshipStartDate: new Date(2019, 4)}];
export const mentees: Participant[] = [ joice, nicolas, willian, wagner, joao, henrique, felipe, athos, vinicius, giovana, pedro, natalia ];
export const mentors: Participant[] = [ luis, carol, maiara, priscila, marcia, lucas, cassiano, mateus, gabriel, luan, guilherme, daniel ];



const participants: {[participant: string]: Participant} = {};
mentors.forEach(mentor => {participants[mentor.name] = mentor });
mentees.forEach(mentee => {participants[mentee.name] = mentee });

export const participantsMap = participants;