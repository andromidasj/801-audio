import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Contact() {
  const PHONE = "(801) 560-0983";
  const EMAIL = "parkerholt97@gmail.com";

  return (
    <>
      <div className="relative mb-16 h-96 w-full">
        <Image
          priority
          src="/assets/banner-contact.svg"
          alt="CONTACT"
          fill
          className="absolute object-cover"
        />

        <div className="flex h-full items-center justify-center">
          <h1 className="font-header text-[100px] uppercase text-white drop-shadow">
            Contact
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-16 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
        <a
          href={`mailto:${EMAIL}?subject=801 Audio Inquiry`}
          className="m-auto flex items-center gap-4 font-logo hover:text-green-300"
        >
          <AtSymbolIcon className="h-7 w-7 stroke-2 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
          {EMAIL}
        </a>

        <div className="flex items-center justify-center gap-4">
          <PhoneIcon className="h-7 w-7 stroke-2 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
          <h2 className="text-center font-logo">{PHONE}</h2>
        </div>
      </div>
    </>
  );
}
