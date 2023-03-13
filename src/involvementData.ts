import { z } from "zod";

const InvolvementDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
});

export type InvolvementData = z.infer<typeof InvolvementDataSchema>;

export const involvementData: InvolvementData[] = [
  {
    title: "Lake Mountain Early Morning Jazz Recording",
    description:
      "Here I helped record Lake Mountain Middle School's advanced jazz band to submit for state qualifications. I set up the mics and ran the session, as well as did light mixing afterwards.",
    images: ["1.jpeg", "2.jpeg"],
  },
  {
    title: "Lake Mountain Middle School Recording Camp",
    description:
      "Here I recorded the Lake Mountain Middle School bands to submit for state band qualifications. I was in charge of mic set up and placement, using the mixer, and running the Pro Tools session.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
  },
  {
    title: "Les Femmes De Velour",
    description:
      "On February 28, 2023 I went to The Velour to watch the final night of Les Femmes De Velour. There were four artists performing that night, and they all sounded great. My favorite of the night was Faith, who was the closer. She sounded incredible and had a great mix from her backing tracks and live drums.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg"],
  },
  {
    title: "Mixtape Live",
    description:
      "On October 28, 2022 I went to UVU's Mixtape Live which was a showcase of the commercial music groups. It was a fun night and the performances from the groups were great! The mix in the last group I listened to was very vocal heavy, and it was distracting throughout each of their songs. Other than that, I really enjoyed all of the performances.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.PNG"],
  },
  {
    title: "Nashville bar concerts",
    description:
      "On March 7th, 2023 I visited Nashville and had the opportunity to see two bands perform in two bars in Downtown Nashville. When listening to the first artist, one thing I noticed right away was how incredible the mix sounded even though it was a small space. The vocals were clear and crisp and you heard exactly what you needed to. This artist did a lot of country covers and it sounded great. The second group I listened to had the vocals buried in the mix a a bit, but everything still sounded great. They played lots of Eric Church and did a fantastic job. ",
    images: ["1.jpeg", "2.jpeg", "3.jpeg"],
  },
  {
    title: "Sundance Film Festival",
    description:
      "On January 26th, 2023 I watched a screening of The Tuba Thieves which was part of The Sundance Film Festival. This film was extremely abstract and experimental with no real premise or story being told. It had a strong emphasis on the sounds all around you in all environments, which was very cool for about the first ten minutes, but it had nothing else interesting about it. The lack of a story or anything to move it forward made it extremely hard to watch.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg"],
  },
  {
    title: "The Boardwalk Robbie and The Bandits",
    description:
      "On February 10th, 2023 I saw Robbie Law and The Bandits at The Boardwalk. This was a great sounding group that played a lot of classic rock and country. The mix of the band wasn't great early on, but after about three songs it was much better for the rest of the night. They had a fantastic guitar player and a keytar player which was really fun.",
    images: ["1.jpeg", "2.jpeg", "3.PNG"],
  },
  {
    title: "Velour Anniversary",
    description:
      "I went to the Velour on January 13th, 2023 and saw Paige Fish perform that night. She sounded really good, and even though it was just her and acoustic guitar, the balance was perfect. She had a great voice and had a lot of emotion behind her lyrics and performance.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.PNG"],
  },
  {
    title: "Velour Rally Album Release",
    description:
      "I went to the Velour on August 27, 2022 and listened to two bands. The first group, Botanical Animal, sounded great! I loved the reverb on the lead vocals and they had a really full sound. The second group, Basement Waves, had great energy but the mix wasn't nearly as good as the first group. I couldn't hear the vocals nearly as well and there wasn't much low end to support the mix.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.PNG"],
  },
  {
    title: "Vista Heights Middle School Recording Camp",
    description:
      "Here I helped the Vista Heights Middle School bands record themselves for qualification for the state band festival. I helped set up the mics, ran them through a mixer, and then ran the recording session. This was a good experience with recording large ensembles in a very large space.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
  },
  {
    title: "Wasatch Mountain Film Festival 2022",
    description:
      "In April of 2022 I went to the Wasatch Mountain Film Festival and it was a great experience. I watched 7 films, and they all had focus on the mountains in Utah and the greater west coast. Some were about locals in the Wasatch Mountains, while others focused on mountains in Alaska and Washington. I also attended a meet an greet with the producers behind one of the longer films, and it was great to hear what advice they had for aspiring film makers and what they felt would help the most for finding success early in your career.",
    images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.PNG"],
  },
  {
    title: "Westlake Marching Band Live Sound",
    description:
      "I worked with Westlake High School's Marching Band during the fall of 2022 and learned how to operate all of their live sound equipment. They used a Presonus studio live series 3 32 channel board, and I learned how to set automated scenes, integrating patches from external software, and how to mic a marching band to sound the best they can in many different environments.",
    images: ["1.jpeg", "2.JPG", "3.jpeg"],
  },
];