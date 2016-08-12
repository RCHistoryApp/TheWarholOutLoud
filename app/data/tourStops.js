
/* eslint-disable max-len */

import uuid from 'uuid';

export const tourStops = [
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 0,
    shortTitle: 'Overview',
    longTitle: 'Overview: The early years',
    shortCredit: '7th floor time line, The Andy Warhol Museum, Pittsburgh',
    longCredit: '7th floor time line, The Andy Warhol Museum, Pittsburgh',
    regions: ['gray'],
    imageURL: 'earlyYears.png',
    imageWidth: 475,
    imageHeight: 329,
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'The Early Years',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_7th-Floor-Overview',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 1,
    shortTitle: 'Childhood',
    longTitle: 'Childhood',
    regions: ['blue'],
    imageURL: 'childhood.png',
    imageWidth: 337,
    imageHeight: 475,
    imageAccessibilityLabel: '',
    shortCredit: 'Andy Warhol at about the age of 3, with his mother Julia and brother John, 1932',
    longCredit: 'Unknown Photographer \nAndy Warhol at about the age of 3, with his mother Julia and brother John, 1932 \nsepia print \n2 1/4 x 1 5/8 in. (5.7 x 4.1 cm.) \nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc. \n1998.3.5247',
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald-Childhood_Introduction',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'Childhood_Visual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'HISTORICAL_CONTEXT',
        depth: 0,
        title: 'The Warholas',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Childhood_Warhola_Family',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'HISTORICAL_CONTEXT',
        depth: 1,
        title: 'Family Portrait',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Childhood_Family_portrait',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: 'Carpatho-Rusyn heritage',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Childhood_Carpatho-Rusyn',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'HISTORICAL_CONTEXT',
        depth: 0,
        title: 'Growing up during the Depression',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Childhood_Growing_Up_in_the_Depression',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ARCHIVAL_MATERIAL',
        depth: 0,
        title: '“All I Want for Christmas”',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_John_Movie_Projector-v2',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 2,
    shortTitle: 'College years',
    longTitle: 'College years',
    regions: ['blue'],
    imageURL: 'collegeYears.png',
    imageWidth: 394,
    imageHeight: 475,
    imageAccessibilityLabel: '',
    shortCredit: 'Andy Warhol, Nosepicker I: Why Pick on Me, 1948 © AWF',
    shortCreditAccessibilityLabel: 'Andy Warhol, Nose picker 1: Why Pick on Me, 1948 © AWF',
    longCredit: 'Andy Warhol (American, 1928-1987) \nNosepicker I: Why Pick on Me (originally titled The Lord Gave Me My Face but I Can Pick My Own Nose), 1948 \ntempera and ink on masonite \nPaul Warhola Family Collection \n© The Andy Warhol Foundation for the Visual Arts, Inc.',
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Beck_Jessica_College-Years_Introduction',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'CollegeYears_Visual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'Nosepicker I: Why Pick on Me',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Beck_Jessica_College-Years_Nosepicker-v2',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: 'Associated Artists of Pittsburgh',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Beck_Jessica_College-Years_AAP',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: 'Uncle Andy\'s sense of humor',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_College-Years_Sense-of-Humor',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ARCHIVAL_MATERIAL',
        depth: 0,
        title: '"How does it feel to be famous?"',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Pearlstein_Meeting_Andy',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 3,
    shortTitle: 'New York',
    longTitle: 'From Pittsburgh to New York',
    regions: ['orange'],
    imageURL: 'newYork.png',
    imageWidth: 475,
    imageHeight: 469,
    imageAccessibilityLabel: '',
    shortCredit: 'Leila Davies Singelis, Making the Rounds, 1950 © Estate of Leila Davies Singelis',
    longCredit: 'Leila Davies Singelis \nMaking the Rounds, 1950 \ngelatin silver print \n8 3/16 x 8 in. (20.8 x 20.3 cm.) \nThe Andy Warhol Museum, Pittsburgh; Gift of Leila Davies Singelis \n© Estate of Leila Davies Singelis \n1994.22.9.1',
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Beck_Jessica_New-York_Introduction',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'PittsburghNewYork_VIsual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: 'Pounding the pavement',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Beck_Jessica_New-York_Persona',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'Success is a job in New York',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Beck_Jessica_New-York_Success',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 1,
        title: 'Dedicated and driven',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Beck_Jessica_New-York_Commercial-Fine-Art',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ARCHIVAL_MATERIAL',
        depth: 0,
        title: 'Long walks in the city',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Singelis_Walks_in_NewYork',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ARCHIVAL_MATERIAL',
        depth: 0,
        title: '"Older and wiser"',
        duration: 3,
        speaker: 'Jessica Beck',
        audioURL: 'Pearlstein_Moving_to_NYC',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 4,
    shortTitle: 'Blotted line',
    longTitle: 'Blotted line',
    shortCredit: 'Still from "Blotted Line Video," The Andy Warhol Museum',
    longCredit: 'Still from "Blotted Line Video," The Andy Warhol Museum',
    regions: ['yellow'],
    imageURL: 'blottedLineStill.png',
    imageWidth: 475,
    imageHeight: 267,
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Abby Franzen-Sheehan',
        audioURL: 'Blotted-Line_Introduction_v2',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'Process and product',
        duration: 3,
        speaker: 'Abby Franzen-Sheehan',
        audioURL: 'Blotted-Line_Process_v2',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 1,
        title: 'From commercial to fine art',
        duration: 3,
        speaker: 'Abby Franzen-Sheehan',
        audioURL: 'Blotted-Line_Commercial_to_fine',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: 'Creativity and collaboration',
        duration: 3,
        speaker: 'Abby Franzen-Sheehan',
        audioURL: 'Blotted-Line_Collaboration_v2',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 5,
    shortTitle: 'Andy and Julia',
    longTitle: 'Andy and Julia',
    regions: ['red', 'yellow'],
    imageURL: 'andyAndJulia.png',
    imageWidth: 475,
    imageHeight: 301,
    imageAccessibilityLabel: '',
    shortCredit: 'Julia Warhola, Two Angels Praying, ca. 1953',
    longCredit: 'Julia Warhola (American, 1892-1972) \n\nTwo Angels Praying, ca. 1953 \n\nink on Strathmore Seconds paper \n\n15 1/8 x 22 5/8 in. (38.4 x 57.5 cm.) \n\nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc. \n\n1998.3.1775',
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald-Julia_Introduction',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'AndyAndJulia_visual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'Signature Style',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Julia_Signature_style',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 1,
        title: 'A mother\'s influence',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Julia_Mothers_Influence',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: 'Living on a prayer',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Julia_Prayer',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: '"The Boss is going to fire me"',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Donald_Julia_The_Boss_Is_Going',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ARCHIVAL_MATERIAL',
        depth: 0,
        title: 'Julia sings a Carpatho-Rusyn folk song',
        duration: 3,
        speaker: 'Donald Warhola',
        audioURL: 'Warhola_Julia_Folksong',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 6,
    shortTitle: 'World travels',
    longTitle: 'World travels',
    regions: ['red'],
    imageURL: 'asia.png',
    imageWidth: 374,
    imageHeight: 475,
    imageAccessibilityLabel: '',
    shortCredit: 'Andy Warhol, Asian Male Portrait, 1956 © AWF',
    longCredit: 'Andy Warhol (American, 1928-1987) \nAsian Male Portrait, 1956 \nballpoint pen on Mead bond paper \n13 5/8 x 10 7/8 in. (34.6 x 27.6 cm.) \nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc. \n© The Andy Warhol Foundation for the Visual Arts, Inc. \n1998.1.1764',
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Jose Diaz',
        audioURL: 'Diaz_Jose-World_Travels-Intro',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'WorldTravels_Visual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'Collecting and sketching',
        duration: 3,
        speaker: 'Jose Diaz',
        audioURL: 'Diaz_Jose-World_Travels-Sketching',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: '<i>Boy Book</i>',
        duration: 3,
        speaker: 'Jose Diaz',
        audioURL: 'Diaz_Jose-World_Travels-Boy_Book',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 7,
    shortTitle: 'Commercial work',
    longTitle: 'Commercial work',
    shortCredit: 'Andy Warhol, Snake Awning, for Fleming-Joffe, Ltd., 1960 © AWM',
    longCredit: 'Andy Warhol (American, 1928-1987) \nSnake Awning, for Fleming-Joffe, Ltd., 1960 \noil on canvas \n96 x 161 1/2 in. (243.8 x 410.2 cm.) \nThe Andy Warhol Museum, Pittsburgh; Gift of Teddy and Arthur Edelman \n©The Andy Warhol Museum, Pittsburgh, PA, a museum of Carnegie Institute. \n1994.2.1',
    regions: ['pink'],
    imageURL: 'commercialWork.png',
    imageWidth: 475,
    imageHeight: 292,
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Jose Diaz',
        audioURL: 'Diaz_Jose-Commercial_Art-Intro',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'CommercialWork_Visual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'COMMENTARY_ANECDOTE',
        depth: 0,
        title: 'Noah the Boa',
        duration: 3,
        speaker: 'Jose Diaz',
        audioURL: 'Diaz_Jose-Commercial_Art-Noah_the_Boa',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'I. Miller Shoes',
        duration: 3,
        speaker: 'Jose Diaz',
        audioURL: 'Diaz_Jose-Commercial_Art-I_Miller',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 8,
    shortTitle: 'Female Fashion Figure',
    longTitle: 'Tactile reproduction: Female Fashion Figure',
    shortCredit: 'Tactile reproduction: Female Fashion Figure',
    longCredit: 'Tactile reproduction: Female Fashion Figure',
    regions: ['gray'],
    imageURL: 'tactile.png',
    imageWidth: 475,
    imageHeight: 356,
    tags: [],
    initialAudio: 'TACTILE_EXPERIENCE',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'TACTILE_EXPERIENCE',
        depth: 0,
        title: 'Guided Tactile Experience',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'TactileFemaleFashionFigure_Tactile',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'TactileFemaleFashionFigure_Visual',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 9,
    shortTitle: 'Reclining Male Torso',
    longTitle: 'Tactile reproduction: Reclining Male Torso',
    shortCredit: 'Tactile reproduction: Reclining Male Torso',
    longCredit: 'Tactile reproduction: Reclining Male Torso',
    imageURL: 'tactile.png',
    imageWidth: 475,
    imageHeight: 356,
    regions: ['gray'],
    tags: [],
    initialAudio: 'TACTILE_EXPERIENCE',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'TACTILE_EXPERIENCE',
        depth: 0,
        title: 'Guided Tactile Experience',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'TactileRecliningMaleTorso_Tactile',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'TactileRecliningMaleTorso_Visual',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 10,
    shortTitle: 'Coca-Cola [2]',
    longTitle: 'Tactile reproduction: Coca-Cola [2]',
    shortCredit: 'Tactile reproduction: Coca-Cola [2]',
    longCredit: 'Tactile reproduction: Coca-Cola [2]',
    regions: ['gray'],
    imageURL: 'tactile.png',
    imageWidth: 475,
    imageHeight: 356,
    tags: [],
    initialAudio: 'TACTILE_EXPERIENCE',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'TACTILE_EXPERIENCE',
        depth: 0,
        title: 'Guided Tactile Experience',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'TactileCocaCola_Tactile',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'CocaCola_Tactile_Visual',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 11,
    shortTitle: 'Hand-painted pop',
    longTitle: 'Hand-painted pop: Coca-Cola',
    shortCredit: 'Andy Warhol, Coca-Cola [2], 1961 © AWF',
    longCredit: 'Andy Warhol (American, 1928-1987) \nCoca-Cola [2], 1961 \ncasein and crayon on linen \n69 1/2 x 52 1/4 in. (176.5 x 132.7 cm.) \nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution Dia Center for the Arts \n© The Andy Warhol Foundation for the Visual Arts, Inc. \n1997.1.20',
    imageURL: 'cocaCola.png',
    imageWidth: 352,
    imageHeight: 475,
    regions: ['green'],
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'Marsden_Grace_Coca-Cola_Introduction',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'CocaCola_Visual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'HISTORICAL_CONTEXT',
        depth: 0,
        title: 'Mass appeal',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'Marsden_Grace_Coca-Cola_Mass-Appeal',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'Expressionist elements',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'Marsden_Grace_Coca-Cola_Expressionist_elements',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: '"This is hand-painted pop"',
        duration: 3,
        speaker: 'Jose Diaz',
        audioURL: 'Diaz_Jose-Coke-Hand_Painted_Pop',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ARCHIVAL_MATERIAL',
        depth: 0,
        title: 'Andy Warhol/Ai Weiwei: Capitalism and Communism',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'JBeck_AndyWarholAiWeiwei',
        transcript: 'This is a placeholder.',
      },
    ],
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 12,
    shortTitle: 'Pop products',
    longTitle: 'Pop products: Campbell\'s Soup',
    shortCredit: 'Andy Warhol (American, 1928-1987), Big Torn Campbell\'s Soup Can (Pepper Pot), 1962 © AWF',
    longCredit: 'Andy Warhol (American, 1928-1987) \nBig Torn Campbell\'s Soup Can (Pepper Pot), 1962 \ncasein and graphite on canvas \n71 5/8 x 52 in. (181.9 x 132.1 cm.) \nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc. \n© The Andy Warhol Foundation for the Visual Arts, Inc. \n1998.1.31',
    regions: ['green'],
    imageURL: 'campbells.png',
    imageWidth: 340,
    imageHeight: 475,
    tags: [],
    initialAudio: 'INTRODUCTION',
    audioContent: [
      {
        uuid: uuid.v4(),
        category: 'INTRODUCTION',
        depth: 0,
        title: 'Introduction',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'Marsden_Grace_Campbells_Introduction',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'VISUAL_DESCRIPTION',
        depth: 0,
        title: 'Visual Description',
        duration: 3,
        speaker: 'Narrator',
        audioURL: 'Campbells_Visual',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ART_PROCESS',
        depth: 0,
        title: 'Torn, crumpled, crushed',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'Marsden_Grace_Campbells_Torn',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'HISTORICAL_CONTEXT',
        depth: 0,
        title: 'Pop vs. abstract expressionism',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'Marsden_Grace_Campbells_AbEx-to-Pop',
        transcript: 'This is a placeholder.',
      },
      {
        uuid: uuid.v4(),
        category: 'ARCHIVAL_MATERIAL',
        depth: 0,
        title: '"It\'s the latest thing"',
        duration: 3,
        speaker: 'Grace Marston',
        audioURL: 'Singelis_Campbells',
        transcript: 'This is a placeholder.',
      },
    ],
  },
];