// App.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    console.log(message)

    fetchData();
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default App;
