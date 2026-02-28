// ─────────────────────────────────────────────────────────────
// SUPABASE CLIENT — paste your Anon Key from:
// Supabase Dashboard → Settings → API → Project API keys → anon public
// ─────────────────────────────────────────────────────────────
const SUPABASE_URL  = 'https://uplvgniuoxrhrriuxdou.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwbHZnbml1b3hyaHJyaXV4ZG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyNjU5MjMsImV4cCI6MjA4Nzg0MTkyM30.N1e93icx1rIMeXTENW7l4NhY8ds8FFk3Zmi2UoTv974';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// Helper: get current authenticated user (null if not logged in)
async function getCurrentUser() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
}
