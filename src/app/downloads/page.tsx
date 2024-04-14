import { createClient } from "@supabase/supabase-js";
import SupabaseDownloadItems from "~/components/SupabaseDownloadItems";
import { env } from "~/env.js";

export const supabase = createClient(env.DATABASE_URL, env.SUPABASE_API_KEY);

export default async function Page() {
  const { data: supabaseDownloads } = await supabase.storage
    .from("downloads")
    .list();

  if (!supabaseDownloads) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <br />
      <SupabaseDownloadItems />
    </div>
  );
}
