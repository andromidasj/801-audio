import {
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
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
    onError() {
      console.log("Error sending email");
      setTimeout(() => {
        mutationReset();
        formReset();
      }, 4000);
    },
  });

  function onSubmit(data: FormValues) {
    try {
      FormSchema.parse(data);
      mutate(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Head>
        <title>Contact | 801 Audio</title>
        <meta
          name="description"
          content="Contact page for 801 Audio by Parker Holt."
        />
      </Head>

      <div className="m-auto mt-16 flex max-w-xl flex-col gap-8 p-8">
        <h1 className="mt-10 text-center font-header text-5xl uppercase text-white underline decoration-green-300 underline-offset-8 sm:text-6xl">
          Contact
        </h1>

        <form
          className="m-auto flex w-full flex-col gap-2"
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
              className="flex items-center justify-center gap-2 rounded-sm bg-green-300 p-3 px-6 font-bold uppercase text-black hover:bg-green-400"
              type="submit"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
              <span>Send Email</span>
            </button>
          )}

          {isLoading && (
            <button
              className="flex items-center justify-center gap-2 rounded-sm bg-green-300 p-3 px-6 font-bold uppercase text-black"
              disabled
            >
              <ArrowPathIcon className="h-6 w-6 animate-spin" />
              <span>Sending...</span>
            </button>
          )}

          {isSuccess && (
            <>
              <div className="flex items-center justify-center gap-2 rounded-sm p-3 px-6 text-xl font-bold uppercase text-green-300">
                <CheckCircleIcon className="h-6 w-6" />
                <span>Email sent!</span>
              </div>
              <div className="flex flex-col text-center text-slate-400">
                <p>
                  Thanks for reaching out! I will respond to your message as
                  soon as possible.
                </p>
                <p>I am looking forward to connecting with you!</p>
              </div>
            </>
          )}

          {isError && (
            <>
              <div className="flex items-center justify-center gap-2 rounded-sm p-3 px-6 font-bold uppercase text-red-400">
                <ExclamationCircleIcon className="h-6 w-6" />
                <span>Error sending email</span>
              </div>
              <p className="text-center text-slate-400">
                Please refresh and try again.
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
}
