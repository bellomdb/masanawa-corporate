import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { id, ...projectData } = body;

        let error;

        if (id) {
            // Update existing
            const { error: updateError } = await supabase
                .from('projects')
                .update(projectData)
                .eq('id', id);
            error = updateError;
        } else {
            // Create new
            const { error: insertError } = await supabase
                .from('projects')
                .insert([projectData]);
            error = insertError;
        }

        if (error) {
            console.error('Supabase error:', error);
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error('Error saving project:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}
