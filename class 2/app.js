const { createClient } = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = "https://ydvaktcdacglpbvohobd.supabase.co"
const PUBLISH_KEY = "sb_publishable_GDZDRYphfSJ53roKnfKakw_409jU8Fk"

const supabaseClient = createClient(PROJECT_URL,  PUBLISH_KEY)
// console.log(supabaseClient);

