import React from "react";
import NavBar from "~/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Obviously, this is not a secure way to store passwords.
  // This is just a quick and dirty way to prevent people from
  // stumbling upon the downloads. (I don't want to deal with
  // authentication right now.)
  // const [input, setInput] = useLocalStorage("password", "");

  const superSecretPasswordThatNobodyCanEverKnow = "Thunderband15!";

  return (
    <>
      <NavBar />
      <div className="m-auto mt-16 flex max-w-xl flex-col gap-8 p-8">
        <main>
          {/* {input !== superSecretPasswordThatNobodyCanEverKnow ? (
          <Input
            // type="password"
            placeholder="Enter password"
            className="text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        ) : (
          children
        )} */}
          {children}
        </main>
      </div>
    </>
  );
}
