// custom hook
import { useEffect, useState } from 'react';
import axios from 'axios';

const axiosAPI = (url) => {
  const [newData, setNewData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNewData(res?.data);
        console.log(res + '萬歲');
      })
      .catch((err) => {
        setError(err);
        console.log(err + '西咧');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return { newData, isLoading, isError };
};

export default axiosAPI;
