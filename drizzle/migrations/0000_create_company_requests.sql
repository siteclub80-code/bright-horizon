CREATE TABLE public.company_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 deleted_at timestamptz,
 company_name text NOT NULL CHECK (char_length(company_name) BETWEEN 2 AND 100),
 contact_name text NOT NULL CHECK (char_length(contact_name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 10 AND 20),
 plan text NOT NULL CHECK (plan IN ('landing','company','system')),
 description text NOT NULL CHECK (char_length(description) BETWEEN 10 AND 2000),
 files jsonb NOT NULL DEFAULT '[]'::jsonb,
 status text NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','archived'))
);
GRANT ALL ON public.company_requests TO service_role;
ALTER TABLE public.company_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX company_requests_created_at_idx ON public.company_requests(created_at DESC);