import React from "react";
import NavBar from "~/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="m-auto mt-16 flex max-w-xl flex-col gap-8 p-8">
        <main>
          <h1 className="my-10 text-center font-header text-5xl uppercase text-white underline decoration-green-300 underline-offset-8 sm:text-6xl">
            Downloads
          </h1>
          {children}
        </main>
      </div>
    </>
  );
}
