import { IconAt, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import parker from "../../public/assets/parker/contact.png";

export default function Contact() {
  const PHONE = "(801) 560-0983";
  const EMAIL = "parkerholt97@gmail.com";

  return (
    <div className="mt-8 flex justify-evenly">
      <Image
        src={parker}
        alt="Parker Holt"
        className="rounded-lg drop-shadow-2xl"
      />
      <div className="flex flex-col gap-16 p-8">
        <div className="">
          <h1 className="text-center font-header text-4xl uppercase">
            Contact Me
          </h1>
          <h3 className="mt-4 text-center text-lg">
            Feel free to reach out or send a message!
          </h3>
        </div>

        <div className="rounded-xl border-2 border-blue-50 p-6 font-bold">
          <div className="flex flex-col items-center justify-center gap-8 text-xl">
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
    </div>
  );
}
