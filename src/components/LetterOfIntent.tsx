import Image from "next/image";
import PortfolioSection from "./PortfolioSection";

export default function LetterOfIntent() {
  return (
    <PortfolioSection title="Letter of Intent">
      <div className="mt-8 flex flex-col gap-6 text-2xl md:m-8">
        <p>
          Hello! My name is <span className="font-bold">Parker Holt</span> and I
          am currently pursuing a degree in digital audio at Utah Valley
          University. Over the past three years, I have immersed myself in this
          field and have become passionate about all things audio. From
          recording and mixing to mastering and sound design, I am constantly
          seeking to expand my knowledge and improve my skills.
        </p>
        <p>
          As a student at UVU, I have been fortunate to have access to
          top-of-the-line equipment and resources. I am constantly seeking out
          opportunities to collaborate with my peers and learn from their
          experiences and perspectives. In addition to honing my technical
          skills, I am also focused on developing my interpersonal skills and
          building strong relationships with my classmates and industry
          professionals. I believe that these connections will be invaluable as
          I embark on my career in digital audio.
        </p>
        <p>
          Ultimately, my goal is to become a successful mix engineer for
          podcasts or music. I am drawn to the creative and technical aspects of
          this role, and am excited by the prospect of working with talented
          artists and content creators to help bring their vision to life. I
          would like to establish connections here at UVU that can assist me in
          starting new projects, providing opportunities to learn, and seek help
          from fellow program members when necessary.
        </p>
        <p>
          In the long term, my goal is to build a consistent and stable client
          base, either by working for an established company or establishing my
          own studio brand. I am aware that my success will largely depend on my
          ability to deliver excellent work, as well as the relationships I
          forge and networks I build over time. To achieve this, I am committed
          to networking and building connections early on in my career, which
          will help me gain recognition, develop my skills, and ultimately
          expand my brand.
        </p>
      </div>
      <Image
        src={"assets/signature.svg"}
        alt="Parker Holt signature"
        className="self-end"
        height={90}
        width={324}
      />
    </PortfolioSection>
  );
}
