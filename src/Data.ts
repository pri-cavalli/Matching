import { Participant, ParticipantType } from "./Participant";
import { VoteClassification } from "./Vote";


const a1 = new Participant(
  ParticipantType.Mentor,
    "a1",
    new Date(2009, 12), 
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Yellow,
      t12: VoteClassification.Yellow, t11: VoteClassification.Red, t10: VoteClassification.Red, t9: VoteClassification.Yellow, 
      t8: VoteClassification.Green, t7: VoteClassification.Red, t6: VoteClassification.Yellow, t5: VoteClassification.Green 
    },
    { }
);
const a2 = new Participant(
  ParticipantType.Mentor,
    "a2",
    new Date(2010, 2),
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Red,
      t12: VoteClassification.Green, t11: VoteClassification.Yellow, t10: VoteClassification.Yellow, t9: VoteClassification.Green, 
      t8: VoteClassification.Green, t7: VoteClassification.Yellow, t6: VoteClassification.Green, t5: VoteClassification.Yellow 
    },
    { t1: true }
);
const a3 = new Participant(
  ParticipantType.Mentor,
    "a3",
    new Date(2018, 4),
    { t1: VoteClassification.Yellow, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Green,
      t12: VoteClassification.Yellow, t11: VoteClassification.Green, t10: VoteClassification.Yellow, t9: VoteClassification.Green, 
      t8: VoteClassification.Yellow, t7: VoteClassification.Green, t6: VoteClassification.Yellow, t5: VoteClassification.Green 
    },
    { }
);
const a4 = new Participant(
  ParticipantType.Mentor,
    "a4",
    new Date(2018, 4),
    { t1: VoteClassification.Yellow, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Green,
      t12: VoteClassification.Green, t11: VoteClassification.Green, t10: VoteClassification.Yellow, t9: VoteClassification.Red, 
      t8: VoteClassification.Green, t7: VoteClassification.Yellow, t6: VoteClassification.Yellow, t5: VoteClassification.Green
    },
    { }
);
const a5 = new Participant(
  ParticipantType.Mentor,
    "a5",
    new Date(2013, 12), 
    { t1: VoteClassification.Yellow, t2: VoteClassification.Red, t3: VoteClassification.Green, t4: VoteClassification.Red,
      t12: VoteClassification.Green, t11: VoteClassification.Red, t10: VoteClassification.Yellow, t9: VoteClassification.Yellow, 
      t8: VoteClassification.Green, t7: VoteClassification.Yellow, t6: VoteClassification.Yellow, t5: VoteClassification.Green
    },
    { }
);
const a6 = new Participant(
  ParticipantType.Mentor,
    "a6",
    new Date(2015, 2),
    { t1: VoteClassification.Green, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Red,
      t12: VoteClassification.Red, t11: VoteClassification.Red, t10: VoteClassification.Red, t9: VoteClassification.Green, 
       t8: VoteClassification.Yellow, t7: VoteClassification.Yellow, t6: VoteClassification.Green, t5: VoteClassification.Green 
    },
    { }
);
const a7 = new Participant(
  ParticipantType.Mentor,
    "a7",
    new Date(2018, 3),
    { t1: VoteClassification.Yellow, t2: VoteClassification.Red, t3: VoteClassification.Yellow, t4: VoteClassification.Red,
      t12: VoteClassification.Green, t11: VoteClassification.Yellow, t10: VoteClassification.Yellow, t9: VoteClassification.Red, 
      t8: VoteClassification.Yellow, t7: VoteClassification.Yellow, t6: VoteClassification.Green, t5: VoteClassification.Green
    },
    { }
);
const a8 = new Participant(
  ParticipantType.Mentor,
     "a8",
     new Date(2007, 4),
     { t1: VoteClassification.Yellow, t2: VoteClassification.Red, t3: VoteClassification.Yellow, t4: VoteClassification.Green,
      t12: VoteClassification.Red, t11: VoteClassification.Yellow, t10: VoteClassification.Green, t9: VoteClassification.Yellow, 
       t8: VoteClassification.Yellow, t7: VoteClassification.Green, t6: VoteClassification.Green, t5: VoteClassification.Red
    },
    { t1: true}
);
 const a9 = new Participant(
    ParticipantType.Mentor,
    "a9",
    new Date(2007, 12), 
    { t1: VoteClassification.Red, t2: VoteClassification.Red, t3: VoteClassification.Yellow, t4: VoteClassification.Yellow,
      t12: VoteClassification.Yellow, t11: VoteClassification.Green, t10: VoteClassification.Green, t9: VoteClassification.Yellow, 
      t8: VoteClassification.Yellow, t7: VoteClassification.Yellow, t6: VoteClassification.Yellow, t5: VoteClassification.Yellow 
    },
    { }
);
 const a10 = new Participant(
   ParticipantType.Mentor,
      "a10",
      new Date(2015, 5),
      { t1: VoteClassification.Yellow, t2: VoteClassification.Yellow, t3: VoteClassification.Yellow, t4: VoteClassification.Yellow,
       t12: VoteClassification.Yellow, t11: VoteClassification.Green, t10: VoteClassification.Yellow, t9: VoteClassification.Yellow, 
       t8: VoteClassification.Yellow, t7: VoteClassification.Yellow, t6: VoteClassification.Red, t5: VoteClassification.Red
     },
     { }
 );
 const a11 = new Participant(
   ParticipantType.Mentor,
      "a11",
      new Date(2015, 1),
      { t1: VoteClassification.Yellow, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Yellow,
       t12: VoteClassification.Green, t11: VoteClassification.Yellow, t10: VoteClassification.Yellow, t9: VoteClassification.Green, 
       t8: VoteClassification.Green, t7: VoteClassification.Yellow, t6: VoteClassification.Yellow, t5: VoteClassification.Green
     },
     { }
 );
 const a12 = new Participant(
   ParticipantType.Mentor,
      "a12",
      new Date(2017, 4),
      { t1: VoteClassification.Yellow, t2: VoteClassification.Green, t3: VoteClassification.Yellow, t4: VoteClassification.Yellow,
       t12: VoteClassification.Yellow, t11: VoteClassification.Green, t10: VoteClassification.Yellow, t9: VoteClassification.Red, 
       t8: VoteClassification.Green, t7: VoteClassification.Yellow, t6: VoteClassification.Yellow, t5: VoteClassification.Green
     },
     { }
 );
