import { useRouter } from "next/router";
import { Parallax } from "react-scroll-parallax";

export default function Footer() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <footer className="mt-12 mb-4 flex justify-center text-xs text-slate-400">
      <Parallax
        rotate={[5, 0, "easeOut"]}
        easing="easeIn"
        shouldAlwaysCompleteAnimation={true}
        disabled={pathname === "/contact"}
      >
        <a
          href="https://github.com/andromidasj"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Made with 💚 by{" "}
          <span className="transition-colors duration-500 hover:text-slate-50">
            Josh Andromidas
          </span>
        </a>
      </Parallax>
    </footer>
  );
}
