import {Link} from 'react-router-dom'

const Currencies = () => {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
      ];

    return (
        <div>
            <h1>Currencies Page</h1>
            
            {currencies.map((coin) => {
                // destructuring. Instead of coin.name coin.symbol...
                const {name, symbol} = coin
                return(
                    <Link to={`/price/${symbol}`} className='currencyBtn'>{name}
                    </Link>
                )
            })}
        </div>
    )
}

export default Currencies