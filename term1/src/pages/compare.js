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
import { Col, Row, Container } from "react-bootstrap";

// Display data
function Compare() {

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

                let AllCoins = response.data;
                console.log(AllCoins);

                // Used to format numbers, but not currency
                var nf = new Intl.NumberFormat();

                // ----Bar Graph Variables
                var CurrentSupply = [];
                CurrentSupply.push(AllCoins.data[0].csupply);
                CurrentSupply.push(AllCoins.data[1].csupply);
                CurrentSupply.push(AllCoins.data[2].csupply);
                CurrentSupply.push(AllCoins.data[3].csupply);
                CurrentSupply.push(AllCoins.data[4].csupply);

                var CurrentMaxSupply = [];
                CurrentMaxSupply.push(AllCoins.data[0].msupply);
                CurrentMaxSupply.push(AllCoins.data[1].csupply);
                CurrentMaxSupply.push(AllCoins.data[2].csupply);
                CurrentMaxSupply.push(AllCoins.data[3].csupply);
                CurrentMaxSupply.push(AllCoins.data[4].csupply);

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
                        [CurrentNames[2] + ':', nf.format(CurrentSupply[2])],
                        [CurrentNames[3] + ':', nf.format(CurrentSupply[3])],
                        [CurrentNames[4] + ':', nf.format(CurrentSupply[4])]
                    ],
                    datasets: [
                        {
                            label: 'Current Supply',
                            data: CurrentSupply,
                            backgroundColor: '#00BDFF'
                        },
                        {
                            label: 'Current Maximum Supply',
                            data: CurrentMaxSupply,
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

    return (

        <div style={{ backgroundColor: '#000C24' }}>
            <Container>

                <Row>

                    <Col>
                        <div style={{ height: '550px', padding: '25px', alignSelf: 'center', paddingLeft: '100px' }}>
                            <BarChart ChartData={CoinDataBar} />
                        </div>
                    </Col>

                </Row>

                <Row>

                    <Col></Col>
                    <Col>
                        <div style={{ height: '550px', padding: '25px', alignSelf: 'center' }}>
                            <p className="Libre Bold" style={{ color: 'grey' }}>Price in USD</p>
                            <PieChart ChartData={CoinDataPie} />
                        </div>
                    </Col>
                    <Col></Col>

                </Row>

                <Row>

                    <Col></Col>
                    <Col>
                        <div style={{ height: 'auto', width: '750px', padding: '25px', alignSelf: 'center' }}>
                            <RadarChart ChartData={CoinDataRadar} />
                        </div>
                    </Col>
                    <Col></Col>

                </Row>

            </Container>
        </div>

    )
}

export default Compare;