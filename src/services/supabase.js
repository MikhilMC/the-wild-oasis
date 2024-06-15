import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yjvasmpbpvpnhscmhggc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqdmFzbXBicHZwbmhzY21oZ2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5Njk3NzksImV4cCI6MjAzMTU0NTc3OX0.1NvJCj2jldi5Zpuz1_70_XYciXKhTPfhvn5-3ivepAo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
