import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jfuanasffvjeqsyvrnki.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdWFuYXNmZnZqZXFzeXZybmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3NDMxOTMsImV4cCI6MjA0NzMxOTE5M30.pJUouNxzbNPFx0OskxnW2t4ufZP2DhHSoo7CMqgHqvw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
