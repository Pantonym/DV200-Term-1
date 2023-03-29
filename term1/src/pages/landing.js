import PieChart from "../components/PieGraph";

// Import React functionality
import React from "react";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Import API functionality
import axios from "axios";

// Import Bootstrap functionality
import { Card, Container, Row, Col } from "react-bootstrap";

// Display data
function Landing() {

    // --Constants that will receive and set the data. The useState can be left empty to not have a loading text
    const [TotalCoins, setTotalCoins] = useState();
    const [coinNames, setCoinNames] = useState([]);
    const [coinPrices, setCoinPrices] = useState([]);
    const [CoinPricesUnFormat, setCoinPricesUnFormat] = useState([]);
    const [coinValue, setCoinValue] = useState([]);
    const [coinRank, setCoinRank] = useState([]);

    // --Keeps page from breaking. Will force the page to wait before data is loaded.
    const [isLoading, setLoading] = useState(true);

    // --Generate the data
    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then((response) => {
                let varCoins = response.data;
                // Used to format numbers into currency
                var nf = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' });

                // --Total coins
                setTotalCoins(varCoins.info.coins_num);

                // --Set coin names
                setCoinNames([
                    varCoins.data[0].name,
                    varCoins.data[1].name,
                    varCoins.data[3].name,
                    varCoins.data[2].name,
                    varCoins.data[4].name,
                    varCoins.data[5].name
                ]);

                setCoinPrices([
                    nf.format(varCoins.data[0].price_usd),
                    nf.format(varCoins.data[1].price_usd),
                    nf.format(varCoins.data[3].price_usd),
                    nf.format(varCoins.data[2].price_usd),
                    nf.format(varCoins.data[4].price_usd),
                    nf.format(varCoins.data[5].price_usd)
                ]);

                setCoinPricesUnFormat([
                    varCoins.data[0].price_usd,
                    varCoins.data[1].price_usd,
                    varCoins.data[3].price_usd,
                    varCoins.data[2].price_usd,
                    varCoins.data[4].price_usd,
                    varCoins.data[5].price_usd
                ]);

                setCoinValue([
                    varCoins.data[0].price_btc,
                    varCoins.data[1].price_btc,
                    varCoins.data[3].price_btc,
                    varCoins.data[2].price_btc,
                    varCoins.data[4].price_btc,
                    varCoins.data[5].price_btc
                ]);

                setCoinRank([
                    varCoins.data[0].rank,
                    varCoins.data[1].rank,
                    varCoins.data[3].rank,
                    varCoins.data[2].rank,
                    varCoins.data[4].rank,
                    varCoins.data[5].rank,
                ]);

                setLoading(false);

            })
            .catch((err) => {
                // --Logs whichever error is applicable
                console.log(err);
            })
    }, [])

    if (isLoading === true) {
        return <div style={{ background: '#000C24', height: '1044px', paddingBottom: '150px', display: 'flex', flexDirection: 'column' }}>
            <p style={{ textAlign: 'center', paddingTop: '200px' }} className="Libre Font_Title Bold white"> Loading... </p>
        </div>
    }

    return (
        // Display the data
        <div className="LandingDisplay">

            <div>

                {/* --First of two cards displaying the current two currency leaders */}
                <Card className="crypto_card border-light">

                    <Container>
                        <Row>

                            <Col>
                                <Card.Body style={{ marginTop: '10%' }}>

                                    <Card.Title className="Libre Font_Title Bold">{coinNames[0]}</Card.Title>
                                    <Card.Text className="Mulish Font_Body">USD: {coinPrices[0]}</Card.Text>
                                    <Card.Text className="Mulish Font_Body">In Bitcoin: {coinValue[0]} BTC</Card.Text>
                                    <Card.Text className="Mulish Font_Body">Current Rank: {coinRank[0]}</Card.Text>

                                </Card.Body>
                            </Col>

                            <Col>
                                <div style={{ height: '250px' }}>
                                    <PieChart ChartData={{
                                        labels: [coinNames[0], coinNames[1], coinNames[2]],
                                        datasets: [{
                                            label: 'Price in Bitcoin',
                                            data: [coinValue[0], coinValue[1], coinValue[2]]
                                        }]
                                    }} />
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </Card>

                <Card className="crypto_card border-light">

                    <Container>
                        <Row>

                            <Col>
                                <Card.Body style={{ marginTop: '10%' }}>

                                    <Card.Title className="Libre Font_Title Bold">{coinNames[1]}</Card.Title>
                                    <Card.Text className="Mulish Font_Body">USD: {coinPrices[1]}</Card.Text>
                                    <Card.Text className="Mulish Font_Body">In Bitcoin: {coinValue[1]} BTC</Card.Text>
                                    <Card.Text className="Mulish Font_Body">Current Rank: {coinRank[1]}</Card.Text>

                                </Card.Body>
                            </Col>

                            <Col>
                                <div style={{ height: '250px'}}>
                                    <PieChart ChartData={{
                                        labels: [coinNames[0], coinNames[1], coinNames[2]],
                                        datasets: [{
                                            label: 'Price in USD',
                                            data: [CoinPricesUnFormat[0], CoinPricesUnFormat[1], CoinPricesUnFormat[2]]
                                        }]
                                    }} />
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </Card>

                {/* --Cards 3-4 */}
                <Card className="crypto_card border-light">

                    <Container>
                        <Row>

                            <Col>
                                <Card.Body style={{ marginTop: '10%' }}>

                                    <Card.Title className="Libre Font_Title Bold">{coinNames[2]}</Card.Title>
                                    <Card.Text className="Mulish Font_Body">USD: {coinPrices[2]}</Card.Text>
                                    <Card.Text className="Mulish Font_Body">In Bitcoin: {coinValue[2]} BTC</Card.Text>
                                    <Card.Text className="Mulish Font_Body">Current Rank: {coinRank[2]}</Card.Text>

                                </Card.Body>
                            </Col>

                            <Col>
                                <div style={{ height: '250px' }}>
                                    <PieChart ChartData={{
                                        labels: [coinNames[0], coinNames[1], coinNames[2]],
                                        datasets: [{
                                            label: 'Current Rank',
                                            data: [coinRank[0], coinRank[1], coinRank[2]]
                                        }]
                                    }} />
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </Card>

                <Card className="crypto_card border-light">

                    <Container>
                        <Row>

                            <Col>
                                <Card.Body style={{ marginTop: '10%' }}>

                                    <Card.Title className="Libre Font_Title Bold">{coinNames[3]}</Card.Title>
                                    <Card.Text className="Mulish Font_Body">USD: {coinPrices[3]}</Card.Text>
                                    <Card.Text className="Mulish Font_Body">In Bitcoin: {coinValue[3]} BTC</Card.Text>
                                    <Card.Text className="Mulish Font_Body">Current Rank: {coinRank[3]}</Card.Text>

                                </Card.Body>
                            </Col>

                            <Col>
                                <div style={{ height: '250px' }}>
                                    <PieChart ChartData={{
                                        labels: [coinNames[3], coinNames[4], coinNames[5]],
                                        datasets: [{
                                            label: 'Price in Bitcoin',
                                            data: [coinValue[3], coinValue[4], coinValue[5]]
                                        }]
                                    }} />
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </Card>

                {/* --Cards 5-6 */}
                <Card className="crypto_card border-light">

                    <Container>
                        <Row>

                            <Col>
                                <Card.Body style={{ marginTop: '10%' }}>

                                    <Card.Title className="Libre Font_Title Bold">{coinNames[4]}</Card.Title>
                                    <Card.Text className="Mulish Font_Body">USD: {coinPrices[4]}</Card.Text>
                                    <Card.Text className="Mulish Font_Body">In Bitcoin: {coinValue[4]} BTC</Card.Text>
                                    <Card.Text className="Mulish Font_Body">Current Rank: {coinRank[4]}</Card.Text>

                                </Card.Body>
                            </Col>

                            <Col>
                                <div style={{ height: '250px' }}>
                                    <PieChart ChartData={{
                                        labels: [coinNames[3], coinNames[4], coinNames[5]],
                                        datasets: [{
                                            label: 'Price in USD',
                                            data: [CoinPricesUnFormat[3], CoinPricesUnFormat[4], CoinPricesUnFormat[5]]
                                        }]
                                    }} />
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </Card>

                <Card className="crypto_card border-light">

                    <Container>
                        <Row>

                            <Col>
                                <Card.Body style={{ marginTop: '10%' }}>

                                    <Card.Title className="Libre Font_Title Bold">{coinNames[5]}</Card.Title>
                                    <Card.Text className="Mulish Font_Body">USD: {coinPrices[5]}</Card.Text>
                                    <Card.Text className="Mulish Font_Body">In Bitcoin: {coinValue[5]} BTC</Card.Text>
                                    <Card.Text className="Mulish Font_Body">Current Rank: {coinRank[5]}</Card.Text>

                                </Card.Body>
                            </Col>

                            <Col>
                                <div style={{ height: '250px' }}>
                                    <PieChart ChartData={{
                                        labels: [coinNames[3], coinNames[4], coinNames[5]],
                                        datasets: [{
                                            label: 'Current Rank',
                                            data: [coinRank[3], coinRank[4], coinRank[5]]
                                        }]
                                    }} />
                                </div>
                            </Col>

                        </Row>
                    </Container>

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

        </div >
    )
}

export default Landing;