import { type ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function PortfolioSection({ title, children }: Props) {
  return (
    <div className="m-auto mt-6 flex w-full flex-col gap-4 p-6 md:mt-0 md:max-w-6xl md:p-12">
      <h2 className="font-header text-4xl uppercase underline decoration-green-400 underline-offset-8">
        {title}
      </h2>
      {children}
    </div>
  );
}
