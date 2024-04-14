import { createClient } from "@supabase/supabase-js";
import { env } from "~/env";

export const supabase = createClient(env.DATABASE_URL, env.SUPABASE_API_KEY);
