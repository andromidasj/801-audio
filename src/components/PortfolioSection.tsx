import { type ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function PortfolioSection({ title, children }: Props) {
  return (
    <div className="m-auto flex max-w-6xl flex-col gap-4 p-24 text-2xl">
      <h2 className="font-header text-4xl uppercase underline decoration-green-400 underline-offset-8">
        {title}
      </h2>
      {children}
    </div>
  );
}
