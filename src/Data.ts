import { Mentor, Mentee } from "./Participant";
import { VoteClassification } from "./Vote";


const luis = new Mentor(
    "luis",
    new Date(2009, 12), 
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Red, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    }
);
const carol = new Mentor(
    "carol",
    new Date(2010, 2),
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Yellow 
    }
);
const priscila = new Mentor(
    "priscila",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green 
    }
);
const maiara = new Mentor(
    "maiara",
    new Date(2018, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Green, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    }
);
const mateus = new Mentor(
    "mateus",
    new Date(2013, 12), 
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Green, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Red, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
    }
);
const cassiano = new Mentor(
    "cassiano",
    new Date(2015, 2),
    { joice: VoteClassification.Green, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Red, henrique: VoteClassification.Red, felipe: VoteClassification.Red, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green 
    }
);
const lucas = new Mentor(
    "lucas",
    new Date(2018, 3),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Red,
      joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Green, natalia: VoteClassification.Green
    }
);
const marcia = new Mentor(
    "marcia",
    new Date(2007, 4),
    { joice: VoteClassification.Yellow, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
      joao: VoteClassification.Red, henrique: VoteClassification.Yellow, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Green, pedro: VoteClassification.Green, natalia: VoteClassification.Red
    }
);
 const guilherme = new Mentor(
     "guilherme",
     new Date(2007, 12), 
     { joice: VoteClassification.Red, nicolas: VoteClassification.Red, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Green, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Yellow 
     }
 );
 const luan = new Mentor(
     "luan",
     new Date(2015, 5),
     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Yellow, willian: VoteClassification.Yellow, wagner: VoteClassification.Green,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Yellow, 
       vinicius: VoteClassification.Yellow, giovana: VoteClassification.Yellow, pedro: VoteClassification.Red, natalia: VoteClassification.Red
     }
 );
 const gabriel = new Mentor(
     "gabriel",
     new Date(2015, 1),
     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Green, henrique: VoteClassification.Yellow, felipe: VoteClassification.Yellow, athos: VoteClassification.Green, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     }
 );
 const daniel = new Mentor(
     "daniel",
     new Date(2017, 4),
     { joice: VoteClassification.Yellow, nicolas: VoteClassification.Green, willian: VoteClassification.Yellow, wagner: VoteClassification.Yellow,
       joao: VoteClassification.Yellow, henrique: VoteClassification.Green, felipe: VoteClassification.Yellow, athos: VoteClassification.Red, 
       vinicius: VoteClassification.Green, giovana: VoteClassification.Yellow, pedro: VoteClassification.Yellow, natalia: VoteClassification.Green
     }
 );
export const mentors: Mentor[] = [ luis, carol, maiara, priscila, marcia, lucas, cassiano, mateus, gabriel, luan, guilherme, daniel ];

const joice = new Mentee(
    "joice",
    new Date(2018, 12),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Red, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Red
    }
);
const nicolas = new Mentee(
    "nicolas",
    new Date(2018, 10),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Green, guilherme: VoteClassification.Red, daniel: VoteClassification.Yellow
    }
);
const willian = new Mentee(
    "willian",
    new Date(2019, 5),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Green, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Green, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
);
const wagner = new Mentee(
    "wagner",
    new Date(2019, 6),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
);
 const natalia = new Mentee(
     "natalia",
     new Date(2020, 1),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
 );
 const pedro = new Mentee(
     "pedro",
     new Date(2019, 10),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Red, maiara: VoteClassification.Red,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
 );
 const giovana = new Mentee(
     "giovana",
     new Date(2020, 2),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
     }
 );
 const vinicius = new Mentee(
     "vinicius",
     new Date(2019, 2),
     { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Green,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Red,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
 );
const athos = new Mentee(
    "athos",
    new Date(2020, 3),
    { luis: VoteClassification.Yellow, carol: VoteClassification.Red, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Red, lucas: VoteClassification.Green, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    }
);
const felipe = new Mentee(
    "felipe",
    new Date(2019, 3),
    { luis: VoteClassification.Yellow, carol: VoteClassification.Green, priscila: VoteClassification.Green, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Green, cassiano: VoteClassification.Green, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    }
);
const henrique = new Mentee(
    "henrique",
    new Date(2020, 7),
    { luis: VoteClassification.Green, carol: VoteClassification.Yellow, priscila: VoteClassification.Yellow, maiara: VoteClassification.Yellow,
      marcia: VoteClassification.Green, lucas: VoteClassification.Yellow, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Green,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Red, daniel: VoteClassification.Green
    }
);
const joao = new Mentee(
    "joao",
    new Date(2020, 8),
    { luis: VoteClassification.Green, carol: VoteClassification.Green, priscila: VoteClassification.Yellow, maiara: VoteClassification.Green,
      marcia: VoteClassification.Yellow, lucas: VoteClassification.Red, cassiano: VoteClassification.Yellow, mateus: VoteClassification.Yellow,
      gabriel: VoteClassification.Yellow, luan: VoteClassification.Yellow, guilherme: VoteClassification.Yellow, daniel: VoteClassification.Green
    }
);
export const mentees: Mentee[] = [ joice, nicolas, willian, wagner, joao, henrique, felipe, athos, vinicius, giovana, pedro, natalia ];
