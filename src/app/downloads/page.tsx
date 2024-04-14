import { createClient } from "@supabase/supabase-js";
import SupabaseDownloadItem from "~/components/SupabaseDownloadItem";
import { env } from "~/env.js";

export const supabase = createClient(env.DATABASE_URL, env.SUPABASE_API_KEY);

export default async function Page() {
  const { data: supabaseDownloads } = await supabase.storage
    .from("downloads")
    .list();
  console.log("🚀 ~ Page ~ supabaseDownloads:", supabaseDownloads);

  if (!supabaseDownloads) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="mt-10 text-center font-header text-5xl uppercase text-white underline decoration-green-300 underline-offset-8 sm:text-6xl">
        Downloads
      </h1>
      <h2 className="text-center text-xl">
        Select a folder to view its contents
      </h2>

      <div className="grid w-full grid-cols-3 gap-4">
        <SupabaseDownloadItem />
        {/* {supabaseDownloads.map((folder) => (
          <SupabaseDownloadItem
            // topLevel
            key={folder.name}
            path={folder.name}
            // name={hyphenatedToCapitalized(folder.name)}
          />
        ))} */}
        {/* <Folder name="Band Bash" path="band-bash" topLevel />
        <Folder name="Christmas Concert" path="christmas-concerts" topLevel />
        <Folder
          name="Veterans Day Concert"
          path="veterans-day-concert"
          topLevel
        />
        <Folder name="Spring Concerts" path="spring-concerts" topLevel /> */}
      </div>
    </div>
  );
}
