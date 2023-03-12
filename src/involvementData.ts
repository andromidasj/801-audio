// import IMG_3281 from "../public/assets/involvement/Lake Mountain Early Morning Jazz Recording/IMG_3281.jpeg";
// import IMG_3282 from "../public/assets/involvement/Lake Mountain Early Morning Jazz Recording/IMG_3282.jpeg";
import { z } from "zod";

const InvolvementDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
});

export type InvolvementData = z.infer<typeof InvolvementDataSchema>;

const INV = "/assets/involvement/";

export const involvementData: InvolvementData[] = [
  {
    title: "Lake Mountain Early Morning Jazz Recording",
    description:
      "Dolor quis reprehenderit cupidatat est consequat. Id aute amet voluptate deserunt. Ad reprehenderit aute excepteur ea qui veniam sit consectetur ut non occaecat. Dolor Lorem nostrud occaecat velit minim do deserunt incididunt Lorem esse nisi est. Minim irure dolor et enim incididunt.",
    images: [
      INV + "Lake Mountain Early Morning Jazz Recording/IMG_3281.jpeg",
      INV + "Lake Mountain Early Morning Jazz Recording/IMG_3282.jpeg",
    ],
  },
  {
    title: "Lake Mountain Middle School Recording Camp",
    description:
      "Dolor quis reprehenderit cupidatat est consequat. Id aute amet voluptate deserunt. Ad reprehenderit aute excepteur ea qui veniam sit consectetur ut non occaecat. Dolor Lorem nostrud occaecat velit minim do deserunt incididunt Lorem esse nisi est. Minim irure dolor et enim incididunt.",
    images: [
      INV + "Lake Mountain Middle School Recording Camp/IMG_3208.jpeg",
      INV + "Lake Mountain Middle School Recording Camp/IMG_3212.jpeg",
      INV + "Lake Mountain Middle School Recording Camp/IMG_3213.jpeg",
      INV + "Lake Mountain Middle School Recording Camp/IMG_3214.jpeg",
    ],
  },
  {
    title: "Les Femmes De Velour",
    description: "asdf",
    images: [
      INV + "Les Femmes De Velour/IMG_3557.jpeg",
      INV + "Les Femmes De Velour/IMG_3559.jpeg",
      INV + "Les Femmes De Velour/IMG_3560.jpeg",
    ],
  },
  {
    title: "Mixtape Live",
    description: "asdf",
    images: [
      INV + "Mixtape Live/IMG_3029.jpeg",
      INV + "Mixtape Live/IMG_3030.jpeg",
      INV + "Mixtape Live/IMG_3031.jpeg",
      INV + "Mixtape Live/IMG_3032.jpeg",
      INV + "Mixtape Live/IMG_3033.PNG",
    ],
  },
  {
    title: "Sundance Film Festival",
    description: "asdf",
    images: [
      INV + "Sundance Film Festival/IMG_3466.jpeg",
      INV + "Sundance Film Festival/IMG_3467.jpeg",
      INV + "Sundance Film Festival/IMG_3468.jpeg",
    ],
  },
  {
    title: "The Boardwalk Robbie and The Bandits",
    description: "asdf",
    images: [
      INV + "The Boardwalk Robbie and The Bandits/IMG_3507.PNG",
      INV + "The Boardwalk Robbie and The Bandits/IMG_3508.jpeg",
      INV + "The Boardwalk Robbie and The Bandits/IMG_3509.jpeg",
    ],
  },
  {
    title: "Velour Anniversary",
    description: "asdf",
    images: [
      INV + "Velour Anniversary/IMG_3338.jpeg",
      INV + "Velour Anniversary/IMG_3339.jpeg",
      INV + "Velour Anniversary/IMG_3340.jpeg",
      INV + "Velour Anniversary/IMG_3341.jpeg",
    ],
  },
  {
    title: "Velour Rally Album Release",
    description: "asdf",
    images: [
      INV + "Velour Rally Album Release/IMG_2104.jpeg",
      INV + "Velour Rally Album Release/IMG_2106.PNG",
      INV + "Velour Rally Album Release/IMG_2109.jpeg",
      INV + "Velour Rally Album Release/IMG_2110.jpeg",
    ],
  },
  {
    title: "Vista Heights Middle Scool Recording Camp",
    description: "asdf",
    images: [
      INV + "Vista Heights Middle Scool Recording Camp/IMG_3185.jpeg",
      INV + "Vista Heights Middle Scool Recording Camp/IMG_3186.jpeg",
      INV + "Vista Heights Middle Scool Recording Camp/IMG_3187.jpeg",
      INV + "Vista Heights Middle Scool Recording Camp/IMG_3191.jpeg",
    ],
  },
  {
    title: "Wasatch Mountain Film Festival 2022",
    description:
      "In April of 2022 I went to the Wasatch Mountain Film Festival and it was a great experience. I watched 7 films, and they all had focus on the mountains in Utah and the greater west coast. Some were about locals in the Wasatch Mountains, while others focused on mountains in Alaska and Washington. I also attended a meet an greet with the producers behind one of the longer films, and it was great to hear what advice they had for aspiring film makers and what they felt would help the most for finding success early in your career.",
    images: [
      INV + "Wasatch Mountain Film Festival 2022/IMG_1678.jpeg",
      INV + "Wasatch Mountain Film Festival 2022/IMG_1679.jpeg",
      INV + "Wasatch Mountain Film Festival 2022/IMG_1680.jpeg",
      INV + "Wasatch Mountain Film Festival 2022/IMG_1682.jpeg",
      INV + "Wasatch Mountain Film Festival 2022/IMG_1683.jpeg",
      INV + "Wasatch Mountain Film Festival 2022/IMG_1685.jpeg",
      INV + "Wasatch Mountain Film Festival 2022/IMG_2107.PNG",
    ],
  },
  {
    title: "Westlake Marching Band Live Sound",
    description: "asdf",
    images: [
      INV + "Westlake Marching Band Live Sound/IMG_2167.JPG",
      INV + "Westlake Marching Band Live Sound/IMG_3023.jpeg",
      INV + "Westlake Marching Band Live Sound/IMG_3024.jpeg",
    ],
  },
];
