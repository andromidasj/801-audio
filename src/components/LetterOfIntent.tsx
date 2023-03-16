import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { type ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";
import PortfolioSection from "./PortfolioSection";

export default function LetterOfIntent() {
  const isSm = useMediaQuery("(max-width: 640px)");
  const parallaxProps: ParallaxProps = {
    easing: "easeInOut",
    startScroll: 0,
    endScroll: 300,
  };

  const fromRight: ParallaxProps = { ...parallaxProps, translateX: [0.5, 0] };
  const fromLeft: ParallaxProps = { ...parallaxProps, translateX: [-0.5, 0] };

  return (
    <PortfolioSection title="Letter of Intent">
      <div className="mt-8 flex flex-col gap-6 text-2xl md:m-8">
        <Parallax {...fromLeft}>
          <p>
            Hello! My name is{" "}
            <span className="font-bold text-blue-200">Parker Holt</span> and I
            am currently pursuing a degree in digital audio at{" "}
            <span className="text-green-400">Utah Valley University</span>. Over
            the past three years, I have immersed myself in this field and have
            become passionate about all things audio. From recording and mixing
            to mastering and sound design, I am constantly seeking to expand my
            knowledge and improve my skills.
          </p>
        </Parallax>
        <Parallax {...fromRight}>
          <p>
            As a student at UVU, I have been fortunate to have access to
            top-of-the-line equipment and resources. I am constantly seeking out
            opportunities to collaborate with my peers and learn from their
            experiences and perspectives. In addition to honing my technical
            skills, I am also focused on developing my interpersonal skills and
            building strong relationships with my classmates and industry
            professionals. I believe that these connections will be invaluable
            as I embark on my career in digital audio.
          </p>
        </Parallax>
        <Parallax {...fromLeft}>
          <p>
            Ultimately, my goal is to become a successful mix engineer for
            podcasts or music. I am drawn to the creative and technical aspects
            of this role, and am excited by the prospect of working with
            talented artists and content creators to help bring their vision to
            life. I would like to establish connections here at UVU that can
            assist me in starting new projects, providing opportunities to
            learn, and seek help from fellow program members when necessary.
          </p>
        </Parallax>
        <Parallax {...fromRight}>
          <p>
            In the long term, my goal is to build a consistent and stable client
            base, either by working for an established company or establishing
            my own studio brand. I am aware that my success will largely depend
            on my ability to deliver excellent work, as well as the
            relationships I forge and networks I build over time. To achieve
            this, I am committed to networking and building connections early on
            in my career, which will help me gain recognition, develop my
            skills, and ultimately expand my brand.
          </p>
        </Parallax>
      </div>

      <div className="flex flex-row-reverse">
        <Parallax translateX={[0, -10]} disabled={isSm}>
          <Image
            src={"assets/signature.svg"}
            alt="Parker Holt signature"
            height={82}
            width={300}
          />
        </Parallax>
      </div>
    </PortfolioSection>
  );
}
