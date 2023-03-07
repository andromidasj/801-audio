import { IconAt, IconPhone } from "@tabler/icons-react";
import Image from "next/image";

export default function Contact() {
  const PHONE = "(801) 560-0983";
  const EMAIL = "parkerholt97@gmail.com";

  return (
    <div className="mt-8 flex justify-evenly">
      <Image
        src="/parker-contact.png"
        alt="Parker Holt"
        width={500}
        height={500}
        className="rounded-xl drop-shadow-2xl"
      />
      <div className="p-8">
        <h1 className="text-center font-header text-4xl uppercase">
          Contact Me
        </h1>
        <h3 className="mt-4 text-center text-lg">
          Feel free to reach out or send a message!
        </h3>

        <div className="mt-16 flex flex-col items-center justify-center gap-8 text-xl">
          <div className="flex gap-2">
            <IconPhone />
            <span>{PHONE}</span>
          </div>

          <div className="flex gap-2">
            <IconAt />
            <a href={"mailto:" + EMAIL}>{EMAIL}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
