// msupply : maximum supply
// csupply : current supply
// tsupply : lost coins are still counted

// Import React functionality
import React from "react";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Import API functionality
import axios from "axios";

// Import Bootstrap functionality
import { Card } from "react-bootstrap";

// Logo images
import bitcoin_logo from '../images/Bitcoin.svg';
import ethereum_logo from '../images/Ethereum.svg';

const color1 = "#196296";
const color2 = "#85E8F6";

// Display data
function Landing() {

    // --Constants that will receive and set the data. The useState can be left empty to not have a loading text
    // ----Total coins amount
    const [TotalCoins, setTotalCoins] = useState("10 000");
    // ----Coin 1
    const [CoinOneName, setCoinOneName] = useState("Loading");
    const [CoinOneValue, setCoinOneValue] = useState("Loading");
    const [CoinOneValueBtc, setCoinOneValueBtc] = useState("0");
    const [CoinOneRank, setCoinOneRank] = useState("Loading");
    // ----Coin 2
    const [CoinTwoName, setCoinTwoName] = useState("Loading");
    const [CoinTwoValue, setCoinTwoValue] = useState("Loading");
    const [CoinTwoValueBtc, setCoinTwoValueBtc] = useState("0");
    const [CoinTwoRank, setCoinTwoRank] = useState("Loading");

    // --Generate the data
    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then((response) => {
                console.log(response.data);

                // --Total coins
                setTotalCoins(response.data.info.coins_num);

                // --Coin 1
                // ----Coin 1 Name
                setCoinOneName(response.data.data[0].name);
                // ----Coin 1 price in USD
                let Price = response.data.data[0].price_usd;
                // ------This will format the data to english, currency and finally the US Dollar
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoinOneValue(Price);

                // ----Value 1 in Bitcoin
                setCoinOneValueBtc(response.data.data[0].price_btc)

                // ----Coin 1 Rank
                setCoinOneRank(response.data.data[0].rank);

                // --Coin 2
                // ----Coin 2 Name
                setCoinTwoName(response.data.data[1].name);

                // ----Coin 2 price in USD
                Price = response.data.data[1].price_usd;
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoinTwoValue(Price);

                // ----Value 2 in Bitcoin
                setCoinTwoValueBtc(response.data.data[1].price_btc);

                // ----Coin 2 Rank
                setCoinTwoRank(response.data.data[1].rank);

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        // Display the data
        // --Linear gradient for the body
        <div style={{ background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`, height: '100%', paddingBottom: '150px', display: 'flex', flexDirection: 'column' }}>

            <div>

                {/* --First of two cards displaying the current two currency leaders */}
                <Card className="crypto_card crypto_card_1 border-light">

                    <Card.Img variant="top" src={bitcoin_logo} className='crypto_img' />

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold">{CoinOneName}</Card.Title>
                        <Card.Text className="Mulish Font_Body">USD: {CoinOneValue}</Card.Text>
                        <Card.Text className="Mulish Font_Body">In Bitcoin: {CoinOneValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body">Current Rank: {CoinOneRank}</Card.Text>

                    </Card.Body>

                </Card>

                <Card className="crypto_card crypto_card_2 border-light">

                    <Card.Img variant="top" src={ethereum_logo} className='crypto_img' />

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold">{CoinTwoName}</Card.Title>
                        <Card.Text className="Mulish Font_Body">USD: {CoinTwoValue}</Card.Text>
                        <Card.Text className="Mulish Font_Body">In Bitcoin: {CoinTwoValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body">Current Rank: {CoinTwoRank}</Card.Text>

                    </Card.Body>

                </Card>

            </div>

            <div>

                {/* Summary/Breakdown */}
                <p className="Summary Libre Font_Body Bold">
                    This dataset includes information about {TotalCoins} cryptocurrencies. It includes, most importantly, their rank,
                    price in US Dollars their price in Bitcoin, their total market value and total market supply among others.
                </p>

            </div>

            {/* Four small cards that will contain information */}
            <div style={{ paddingTop: '75px' }}>

                <Card className="small_card border-dark small_card_down" style={{ background: 'linear-gradient(90deg, #0066FF 0%, #00A3FF 100%)' }}>

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold"> Information </Card.Title>
                        <Card.Text className="Mulish Font_Body"> Information </Card.Text>

                    </Card.Body>

                </Card>

                <Card className="small_card border-dark small_card_up" style={{ background: 'linear-gradient(90deg, #009EFF 0%, #00C2FF 100%)' }}>

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold"> Information </Card.Title>
                        <Card.Text className="Mulish Font_Body"> Information </Card.Text>

                    </Card.Body>

                </Card>

                <Card className="small_card border-dark small_card_down" style={{ background: 'linear-gradient(90deg, #00BEFF 0%, #00E0FF 100%)' }}>

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold"> Information </Card.Title>
                        <Card.Text className="Mulish Font_Body"> Information </Card.Text>

                    </Card.Body>

                </Card>

                <Card className="small_card border-dark small_card_up" style={{ background: 'linear-gradient(90deg, #00DDFF 0%, #00FFFF 100%)' }}>

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold"> Information </Card.Title>
                        <Card.Text className="Mulish Font_Body"> Information </Card.Text>

                    </Card.Body>

                </Card>

            </div>

        </div>
    )
}

export default Landing;