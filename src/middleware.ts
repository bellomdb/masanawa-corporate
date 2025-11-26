import { defineMiddleware } from 'astro:middleware';
import { supabase } from './lib/supabase';

export const onRequest = defineMiddleware(async ({ url, redirect, cookies }, next) => {
    // Check if accessing /kwata routes (but not the login or signup pages)
    if (url.pathname.startsWith('/kwata') && url.pathname !== '/kwata/login' && url.pathname !== '/kwata/signup') {
        const accessToken = cookies.get('sb-access-token')?.value;
        const refreshToken = cookies.get('sb-refresh-token')?.value;

        // Simple check for token presence to avoid blocking network calls in middleware
        // The actual data security is handled by RLS policies in the database
        if (!accessToken || !refreshToken) {
            return redirect('/kwata/login');
        }

        // We allow the request to proceed if tokens are present.
        // If the tokens are invalid, the client-side Supabase calls will fail (401),
        // and we can handle that in the UI.
        return next();
    }

    return next();
});
