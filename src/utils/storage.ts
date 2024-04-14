import { createClient } from "@supabase/supabase-js";
import { env } from "~/env.js";

const supabase = createClient(env.DATABASE_URL, env.SUPABASE_API_KEY);

export const { data: supabaseDownloads } = await supabase.storage
  .from("downloads")
  .list();