export const t1 = new Participant(
  ParticipantType.Mentee,
     "t1",
     new Date(2018, 12),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Red, a4: VoteClassification.Red,
      a8: VoteClassification.Yellow, a7: VoteClassification.Red, a6: VoteClassification.Red, a5: VoteClassification.Red,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Red, a12: VoteClassification.Red
    },
     { a2: true, a8: true }
);
const t2 = new Participant(
  ParticipantType.Mentee,
     "t2",
     new Date(2018, 10),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Red, a4: VoteClassification.Red,
      a8: VoteClassification.Yellow, a7: VoteClassification.Red, a6: VoteClassification.Yellow, a5: VoteClassification.Red,
      a11: VoteClassification.Yellow, a10: VoteClassification.Green, a9: VoteClassification.Red, a12: VoteClassification.Yellow
    },
    { }
);
const t3 = new Participant(
  ParticipantType.Mentee,
     "t3",
     new Date(2019, 5),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green, a4: VoteClassification.Yellow,
      a8: VoteClassification.Green, a7: VoteClassification.Yellow, a6: VoteClassification.Green, a5: VoteClassification.Green,
      a11: VoteClassification.Green, a10: VoteClassification.Yellow, a9: VoteClassification.Red, a12: VoteClassification.Green
    },
    { }
);
const t4 = new Participant(
  ParticipantType.Mentee,
     "t4",
     new Date(2019, 5),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green, a4: VoteClassification.Green,
      a8: VoteClassification.Green, a7: VoteClassification.Green, a6: VoteClassification.Yellow, a5: VoteClassification.Red,
      a11: VoteClassification.Yellow, a10: VoteClassification.Green, a9: VoteClassification.Red, a12: VoteClassification.Green
    },
    { }
);
 const t5 = new Participant(
   ParticipantType.Mentee,
      "t5",
      new Date(2020, 1),
      { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Red, a4: VoteClassification.Red,
      a8: VoteClassification.Green, a7: VoteClassification.Green, a6: VoteClassification.Yellow, a5: VoteClassification.Red,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Red, a12: VoteClassification.Green
    },
    { }
);
 const t6 = new Participant(
   ParticipantType.Mentee,
      "t6",
      new Date(2019, 10),
      { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Red, a4: VoteClassification.Red,
      a8: VoteClassification.Green, a7: VoteClassification.Green, a6: VoteClassification.Yellow, a5: VoteClassification.Red,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Red, a12: VoteClassification.Green
    },
    { }
);
 const t7 = new Participant(
   ParticipantType.Mentee,
      "t7",
      new Date(2020, 2),
      { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green, a4: VoteClassification.Yellow,
      a8: VoteClassification.Green, a7: VoteClassification.Green, a6: VoteClassification.Yellow, a5: VoteClassification.Red,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Red, a12: VoteClassification.Green
     },
     {}
);
 const t8 = new Participant(
   ParticipantType.Mentee,
      "t8",
      new Date(2019, 2),
      { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Green, a4: VoteClassification.Green,
      a8: VoteClassification.Green, a7: VoteClassification.Green, a6: VoteClassification.Yellow, a5: VoteClassification.Red,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Red, a12: VoteClassification.Green
    },
    { }
);
const t9 = new Participant(
  ParticipantType.Mentee,
     "t9",
     new Date(2020, 3),
     { a1: VoteClassification.Yellow, a2: VoteClassification.Red, a3: VoteClassification.Yellow, a4: VoteClassification.Yellow,
      a8: VoteClassification.Red, a7: VoteClassification.Green, a6: VoteClassification.Yellow, a5: VoteClassification.Green,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Yellow, a12: VoteClassification.Green
    },
     {}
);
const t10 = new Participant(
  ParticipantType.Mentee,
     "t10",
     new Date(2019, 3),
     { a1: VoteClassification.Yellow, a2: VoteClassification.Green, a3: VoteClassification.Green, a4: VoteClassification.Yellow,
      a8: VoteClassification.Green, a7: VoteClassification.Green, a6: VoteClassification.Green, a5: VoteClassification.Yellow,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Yellow, a12: VoteClassification.Green
    },
    { }
);
const t11 = new Participant(
  ParticipantType.Mentee,
     "t11",
     new Date(2020, 1),
     { a1: VoteClassification.Green, a2: VoteClassification.Yellow, a3: VoteClassification.Yellow, a4: VoteClassification.Yellow,
      a8: VoteClassification.Green, a7: VoteClassification.Yellow, a6: VoteClassification.Yellow, a5: VoteClassification.Green,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Red, a12: VoteClassification.Green
    },
    { }
);
const t12 = new Participant(
  ParticipantType.Mentee,
     "t12",
     new Date(2020, 1),
     { a1: VoteClassification.Green, a2: VoteClassification.Green, a3: VoteClassification.Yellow, a4: VoteClassification.Green,
      a8: VoteClassification.Yellow, a7: VoteClassification.Red, a6: VoteClassification.Yellow, a5: VoteClassification.Yellow,
      a11: VoteClassification.Yellow, a10: VoteClassification.Yellow, a9: VoteClassification.Yellow, a12: VoteClassification.Green
    },
    { }
);

export const mentees: Participant[] = 
  [ t1, t2, t3, t4, t12, t11, t10, t9, t8, t7, t6, t5 ];
export const mentors: Participant[] = 
  [ a1, a2, a4, a3, a8, a7, a6, a5, a11, a10, a9, a12 ];