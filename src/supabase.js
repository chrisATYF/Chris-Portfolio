import { createClient } from '@supabase/supabase-js'

const { DATABASE_URL, API_KEY } = import.meta.env;

const supabaseUrl = DATABASE_URL;
const supabaseKey = API_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);