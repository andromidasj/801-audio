import SupabaseDownloadItems from "~/components/SupabaseDownloadItems";
import { supabase } from "~/utils/storage";

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
