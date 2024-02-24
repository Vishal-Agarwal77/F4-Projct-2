import { useEffect, useState } from 'react';
import './App.css';
import TableLayout from './TableLayout';
import axios from 'axios';

function App() {
  const [Data, setData] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
        if (response.status === 200) {
          setData(response.data);
        }
        else {
          throw new Error("Either data is not found or api call limit may be exhausted");
        }
      } catch (error) {
        console.log(error);
      }

    }
    getData();
  }, [])
  return (
    Data &&
    <>
      <TableLayout data={Data} />
    </>
  );
}

export default App;
