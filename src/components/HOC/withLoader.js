// withLoader.js
import React, { useState, useEffect } from 'react';

const withLoader = (WrappedComponent, data) => {
  return function withLoaderComponent(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
      setTimeout(() => {
        setItems(data);
        setIsLoading(false);
      }, 2000);
    }, []);

    if (isLoading) {
      return <div>Loading...</div>
    }

    return <WrappedComponent items={items} />
  };
}
export default withLoader;
