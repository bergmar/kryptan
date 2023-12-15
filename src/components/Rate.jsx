import { useEffect, useState } from 'react';
import H from './H';
import { formatSEK, renderDate } from '../utils';

const Rate = ({ timeStart, timeEnd }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const start = timeStart ? new Date(timeStart) : new Date(); // Replace with your date
    const end = timeEnd ? new Date(timeEnd) : new Date(); // Replace with your date
    const getFormattedDate = (inputDate) => `${inputDate.getFullYear()}-${(
      inputDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${inputDate.getDate().toString().padStart(2, '0')}`;

    fetch(
      `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1MTH&time_start=${getFormattedDate(start)}&&time_end=${getFormattedDate(end)}`,
      {
        headers: {
          'X-CoinAPI-Key': process.env.REACT_APP_API_KEY, // Replace with your API key
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);
  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <div className="inline-flex flex-col m-4 p-4 500 bg-white shadow-lg rounded-lg">
      {data && (
        <div>
          <H level={3}>Rate</H>1 BTC = {formatSEK(data.rate)}
          <H level={3}>Datum</H>
          {data.time && <div>{renderDate(data.time)}</div>}
        </div>
      )}
    </div>
  );
};

export default Rate;
