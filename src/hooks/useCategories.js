import axios from "axios"
import { useImmer } from 'use-immer'
import { useEffect } from "react"

export const useCategories = () => {
  const [state, setState] = useImmer({
    loading: false,
    error: null,
    data: null,
  }) 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setState((draft) => {
      draft.loading = false
      draft.error = null
    });
    try {
      const res = await axios('https://api.publicapis.org/categories');
      setState((draft) => {
        draft.loading = false
        draft.error = null;
        draft.data = res.data;
      });
    } catch(e) {
      setState((draft) => {
        draft.loading = false
        draft.error = e.message;
      });
    }
  }, []) 
  return {
    data: state.data || [],
    loading: state.loading,
    error: state.error,
  };
}