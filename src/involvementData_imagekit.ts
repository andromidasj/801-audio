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
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Lake_Mountain_Early_Morning_Jazz_Recording_1_Q22-A1JQ0.jpeg",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Lake_Mountain_Early_Morning_Jazz_Recording_2_EUHSpvMjF.jpeg",
    ],
  },
  {
    title: "Lake Mountain Middle School Recording Camp",
    description:
      "Here I recorded the Lake Mountain Middle School bands to submit for state band qualifications. I was in charge of mic set up and placement, using the mixer, and running the Pro Tools session.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Lake_Mountain_Middle_School_Recording_Camp_1_9nuwd-UYk.jpeg?updatedAt=1678722383590",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Lake_Mountain_Middle_School_Recording_Camp_2_d2sanp3rO.jpeg?updatedAt=1678722382718",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Lake_Mountain_Middle_School_Recording_Camp_3_vi5dwyy5T.jpeg?updatedAt=1678722382669",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Lake_Mountain_Middle_School_Recording_Camp_4_uhe3PZ6lV.jpeg?updatedAt=1678722382468",
    ],
  },
  {
    title: "Les Femmes De Velour",
    description:
      "On February 28, 2023 I went to The Velour to watch the final night of Les Femmes De Velour. There were four artists performing that night, and they all sounded great. My favorite of the night was Faith, who was the closer. She sounded incredible and had a great mix from her backing tracks and live drums.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Les_Femmes_De_Velour_1_V42Oy7fdi.jpeg?updatedAt=1678722382517",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Les_Femmes_De_Velour_2_YX04WguYZ.jpeg?updatedAt=1678722382475",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Les_Femmes_De_Velour_3_OitSl2vgY.jpeg?updatedAt=1678722382801",
    ],
  },
  {
    title: "Mixtape Live",
    description:
      "On October 28, 2022 I went to UVU's Mixtape Live which was a showcase of the commercial music groups. It was a fun night and the performances from the groups were great! The mix in the last group I listened to was very vocal heavy, and it was distracting throughout each of their songs. Other than that, I really enjoyed all of the performances.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Mixtape_Live_1_qhq69dIkH_.jpeg?updatedAt=1678722383131",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Mixtape_Live_2_Syozd5XExe.jpeg?updatedAt=1678722383747",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Mixtape_Live_3_OBehGyeRb.jpeg?updatedAt=1678722383816",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Mixtape_Live_4_ui-xHrFTs.jpeg?updatedAt=1678722383839",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Mixtape_Live_5_3efeVlI6l.PNG?updatedAt=1678722385978",
    ],
  },
  {
    title: "Nashville bar concerts",
    description:
      "On March 7th, 2023 I visited Nashville and had the opportunity to see two bands perform in two bars in Downtown Nashville. When listening to the first artist, one thing I noticed right away was how incredible the mix sounded even though it was a small space. The vocals were clear and crisp and you heard exactly what you needed to. This artist did a lot of country covers and it sounded great. The second group I listened to had the vocals buried in the mix a a bit, but everything still sounded great. They played lots of Eric Church and did a fantastic job. ",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Nashville_bar_concerts_1_xvOK5kwR0s.jpeg?updatedAt=1678722384139",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Nashville_bar_concerts_2_HS-e0anS6s.jpeg?updatedAt=1678722384133",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Nashville_bar_concerts_3_RnyKNRW5ne.jpeg?updatedAt=1678722384988",
    ],
  },
  {
    title: "Sundance Film Festival",
    description:
      "On January 26th, 2023 I watched a screening of The Tuba Thieves which was part of The Sundance Film Festival. This film was extremely abstract and experimental with no real premise or story being told. It had a strong emphasis on the sounds all around you in all environments, which was very cool for about the first ten minutes, but it had nothing else interesting about it. The lack of a story or anything to move it forward made it extremely hard to watch.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Sundance_Film_Festival_1_AVegsKDVzx.jpeg?updatedAt=1678722385699",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Sundance_Film_Festival_2_vwGDW2iFA2.jpeg?updatedAt=1678722385633",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Sundance_Film_Festival_3_xn8cAkqpc.jpeg?updatedAt=1678722385158",
    ],
  },
  {
    title: "The Boardwalk Robbie and The Bandits",
    description:
      "On February 10th, 2023 I saw Robbie Law and The Bandits at The Boardwalk. This was a great sounding group that played a lot of classic rock and country. The mix of the band wasn't great early on, but after about three songs it was much better for the rest of the night. They had a fantastic guitar player and a keytar player which was really fun.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/The_Boardwalk_Robbie_and_The_Bandits_1_y-Q-_tqTFe.jpeg?updatedAt=1678722385917",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/The_Boardwalk_Robbie_and_The_Bandits_2_eZBIISOlJG.jpeg?updatedAt=1678722385368",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/The_Boardwalk_Robbie_and_The_Bandits_3_DgPUkIdU4G.PNG?updatedAt=1678722387918",
    ],
  },
  {
    title: "Velour Anniversary",
    description:
      "I went to the Velour on January 13th, 2023 and saw Paige Fish perform that night. She sounded really good, and even though it was just her and acoustic guitar, the balance was perfect. She had a great voice and had a lot of emotion behind her lyrics and performance.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Anniversary_1_CD2sCuakTS.jpeg?updatedAt=1678722386314",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Anniversary_2_4FwrAI5jG.jpeg?updatedAt=1678722386397",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Anniversary_3_NAJnIVOkTa.jpeg?updatedAt=1678722387020",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Anniversary_4_b2BmF-a9nJ.PNG?updatedAt=1678722387007",
    ],
  },
  {
    title: "Velour Rally Album Release",
    description:
      "I went to the Velour on August 27, 2022 and listened to two bands. The first group, Botanical Animal, sounded great! I loved the reverb on the lead vocals and they had a really full sound. The second group, Basement Waves, had great energy but the mix wasn't nearly as good as the first group. I couldn't hear the vocals nearly as well and there wasn't much low end to support the mix.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Rally_Album_Release_1_9JULz39bi0.jpeg?updatedAt=1678722387401",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Rally_Album_Release_2_UhRqNJJ4_p.jpeg?updatedAt=1678722386989",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Rally_Album_Release_3_H9Ik81Jpt.jpeg?updatedAt=1678722389591",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Velour_Rally_Album_Release_4_ia8CAr4Zn.PNG?updatedAt=1678722388668",
    ],
  },
  {
    title: "Vista Heights Middle School Recording Camp",
    description:
      "Here I helped the Vista Heights Middle School bands record themselves for qualification for the state band festival. I helped set up the mics, ran them through a mixer, and then ran the recording session. This was a good experience with recording large ensembles in a very large space.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Vista_Heights_Middle_School_Recording_Camp_1_CwW2NViapD.jpeg?updatedAt=1678722389981",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Vista_Heights_Middle_School_Recording_Camp_2_4ykcOHzIPs.jpeg?updatedAt=1678722387966",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Vista_Heights_Middle_School_Recording_Camp_3_A9USeEhsES.jpeg?updatedAt=1678722391451",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Vista_Heights_Middle_School_Recording_Camp_4_ZnW36g-K1.jpeg?updatedAt=1678722390175",
    ],
  },
  {
    title: "Wasatch Mountain Film Festival 2022",
    description:
      "In April of 2022 I went to the Wasatch Mountain Film Festival and it was a great experience. I watched 7 films, and they all had focus on the mountains in Utah and the greater west coast. Some were about locals in the Wasatch Mountains, while others focused on mountains in Alaska and Washington. I also attended a meet an greet with the producers behind one of the longer films, and it was great to hear what advice they had for aspiring film makers and what they felt would help the most for finding success early in your career.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Wasatch_Mountain_Film_Festival_2022_1_uwiE6YqU4.jpeg?updatedAt=1678722388330",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Wasatch_Mountain_Film_Festival_2022_2_27XI8--a5D.jpeg?updatedAt=1678722389262",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Wasatch_Mountain_Film_Festival_2022_3_zEDe6Q-8s.jpeg?updatedAt=1678722389642",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Wasatch_Mountain_Film_Festival_2022_4_eU313Nd25.jpeg?updatedAt=1678722390086",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Wasatch_Mountain_Film_Festival_2022_5_b9_kRkKpmX.jpeg?updatedAt=1678722389286",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Wasatch_Mountain_Film_Festival_2022_6_W4LWUSsl06.PNG?updatedAt=1678722392037",
    ],
  },
  {
    title: "Westlake Marching Band Live Sound",
    description:
      "I worked with Westlake High School's Marching Band during the fall of 2022 and learned how to operate all of their live sound equipment. They used a Presonus studio live series 3 32 channel board, and I learned how to set automated scenes, integrating patches from external software, and how to mic a marching band to sound the best they can in many different environments.",
    images: [
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Westlake_Marching_Band_Live_Sound_1_1O29MPmmjP.jpeg?updatedAt=1678722391567",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Westlake_Marching_Band_Live_Sound_2_reLXaqoTdo.JPG?updatedAt=1678722390023",
      "https://ik.imagekit.io/joshandromidas/parker-portfolio/Westlake_Marching_Band_Live_Sound_3__Cnrk8EKkd.jpeg?updatedAt=1678722391770",
    ],
  },
];
