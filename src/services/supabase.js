import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zenweiswpivszgkjxlcl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplbndlaXN3cGl2c3pna2p4bGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NzcxNTQsImV4cCI6MjAxNjM1MzE1NH0.-9u3mc0ISUC-KvPsVx0yA1q1agTjL0XAobJ8VMRqjyE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
