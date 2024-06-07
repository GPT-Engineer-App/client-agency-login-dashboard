import { useContext } from 'react';
import { SupabaseAuthContext } from '../integrations/supabase/auth.jsx';

export const useSupabaseAuth = () => {
    return useContext(SupabaseAuthContext);
};