import { IconMusic } from "@tabler/icons-react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/parker-headshot.png"
          width={400}
          height={400}
          className="rounded-full"
          alt="Parker headshot"
        />
        <h1 className="font-header text-6xl">{"Hi, I'm Parker!"}</h1>
      </div>

      <IconMusic size={32} className="mx-auto mt-12" />

      <div className="m-auto mt-16 max-w-2xl">
        <h1 className="font-header text-4xl">About Me</h1>
        <div className="flex flex-col gap-4 p-4">
          <p>
            Irure ut exercitation voluptate sunt cillum dolor voluptate elit ex
            deserunt est reprehenderit cillum incididunt. Amet ullamco et
            voluptate quis ullamco excepteur non fugiat enim mollit sint
            voluptate ipsum. Fugiat ad enim duis eu. Nisi culpa magna ad.
          </p>
          <p>
            Dolore Lorem aute exercitation do sunt laboris esse sunt consequat
            do occaecat non est ipsum enim. Tempor dolor qui cillum sunt sint.
            Ullamco incididunt anim veniam velit fugiat magna enim ipsum Lorem.
            Officia cupidatat consectetur tempor ut ipsum.
          </p>
          <p>
            Laboris esse amet ad commodo veniam mollit est pariatur adipisicing
            ipsum. Eiusmod minim enim amet minim est eu deserunt non culpa ut
            nisi eu sint irure. Id ipsum irure culpa incididunt tempor cupidatat
            nisi eu mollit. Exercitation esse officia est.
          </p>
        </div>
      </div>
    </>
  );
}
