// import IMG_3281 from "../public/assets/involvement/Lake Mountain Early Morning Jazz Recording/IMG_3281.jpeg";
// import IMG_3282 from "../public/assets/involvement/Lake Mountain Early Morning Jazz Recording/IMG_3282.jpeg";
import { z } from "zod";

const InvolvementDataSchema = z.object({
  title: z.string(),
  items: z.array(
    z.object({
      img: z.string(),
      description: z.string(),
    })
  ),
});

export type InvolvementData = z.infer<typeof InvolvementDataSchema>;

const INV = "/assets/involvement/";

export const involvementData: InvolvementData[] = [
  {
    title: "Lake Mountain Early Morning Jazz Recording",
    items: [
      {
        img: INV + "Lake Mountain Early Morning Jazz Recording/IMG_3281.jpeg",
        description:
          "Dolor quis reprehenderit cupidatat est consequat. Id aute amet voluptate deserunt. Ad reprehenderit aute excepteur ea qui veniam sit consectetur ut non occaecat. Dolor Lorem nostrud occaecat velit minim do deserunt incididunt Lorem esse nisi est. Minim irure dolor et enim incididunt.",
      },
      {
        img: INV + "Lake Mountain Early Morning Jazz Recording/IMG_3282.jpeg",
        description:
          "Non dolor nulla Lorem laborum et sint velit consequat anim cillum excepteur officia eiusmod aliqua. Officia ea sint do nostrud eu minim proident tempor. Officia voluptate do velit consequat occaecat occaecat. Officia anim aliquip cillum quis veniam amet adipisicing non irure tempor occaecat occaecat incididunt commodo.",
      },
    ],
  },
  {
    title: "Lake Mountain Middle School Recording Camp",
    items: [
      {
        img: INV + "Lake Mountain Middle School Recording Camp/IMG_3208.jpeg",
        description:
          "Dolor quis reprehenderit cupidatat est consequat. Id aute amet voluptate deserunt. Ad reprehenderit aute excepteur ea qui veniam sit consectetur ut non occaecat. Dolor Lorem nostrud occaecat velit minim do deserunt incididunt Lorem esse nisi est. Minim irure dolor et enim incididunt.",
      },
      {
        img: INV + "Lake Mountain Middle School Recording Camp/IMG_3212.jpeg",
        description:
          "Non dolor nulla Lorem laborum et sint velit consequat anim cillum excepteur officia eiusmod aliqua. Officia ea sint do nostrud eu minim proident tempor. Officia voluptate do velit consequat occaecat occaecat. Officia anim aliquip cillum quis veniam amet adipisicing non irure tempor occaecat occaecat incididunt commodo.",
      },
      {
        img: INV + "Lake Mountain Middle School Recording Camp/IMG_3213.jpeg",
        description:
          "Non dolor nulla Lorem laborum et sint velit consequat anim cillum excepteur officia eiusmod aliqua. Officia ea sint do nostrud eu minim proident tempor. Officia voluptate do velit consequat occaecat occaecat. Officia anim aliquip cillum quis veniam amet adipisicing non irure tempor occaecat occaecat incididunt commodo.",
      },
      {
        img: INV + "Lake Mountain Middle School Recording Camp/IMG_3214.jpeg",
        description:
          "Non dolor nulla Lorem laborum et sint velit consequat anim cillum excepteur officia eiusmod aliqua. Officia ea sint do nostrud eu minim proident tempor. Officia voluptate do velit consequat occaecat occaecat. Officia anim aliquip cillum quis veniam amet adipisicing non irure tempor occaecat occaecat incididunt commodo.",
      },
    ],
  },
  {
    title: "Les Femmes De Velour",
    items: [
      {
        img: INV + "Les Femmes De Velour/IMG_3557.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Les Femmes De Velour/IMG_3559.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Les Femmes De Velour/IMG_3560.jpeg",
        description: "asdf",
      },
    ],
  },
  {
    title: "Mixtape Live",
    items: [
      {
        img: INV + "Mixtape Live/IMG_3029.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Mixtape Live/IMG_3030.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Mixtape Live/IMG_3031.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Mixtape Live/IMG_3032.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Mixtape Live/IMG_3033.PNG",
        description: "asdf",
      },
    ],
  },
  {
    title: "Sundance Film Festival",
    items: [
      {
        img: INV + "Sundance Film Festival/IMG_3466.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Sundance Film Festival/IMG_3467.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Sundance Film Festival/IMG_3468.jpeg",
        description: "asdf",
      },
    ],
  },
  {
    title: "The Boardwalk Robbie and The Bandits",
    items: [
      {
        img: INV + "The Boardwalk Robbie and The Bandits/IMG_3507.PNG",
        description: "asdf",
      },
      {
        img: INV + "The Boardwalk Robbie and The Bandits/IMG_3508.jpeg",
        description: "asdf",
      },
      {
        img: INV + "The Boardwalk Robbie and The Bandits/IMG_3509.jpeg",
        description: "asdf",
      },
    ],
  },
  {
    title: "Velour Anniversary",
    items: [
      {
        img: INV + "Velour Anniversary/IMG_3338.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Velour Anniversary/IMG_3339.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Velour Anniversary/IMG_3340.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Velour Anniversary/IMG_3341.jpeg",
        description: "asdf",
      },
    ],
  },
  {
    title: "Velour Rally Album Release",
    items: [
      {
        img: INV + "Velour Rally Album Release/IMG_2104.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Velour Rally Album Release/IMG_2106.PNG",
        description: "asdf",
      },
      {
        img: INV + "Velour Rally Album Release/IMG_2109.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Velour Rally Album Release/IMG_2110.jpeg",
        description: "asdf",
      },
    ],
  },
  {
    title: "Vista Heights Middle Scool Recording Camp",
    items: [
      {
        img: INV + "Vista Heights Middle Scool Recording Camp/IMG_3185.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Vista Heights Middle Scool Recording Camp/IMG_3186.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Vista Heights Middle Scool Recording Camp/IMG_3187.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Vista Heights Middle Scool Recording Camp/IMG_3191.jpeg",
        description: "asdf",
      },
    ],
  },
  {
    title: "Wasatch Mountain Film Festival 2022",
    items: [
      {
        img: INV + "Wasatch Mountain Film Festival 2022/IMG_1678.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Wasatch Mountain Film Festival 2022/IMG_1679.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Wasatch Mountain Film Festival 2022/IMG_1680.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Wasatch Mountain Film Festival 2022/IMG_1682.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Wasatch Mountain Film Festival 2022/IMG_1683.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Wasatch Mountain Film Festival 2022/IMG_1685.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Wasatch Mountain Film Festival 2022/IMG_2107.PNG",
        description: "asdf",
      },
    ],
  },
  {
    title: "Westlake Marching Band Live Sound",
    items: [
      {
        img: INV + "Westlake Marching Band Live Sound/IMG_2167.JPG",
        description: "asdf",
      },
      {
        img: INV + "Westlake Marching Band Live Sound/IMG_3023.jpeg",
        description: "asdf",
      },
      {
        img: INV + "Westlake Marching Band Live Sound/IMG_3024.jpeg",
        description: "asdf",
      },
    ],
  },
];
