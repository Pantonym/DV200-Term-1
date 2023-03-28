// Import React functionality
import React from "react";

// Import charts
import BarChart from '../components/BarGraph';
import PieChart from "../components/PieGraph";
import RadarChart from "../components/RadarChart";

// Import API functionality
import axios from "axios";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Import bootstrap elements 
import { Col, Row, Container, Card } from "react-bootstrap";

// Display data
function Compare() {

    const [cryptos, setCryptos] = useState([]);

    const [found1, setFound1] = useState({});
    const [found2, setFound2] = useState({});
    const [found3, setFound3] = useState({});

    // --Bar Chart
    const [CoinDataBar, setCoinDataBar] = useState([]);

    // --Pie Chart
    const [CoinDataPie, setCoinDataPie] = useState([]);

    // --Radar Chart
    const [CoinDataRadar, setCoinDataRadar] = useState([]);

    // --Keeps page from breaking. Will force the page to wait before data is loaded.
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then((response) => {

                setCryptos(response.data.data);
                let AllCoins = response.data;
                console.log(AllCoins);

                // Used to format numbers, but not currency
                var nf = new Intl.NumberFormat();

                // ----Bar Graph Variables
                var CurrentSupply = [];
                CurrentSupply.push(AllCoins.data[0].csupply);
                CurrentSupply.push(AllCoins.data[1].csupply);
                CurrentSupply.push(AllCoins.data[3].csupply);

                var CurrentMaxSupply = [];
                CurrentMaxSupply.push(AllCoins.data[0].msupply);
                CurrentMaxSupply.push(AllCoins.data[1].msupply);
                CurrentMaxSupply.push(AllCoins.data[3].msupply);

                setFound1(AllCoins.data[0]);
                setFound2(AllCoins.data[1]);
                setFound3(AllCoins.data[3]);

                // ----Pie Chart Chart Variables
                var CurrentPriceUSD = [];
                CurrentPriceUSD.push(AllCoins.data[0].price_usd);
                CurrentPriceUSD.push(AllCoins.data[1].price_usd);
                CurrentPriceUSD.push(AllCoins.data[2].price_usd);
                CurrentPriceUSD.push(AllCoins.data[3].price_usd);
                CurrentPriceUSD.push(AllCoins.data[4].price_usd);

                // ----Radar Chart Variables
                var CurrentStatsBit = [];
                CurrentStatsBit.push(AllCoins.data[0].volume24 / 1000);
                CurrentStatsBit.push(AllCoins.data[0].volume24a / 1000);
                CurrentStatsBit.push(AllCoins.data[0].csupply);
                CurrentStatsBit.push(AllCoins.data[0].tsupply);
                CurrentStatsBit.push(AllCoins.data[0].msupply);

                var CurrentStatsEth = [];
                CurrentStatsEth.push(AllCoins.data[1].volume24 / 1000);
                CurrentStatsEth.push(AllCoins.data[1].volume24a / 1000);
                CurrentStatsEth.push(AllCoins.data[1].csupply);
                CurrentStatsEth.push(AllCoins.data[1].tsupply);
                CurrentStatsEth.push(AllCoins.data[1].msupply);

                var StatNames = [];
                StatNames.push('Volume 24 per 1000');
                StatNames.push('Volume 24a per 1000');
                StatNames.push('Current Supply');
                StatNames.push('Total Supply');
                StatNames.push('Maximum Supply');

                // ----Universal Chart Variables
                var CurrentNames = [];
                CurrentNames.push(AllCoins.data[0].name);
                CurrentNames.push(AllCoins.data[1].name);
                CurrentNames.push(AllCoins.data[2].name);
                CurrentNames.push(AllCoins.data[3].name);
                CurrentNames.push(AllCoins.data[4].name);

                // ----Bar Graph
                setCoinDataBar({
                    labels: [
                        [CurrentNames[0] + ':', nf.format(CurrentSupply[0])],
                        [CurrentNames[1] + ':', nf.format(CurrentSupply[1])],
                        [CurrentNames[2] + ':', nf.format(CurrentSupply[2])]
                    ],
                    datasets: [
                        {
                            label: 'Current Supply',
                            data: [CurrentSupply[0], CurrentSupply[1], CurrentSupply[2]],
                            backgroundColor: '#00BDFF'
                        },
                        {
                            label: 'Current Maximum Supply',
                            data: [CurrentMaxSupply[0], CurrentMaxSupply[1], CurrentMaxSupply[2]],
                            backgroundColor: '#db2f15'
                        }
                    ]
                });

                // ----Pie Chart
                setCoinDataPie({
                    labels: CurrentNames,
                    datasets: [{
                        label: 'Current Price in USD',
                        data: CurrentPriceUSD
                    }]
                })

                // ----Radar Chart
                setCoinDataRadar({
                    labels: StatNames,
                    datasets: [
                        {
                            label: CurrentNames[0] + ' Average Statistics',
                            data: CurrentStatsBit,
                            backgroundColor: 'rgba(193, 66, 37, 0.2)',
                            borderColor: 'rgba(193, 66, 37, 0.75)'
                        },
                        {
                            label: CurrentNames[1] + ' Average Statistics',
                            data: CurrentStatsEth,
                            backgroundColor: 'rgba(37, 166, 183, 0.2)',
                            borderColor: 'rgba(37, 166, 183, 0.75)'
                        }
                    ]
                })

                setLoading(false);

            })
            .catch((err) => {
                // --Logs whichever error is applicable
                console.log(err);
            })
    }, [])

    if (isLoading === true) {
        return <div style={{ background: '#000C24', height: '1044px', paddingBottom: '150px', display: 'flex', flexDirection: 'column' }}>
            <p style={{ textAlign: 'center', paddingTop: '200px' }} className="Libre Font_Title Bold white"> Loading Charts... </p>
        </div>
    }

    // function to redraw the bar with the new values
    const RedrawBar = (found1, found2, found3) => {

        // Used to format numbers, but not currency
        var nf = new Intl.NumberFormat();

        console.log(found1.csupply);
        console.log(found2);
        console.log(found3);

        setCoinDataBar({
            labels: [
                [found1.name + ':', nf.format(found1.csupply)],
                [found2.name + ':', nf.format(found2.csupply)],
                [found3.name + ':', nf.format(found3.csupply)]
            ],
            datasets: [
                {
                    label: 'Current Supply',
                    data: [nf.format(found1.csupply), nf.format(found2.csupply), nf.format(found3.csupply)],
                    backgroundColor: '#00BDFF'
                },
                {
                    label: 'Current Maximum Supply',
                    data: [nf.format(found1.msupply), nf.format(found2.msupply), nf.format(found3.msupply)],
                    backgroundColor: '#db2f15'
                }
            ]
        });

    }

    return (

        <div style={{ backgroundColor: '#000C24', paddingTop: '50px' }}>

            <Container style={{ maxWidth: '90%' }}>
                <Row>

                    <Col>
                        <Card className="graph_card border-light">
                            <Container>
                                <Row>

                                    <Card.Title>

                                        <select onChange={(a) => {
                                            let Coinrank = a.target.value - 1;
                                            console.log(Coinrank);

                                            const Found = cryptos.find(obj => {
                                                return obj.rank === (Coinrank + 1)
                                            })

                                            console.log(Found);
                                            setFound1(Found);

                                            RedrawBar(Found, found2, found3);

                                        }}>

                                            {Array.isArray(cryptos)
                                                ? cryptos.map((crypto) => {
                                                    return <option key={crypto.id} value={crypto.rank}>{crypto.name}</option>;
                                                })
                                                : null}

                                        </select>

                                        <br></br>

                                        Current Supply vs Maximum Supply
                                    </Card.Title>

                                    <Card.Body>

                                        <div style={{ height: '350px', padding: '25px', alignSelf: 'center', paddingLeft: '100px' }}>
                                            <BarChart ChartData={CoinDataBar} />
                                        </div>

                                    </Card.Body>

                                </Row>
                            </Container>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="graph_card border-light">
                            <Container>
                                <Row>

                                    <Card.Title>

                                        <select onChange={(a) => {
                                            let Coinrank = a.target.value - 1;
                                            console.log(Coinrank);

                                            const Found = cryptos.find(obj => {
                                                return obj.rank === (Coinrank + 1)
                                            })

                                            console.log(Found);
                                            setFound1(Found);

                                            RedrawBar(Found, found2, found3);

                                        }}>

                                            {Array.isArray(cryptos)
                                                ? cryptos.map((crypto) => {
                                                    return <option key={crypto.id} value={crypto.rank}>{crypto.name}</option>;
                                                })
                                                : null}

                                        </select>

                                        <br></br>

                                        Current Supply vs Maximum Supply
                                    </Card.Title>

                                    <Card.Body>

                                        <div style={{ height: '350px', padding: '25px', alignSelf: 'center', paddingLeft: '30%' }}>
                                            <PieChart ChartData={CoinDataPie} />
                                        </div>

                                    </Card.Body>

                                </Row>
                            </Container>
                        </Card>
                    </Col>

                </Row>

                <Row style={{ width: '100%', display: 'inline' }}>

                    <Card className="graph_card border-light" style={{ maxWidth: '90%' }}>
                        <Container>
                            <Row>

                                <Card.Title>

                                    <select onChange={(a) => {
                                        let Coinrank = a.target.value - 1;
                                        console.log(Coinrank);

                                        const Found = cryptos.find(obj => {
                                            return obj.rank === (Coinrank + 1)
                                        })

                                        console.log(Found);
                                        setFound1(Found);

                                        RedrawBar(Found, found2, found3);

                                    }}>

                                        {Array.isArray(cryptos)
                                            ? cryptos.map((crypto) => {
                                                return <option key={crypto.id} value={crypto.rank}>{crypto.name}</option>;
                                            })
                                            : null}

                                    </select>

                                    <br></br>

                                    Current Supply vs Maximum Supply
                                </Card.Title>

                                <Card.Body>

                                    <div style={{ float: 'left', height: 'auto', width: '500px', paddingTop: '25px', alignSelf: 'center', paddingBottom: '0px' }}>
                                        <RadarChart ChartData={CoinDataRadar} />
                                    </div>

                                    <p className="Mulish Font_Body" style={{ width: '500px', float: 'left', marginLeft: '20%' }}>
                                        <br></br>
                                        This data analyses the amount of coins traded within the last 24 hours within both the primary
                                        and secondary market.
                                        <br></br>
                                        <br></br>
                                        It also compares the current supply, the amount of coins currently being bought and sold, with the
                                        total supply, which is the current supply as well as any coins that have been lost.
                                        <br></br>
                                        <br></br>
                                        Finally, it also compares the maximum supply that is allowed to be in circulation. For example, 
                                        Bitcoin has a maximum supply of 21, 000. Once its current amount hits that maximum, no other coins
                                        can be mined. Some coins, such as Ethereum, do not have a maximum yet.
                                    </p>

                                </Card.Body>

                            </Row>
                        </Container>
                    </Card>

                </Row>
            </Container>
        </div >

    )
}

export default Compare;