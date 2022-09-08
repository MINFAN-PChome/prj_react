// custom hook
import { useEffect, useState } from 'react';
import axios from 'axios';

const axiosAPI = (url) => {
  const [newBlock, setNewBlock] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setNewBlock(response?.data?.window1?.Blocks);
        console.log(response + '萬歲');
      })
      .catch((err) => {
        setError(err);
        console.log(err + '西咧');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return { newBlock, isLoading, isError };
};

export default axiosAPI;
