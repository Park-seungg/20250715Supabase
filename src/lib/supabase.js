import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnon = NEXT_PUBLIC_SUPABASE_ANON_KEY;

createClient(supabaseUrl, supabaseAnon);
