import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [dataState, setDataState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // const controller = new AbortController();
    let opts = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '93bf85dd-ae5f-4fb0-8f13-8c60ec306578',
      },
      // signal: controller.signal,
    };
    let fetchData = async () => {
      try {
        let data = await fetch(url, opts);
        let res = await data.json();
        console.log('res:::', res);
        setDataState(res);
        if (!res.ok) throw new Error(`An Error has occured:: ${res.status}`); // set after setDataState due to unproper status code handling hindering data fetch
      } catch (err) {
        setError(err.message);
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // return () => controller.abort();
  }, [url]);

  return { dataState, loading, error };
}
