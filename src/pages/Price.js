import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

const Price = () => {
    const [coin, setCoin] = useState(null)

    //1. Store the apiKey and currency symbol in different variable
    const apiKey = '14779E47-6C62-446D-B001-38ED17EEDE54'; 
    // const apiKey= '2FFA9750-D2ED-40B9-ACBD-D1C027E35041'
    //return an object with the matching URL params
    const params = useParams() //param /:symbol
    //3. Interpolate the apiKey and symbol in the fetch URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${apiKey}`
    
    //Fetch the coin data
    const getCoin = async () => {
        try{
            //make the fetch req
            const res = await fetch(url)
            const data = await res.json()
            //save the resulting data in state
            setCoin(data)
        } catch (error){
            console.log(error);
        }
    }
    
    //2. use the useEffect hook to make an api call
    useEffect(() => {
        getCoin()
    }, [])

    //====Rendering
    //mini component: if data is loaded
    const loaded = () => {
        return(
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    //if data still loading 
    const loading = () => <h1>Loading...</h1>

    return (
        <div>
            <h1>Price Page</h1>
            {/* check if coin is there, if available check if data is loaded */}
            {coin && coin.rate ? loaded() : loading() }
        </div>
    )
}

export default Price