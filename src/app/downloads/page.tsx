import SupabaseDownloadItems from "~/components/SupabaseDownloadItems";
import { supabase } from "~/utils/storage";

export default async function Page() {
  const { data: supabaseDownloads } = await supabase.storage
    .from("downloads")
    .list();

  if (!supabaseDownloads) {
    return <div>Error</div>;
  }

  return <SupabaseDownloadItems />;
}
