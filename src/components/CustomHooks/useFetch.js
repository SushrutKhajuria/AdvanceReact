import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message || "Failed to fetch data");
                setIsLoading(false);
            });
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;