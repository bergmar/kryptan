import { useEffect, useState } from 'react';
import { formatUSD, renderDate } from '../utils';

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log(process.env);
    fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
      headers: {
        'X-CoinAPI-Key': process.env.REACT_APP_API_KEY, // Replace with your API key
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Rates</h1>
      {data && (
        <div>
          <h2>Status:</h2> 
          <h3>Rate</h3>
          1 BTC = {formatUSD(data.rate)}
          <h3>Datum</h3>
          {data.time && <div>{renderDate(data.time)}</div>}
        </div>
      )}
    </div>
  );
};

export default App;
