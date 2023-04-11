import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trpc } from "~/utils/trpc";

export const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email(),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
});

export type FormValues = z.infer<typeof FormSchema>;

export default function Contact() {
  const PHONE = "(801) 560-0983";
  const EMAIL = "parker@801audio.com";

  const {
    register,
    handleSubmit,
    reset: formReset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const {
    mutate,
    isSuccess,
    isIdle,
    isError,
    isLoading,
    reset: mutationReset,
  } = trpc.email.useMutation({
    onSuccess() {
      console.log("Email sent!");
    },
    onError() {
      console.log("Error sending email");
      setTimeout(() => {
        mutationReset();
        formReset();
      }, 4000);
    },
  });

  function onSubmit(data: FormValues) {
    console.log("🚀 ~ onSubmit ~ data:", data);
    const { email, message, name } = data;

    try {
      FormSchema.parse(data);
      mutate({
        email,
        message,
        name,
      });
      console.log("🚀 ~ onSubmit ~ data:", data);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  }

  return (
    <>
      <Head>
        <title>Contact | 801 Audio</title>
        <meta name="description" content="801 Audio by Parker Holt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto mt-16 flex max-w-xl flex-col gap-8">
        <h1 className="mt-10 text-center font-header text-5xl uppercase text-white underline decoration-green-300 underline-offset-8 sm:text-6xl">
          Contact
        </h1>

        <form
          className="m-auto flex w-full flex-col gap-4"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col">
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="rounded-sm bg-slate-50 py-2 px-3 text-lg text-black"
              placeholder="John Doe"
              type="text"
              id="name"
              {...register("name")}
            />
            <p className="m-1 text-red-500">{errors.name?.message}</p>
          </div>

          <div className="flex w-full flex-col">
            <label className="text-lg" htmlFor="email">
              Email Address
            </label>
            <input
              className="rounded-sm bg-slate-50 py-2 px-3 text-lg text-black"
              placeholder="johndoe@email.com"
              type="email"
              id="email"
              {...register("email")}
            />
            <p className="m-1 text-red-500">{errors.email?.message}</p>
          </div>

          <div className="flex w-full flex-col">
            <label className="text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="rounded-sm bg-slate-50 py-2 px-3 text-lg text-black"
              placeholder="Hi, I'm interested in..."
              id="message"
              {...register("message")}
            />
            <p className="m-1 text-red-500">{errors.message?.message}</p>
          </div>

          {isIdle && (
            <button
              className="mt-4 rounded-sm bg-green-300 p-3 px-6 font-bold uppercase text-black hover:bg-green-400"
              type="submit"
            >
              Send Email
            </button>
          )}

          {isLoading && (
            <button
              className="mt-4 rounded-sm bg-green-300 p-3 px-6 font-bold uppercase text-black"
              disabled
            >
              Sending...
            </button>
          )}

          {isSuccess && (
            <>
              <button
                className="mt-4 rounded-sm bg-green-300 p-3 px-6 font-bold uppercase text-black"
                disabled
              >
                Email sent!
              </button>
              <p className="text-slate-400">{`Thanks for reaching out! I'll send you an email as soon as I can. Can't wait to get in touch!`}</p>
            </>
          )}

          {isError && (
            <button
              className="mt-4 rounded-sm bg-red-400 p-3 px-6 font-bold uppercase text-black"
              disabled
            >
              Error sending email
            </button>
          )}
        </form>
      </div>
    </>
  );
}
