-- ═══════════════════════════════════════════════════════════
-- GREENBITE — Supabase Setup SQL
-- Run this once in: Supabase Dashboard → SQL Editor → New query
-- ═══════════════════════════════════════════════════════════

-- ── 1. Tracker table ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tracker (
    id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id     UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    date        DATE        NOT NULL,
    recipe_name TEXT        NOT NULL,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security: users can only see/edit their own rows
ALTER TABLE tracker ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "tracker: own rows only" ON tracker;
CREATE POLICY "tracker: own rows only"
    ON tracker FOR ALL
    USING  (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Index for fast per-user queries
CREATE INDEX IF NOT EXISTS tracker_user_date ON tracker (user_id, date);


-- ── 2. Collection table ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS collection (
    id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    recipe_id  TEXT        NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, recipe_id)         -- prevents duplicate favourites
);

ALTER TABLE collection ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "collection: own rows only" ON collection;
CREATE POLICY "collection: own rows only"
    ON collection FOR ALL
    USING  (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS collection_user ON collection (user_id);


-- ═══════════════════════════════════════════════════════════
-- OPTIONAL — Enable Anonymous sign-in via Dashboard instead:
-- Authentication → Providers → Anonymous sign-ins → Enable
-- (needed for "Continue as Guest" to persist data in Supabase)
-- ═══════════════════════════════════════════════════════════
