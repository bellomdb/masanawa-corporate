import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uxzvyjnpiobpzmtqmuyz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4enZ5am5waW9icHptdHFtdXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwOTM3NjksImV4cCI6MjA3OTY2OTc2OX0.ELnmy-tjpRWPKxq7yyfU18bXGyImu-h6yE9U9JiXRjk";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
