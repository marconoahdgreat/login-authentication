import {createClient} from '@supabase/supabase-js'

const supabaseUrl ='https://bvczchgshbalfaskstlf.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Y3pjaGdzaGJhbGZhc2tzdGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTY1NzcsImV4cCI6MTk5Mjk3MjU3N30.l8fzd8VbPe31q453tV-emJ89zxfBJUQDl_HubpaUkaQ'
export const supabase = createClient(supabaseUrl, supabaseKey)

