const { createClient } = supabasesupabasesupabase

const supabaseUrl = 'https://fewcywtpditheaemdsbb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

