const  { createClient } = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = 'https://omooerkimkvjgivapaly.supabase.co'
const PUBLISH_URL = 'sb_publishable_Z57bFIH8v7ehCzbn-iZFQA_MHt_a4MW'
const supabaseClient = createClient(PROJECT_URL, PUBLISH_URL);
console.log(supabaseClient);


export default supabaseClient
