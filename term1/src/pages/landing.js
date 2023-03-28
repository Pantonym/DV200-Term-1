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
import bitcoin_logo from '../images/Bitcoin_White.svg';
import ethereum_logo from '../images/Ethereum.svg';

// Display data
function Landing() {

    // --Constants that will receive and set the data. The useState can be left empty to not have a loading text
    // ----Total coins amount
    const [TotalCoins, setTotalCoins] = useState("10 000");
    // ----Coin 1
    const [Coin1Name, setCoin1Name] = useState("Loading");
    const [Coin1Value, setCoin1Value] = useState("Loading");
    const [Coin1ValueBtc, setCoin1ValueBtc] = useState("0");
    const [Coin1Rank, setCoin1Rank] = useState("Loading");
    // ----Coin 2
    const [Coin2Name, setCoin2Name] = useState("Loading");
    const [Coin2Value, setCoin2Value] = useState("Loading");
    const [Coin2ValueBtc, setCoin2ValueBtc] = useState("0");
    const [Coin2Rank, setCoin2Rank] = useState("Loading");
    // ----Coin 3
    const [Coin3Name, setCoin3Name] = useState("Loading");
    const [Coin3Value, setCoin3Value] = useState("Loading");
    const [Coin3ValueBtc, setCoin3ValueBtc] = useState("0");
    const [Coin3Rank, setCoin3Rank] = useState("Loading");
    // ----Coin 4
    const [Coin4Name, setCoin4Name] = useState("Loading");
    const [Coin4Value, setCoin4Value] = useState("Loading");
    const [Coin4ValueBtc, setCoin4ValueBtc] = useState("0");
    const [Coin4Rank, setCoin4Rank] = useState("Loading");
    // ----Coin 5
    const [Coin5Name, setCoin5Name] = useState("Loading");
    const [Coin5Value, setCoin5Value] = useState("Loading");
    const [Coin5ValueBtc, setCoin5ValueBtc] = useState("0");
    const [Coin5Rank, setCoin5Rank] = useState("Loading");
    // ----Coin 6
    const [Coin6Name, setCoin6Name] = useState("Loading");
    const [Coin6Value, setCoin6Value] = useState("Loading");
    const [Coin6ValueBtc, setCoin6ValueBtc] = useState("0");
    const [Coin6Rank, setCoin6Rank] = useState("Loading");

    // --Generate the data
    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then((response) => {
                console.log(response.data);

                // --Total coins
                setTotalCoins(response.data.info.coins_num);

                // --Coin 1
                // ----Coin 1 Name
                setCoin1Name(response.data.data[0].name);
                // ----Coin 1 price in USD
                let Price = response.data.data[0].price_usd;
                // ------This will format the data to english, currency and finally the US Dollar
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoin1Value(Price);
                // ----Value 1 in Bitcoin
                setCoin1ValueBtc(response.data.data[0].price_btc)
                // ----Coin 1 Rank
                setCoin1Rank(response.data.data[0].rank);

                // --Coin 2
                // ----Coin 2 Name
                setCoin2Name(response.data.data[1].name);
                // ----Coin 2 price in USD
                Price = response.data.data[1].price_usd;
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoin2Value(Price);
                // ----Value 2 in Bitcoin
                setCoin2ValueBtc(response.data.data[1].price_btc);
                // ----Coin 2 Rank
                setCoin2Rank(response.data.data[1].rank);

                // --Coin 3
                // ----Coin 3 Name
                setCoin3Name(response.data.data[2].name);
                // ----Coin 3 price in USD
                Price = response.data.data[2].price_usd;
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoin3Value(Price);
                // ----Value 3 in Bitcoin
                setCoin3ValueBtc(response.data.data[2].price_btc);
                // ----Coin 3 Rank
                setCoin3Rank(response.data.data[2].rank);

                // --Coin 4
                // ----Coin 4 Name
                setCoin4Name(response.data.data[3].name);
                // ----Coin 4 price in USD
                Price = response.data.data[3].price_usd;
                // ------This will format the data to english, currency and finally the US Dollar
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoin4Value(Price);
                // ----Value 1 in Bitcoin
                setCoin4ValueBtc(response.data.data[3].price_btc)
                // ----Coin 1 Rank
                setCoin4Rank(response.data.data[3].rank);

                // --Coin 5
                // ----Coin 5 Name
                setCoin5Name(response.data.data[4].name);
                // ----Coin 5 price in USD
                Price = response.data.data[4].price_usd;
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoin5Value(Price);
                // ----Value 5 in Bitcoin
                setCoin5ValueBtc(response.data.data[4].price_btc);
                // ----Coin 5 Rank
                setCoin5Rank(response.data.data[4].rank);

                // --Coin 6
                // ----Coin 6 Name
                setCoin6Name(response.data.data[5].name);
                // ----Coin 6 price in USD
                Price = response.data.data[5].price_usd;
                // ------This will format the data to english, currency and finally the US Dollar
                Price = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(Price);
                setCoin6Value(Price);
                // ----Value 6 in Bitcoin
                setCoin6ValueBtc(response.data.data[5].price_btc)
                // ----Coin 6 Rank
                setCoin6Rank(response.data.data[5].rank);

            })
            .catch((err) => {
                // --Logs whichever error is applicable
                console.log(err);
            })
    }, [])

    return (
        // Display the data
        <div className="LandingDisplay">

            <div>

                <br></br>

                {/* --Titles for the top 2 coins */}
                <label className="left Crypto_Label_Left Font_Title Bold Libre">Top Coin:</label>
                <label className="right Crypto_Label_Right Font_Title Bold Libre">Second Place:</label>

                <br></br>

                {/* --First of two cards displaying the current two currency leaders */}
                <Card className="crypto_card border-light">

                    <Card.Img variant="top" src={bitcoin_logo} className='crypto_img' />

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold">{Coin1Name}</Card.Title>
                        <Card.Text className="Mulish Font_Body">USD: {Coin1Value}</Card.Text>
                        <Card.Text className="Mulish Font_Body">In Bitcoin: {Coin1ValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body">Current Rank: {Coin1Rank}</Card.Text>

                    </Card.Body>

                </Card>

                <Card className="crypto_card border-light">

                    <Card.Img variant="top" src={ethereum_logo} className='crypto_img' />

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold">{Coin2Name}</Card.Title>
                        <Card.Text className="Mulish Font_Body">USD: {Coin2Value}</Card.Text>
                        <Card.Text className="Mulish Font_Body">In Bitcoin: {Coin2ValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body">Current Rank: {Coin2Rank}</Card.Text>

                    </Card.Body>

                </Card>

            </div>

            {/* --Horizontal Rule to split the two sections for increased readability*/}
            <br></br>
            <hr className="landing_split"></hr>

            <div>

                {/* Summary/Breakdown */}
                <p className="Summary Libre Font_Subtitle">
                    This dataset includes information about {TotalCoins} cryptocurrencies.
                    <br></br>
                    <br></br>
                    Most importantly, it includes their rank, price in US Dollars, their price in Bitcoin, their total market value
                    and total market supply (among others). They will be compared to one another with a bar graph, a pie chart and
                    a radar chart.
                    <br></br>
                    <br></br>
                    The bar graph will compare price in USD, as well as current market supply. The pie chart will compare the total
                    market volume (total amount of coins currently in supply) with the market volume of several different coins. This
                    will reveal each coin's market share when compared to each other. The radar chart will compare the current market
                    share, the price in Bitcoin, the total supply and the number of coins in current supply.
                    <br></br>
                    <br></br>
                    Finally, a timeline will be used to display and compare the price changes (in percentage) of multiple different
                    cryptocurrencies within the last 1 hour, 1 day, and 1 week.
                </p>

            </div>

            {/* --Horizontal Rule to split the two sections for increased readability*/}
            <br></br>
            <hr className="landing_split"></hr>

            {/* Four small cards that will contain information */}
            <br></br>
            {/* --Title for the 4 coins */}
            <label className="Font_Title white Libre">Runner ups to the top 2 Coins:</label>
            <br></br>

            {/* --4 cards */}
            <div style={{ paddingTop: '75px' }}>

                <Card className="small_card border-dark small_card_down">

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold white"> {Coin3Name} </Card.Title>
                        <Card.Text className="Mulish Font_Body white">USD: {Coin3Value}</Card.Text>
                        <Card.Text className="Mulish Font_Body white">In Bitcoin: {Coin3ValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body white">Current Rank: {Coin3Rank}</Card.Text>

                    </Card.Body>

                </Card>

                <Card className="small_card border-dark small_card_up">

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold white"> {Coin4Name} </Card.Title>
                        <Card.Text className="Mulish Font_Body white">USD: {Coin4Value}</Card.Text>
                        <Card.Text className="Mulish Font_Body white">In Bitcoin: {Coin4ValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body white">Current Rank: {Coin4Rank}</Card.Text>

                    </Card.Body>

                </Card>

                <Card className="small_card border-dark small_card_down">

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold white"> {Coin5Name} </Card.Title>
                        <Card.Text className="Mulish Font_Body white">USD: {Coin5Value}</Card.Text>
                        <Card.Text className="Mulish Font_Body white">In Bitcoin: {Coin5ValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body white">Current Rank: {Coin5Rank}</Card.Text>

                    </Card.Body>

                </Card>

                <Card className="small_card border-dark small_card_up">

                    <Card.Body>

                        <Card.Title className="Libre Font_Title Bold white"> {Coin6Name} </Card.Title>
                        <Card.Text className="Mulish Font_Body white">USD: {Coin6Value}</Card.Text>
                        <Card.Text className="Mulish Font_Body white">In Bitcoin: {Coin6ValueBtc} BTC</Card.Text>
                        <Card.Text className="Mulish Font_Body white">Current Rank: {Coin6Rank}</Card.Text>

                    </Card.Body>

                </Card>

            </div>

        </div>
    )
}

export default Landing;