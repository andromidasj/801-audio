export default function Footer() {
  return (
    <footer className="mt-12 mb-4 flex justify-center gap-2 text-xs text-slate-400">
      <p>Copyright © 2023 Parker Holt</p>
      <p>•</p>
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
    </footer>
  );
}
