import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { FormSchema } from "~/pages/contact";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  email: publicProcedure
    .input(FormSchema)
    .mutation(async ({ input: { email, message, name } }) => {
      try {
        FormSchema.parse({ email, message, name });
        console.log("correct input");
      } catch (error) {
        throw new Error("Invalid input");
      }

      const user = process.env.EMAIL;
      const pass = process.env.EMAIL_PASS;
      console.log("🚀 ~ .mutation ~ user:", user);
      console.log("🚀 ~ .mutation ~ pass:", pass);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: { user, pass },
      });

      // TODO: add email templates for both sender and prkr?

      const content: Mail.Options = {
        from: user,
        to: user,
        text: message,
        subject: `New message from ${name} at ${email}`,
        html: `<p>${message}</p>`,
      };

      try {
        const res = await transporter.sendMail(content);
        console.log("✅ ~ .mutation ~ email sent!");
        console.log(res);
      } catch (error) {
        console.log("❌ ~ .mutation ~ error:", error);
        return { success: false, error };
      }

      return { success: true };
    }),
});

export type AppRouter = typeof appRouter;
