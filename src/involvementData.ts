import { z } from "zod";

const InvolvementDataSchema = z.object({
  title: z.string(),
  date: z.date().optional(),
  description: z.string(),
  images: z.array(z.string()),
});

export type InvolvementData = z.infer<typeof InvolvementDataSchema>;

const generateImageNames = (n: number) =>
  Array.from({ length: n }, (_, i) => `${i + 1}.jpeg`);

export const involvementData: InvolvementData[] = [
  {
    title: "Vista Heights Middle School Recording Camp",
    date: new Date("11-12-2022"),
    description:
      "Here I helped record the Vista Heights Middle School concert band and symphonic band to submit recordings for the state band festival. I helped set up the mics, ran them through a mixer, and then ran the recording session. This was a good experience with recording large ensembles in a very large space.",
    images: generateImageNames(4),
  },
  {
    title: "Les Femmes De Velour",
    date: new Date("02-28-2023"),
    description:
      "I went to The Velour to watch the final night of Les Femmes De Velour. There were four artists performing that night, and they all sounded great. My favorite of the night was Faith, who was the closer. She sounded incredible and had a great mix from her backing tracks and live drums.",
    images: generateImageNames(3),
  },
  {
    title: "Mixtape Live",
    date: new Date("10-28-2022"),
    description:
      "I went to UVU's Mixtape Live which was a showcase of the commercial music groups. It was a fun night and the performances from the groups were great! The mix in the last group I listened to was very vocal heavy, and it was distracting throughout each of their songs. Other than that, I really enjoyed all of the performances.",
    images: generateImageNames(5),
  },
  {
    title: "Lake Mountain Early Morning Jazz Recording",
    date: new Date("12-13-2022"),
    description:
      "Here I helped record Lake Mountain Middle School's advanced jazz band to submit for state qualifications. I set up the mics and ran the session, as well as did light mixing afterwards.",
    images: generateImageNames(2),
  },
  {
    title: "Nashville bar concerts",
    date: new Date("03-07-2023"),
    description:
      "I visited Nashville and had the opportunity to see two bands perform in two bars in Downtown Nashville. When listening to the first artist, one thing I noticed right away was how incredible the mix sounded even though it was a small space. The vocals were clear and crisp and you heard exactly what you needed to. This artist did a lot of country covers and it sounded great. The second group I listened to had the vocals buried in the mix a a bit, but everything still sounded great. They played lots of Eric Church and did a fantastic job. ",
    images: generateImageNames(3),
  },
  {
    title: "Sundance Film Festival",
    date: new Date("01-26-2023"),
    description:
      "I watched a screening of The Tuba Thieves which was part of The Sundance Film Festival. This film was extremely abstract and experimental with no real premise or story being told. It had a strong emphasis on the sounds all around you in all environments, which was very cool for about the first ten minutes, but it had nothing else interesting about it. The lack of a story or anything to move it forward made it extremely hard to watch.",
    images: generateImageNames(3),
  },
  {
    title: "The Boardwalk Robbie and The Bandits",
    date: new Date("02-10-2023"),
    description:
      "I saw Robbie Law and The Bandits at The Boardwalk. This was a great sounding group that played a lot of classic rock and country. The mix of the band wasn't great early on, but after about three songs it was much better for the rest of the night. They had a fantastic guitar player and a keytar player which was really fun.",
    images: generateImageNames(3),
  },
  {
    title: "Velour Anniversary",
    date: new Date("01-13-2023"),
    description:
      "I went to the Velour and saw Paige Fish perform that night. She sounded really good, and even though it was just her and acoustic guitar, the balance was perfect. She had a great voice and had a lot of emotion behind her lyrics and performance.",
    images: generateImageNames(4),
  },
  {
    title: "Velour Rally Album Release",
    date: new Date("08-27-2022"),
    description:
      "I went to the Velour and listened to two bands. The first group, Botanical Animal, sounded great! I loved the reverb on the lead vocals and they had a really full sound. The second group, Basement Waves, had great energy but the mix wasn't nearly as good as the first group. I couldn't hear the vocals nearly as well and there wasn't much low end to support the mix.",
    images: generateImageNames(4),
  },
  {
    title: "Wasatch Mountain Film Festival 2022",
    description:
      "In April of 2022 I went to the Wasatch Mountain Film Festival and it was a great experience. I watched 7 films, and they all had focus on the mountains in Utah and the greater west coast. Some were about locals in the Wasatch Mountains, while others focused on mountains in Alaska and Washington. I also attended a meet an greet with the producers behind one of the longer films, and it was great to hear what advice they had for aspiring film makers and what they felt would help the most for finding success early in your career.",
    images: generateImageNames(6),
  },
  {
    title: "Lake Mountain Middle School Recording Camp",
    date: new Date("11-19-2022"),
    description:
      "Here I helped record Lake Mountain Middle School's concert band and symphonic band to submit recordings to qualify for the state band festival. I was in charge of the mic set up and placement, using the mixer and running the Pro Tools session.",
    images: generateImageNames(4),
  },
  {
    title: "Westlake Marching Band Live Sound",
    description:
      "I worked with Westlake High School's Marching Band during the fall of 2022 and learned how to operate all of their live sound equipment. They used a Presonus studio live series 3 32 channel board, and I learned how to set automated scenes, integrating patches from external software, and how to mic a marching band to sound the best they can in many different environments.",
    images: generateImageNames(3),
  },
  {
    title: "Commercial Music Showcase",
    date: new Date("03-23-2023"),
    description:
      "I went to the Commercial Music Showcase here at UVU. I listened to 14 original songs performed by commercial music students which covered all genres and types of music. They all did a great job and the balance and mix was really consistent between all of the groups. You could tell a lot of work was put in before hand to make sure they sounded right and everything was going to run smoothly.",
    images: generateImageNames(4),
  },
];
