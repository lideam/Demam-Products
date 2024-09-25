import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    setLoading(true);
    fetch();
    setLoading(false);
  }, []);

  return { data, loading, error };
};
