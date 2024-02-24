import React from 'react'
import './TableLayout.css';

function formatMoney(amount) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  
    const formattedAmount = formatter.format(amount);
  
    return formattedAmount;
  }
  

export default function TableLayout({ data }) {
    return (
        <div className='Main-container'>
            <table>
                <tbody>
                {data.map((coin) =>
                    <tr key={coin.id}>
                        <td>
                            <div className='Coin-maininfo'>
                                <img src={coin.image} alt={coin.name} />
                                <p>{coin.name}</p>
                            </div>
                        </td>
                        <td>{coin.symbol.toUpperCase()}</td>
                        <td>${coin.current_price.toFixed(2)}</td>
                        <td>{formatMoney(coin.total_volume)}</td>
                        <td className={`${coin.price_change_percentage_24h.toString().includes("-") ? "negative" : "positive" }`}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                        <td>Mkt Cap : {formatMoney(coin.market_cap)}</td>
                    </tr>
                )
                }
                </tbody>
            </table>
        </div>
    )
}
