import React from "react";

// Import charts
import LineChart from "../components/TimelineGraph";

// Import API functionality
import axios from "axios";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Import bootstrap elements 
import { Col, Row, Container } from "react-bootstrap";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Display data
function Timeline() {

    const [cryptos, setCryptos] = useState([]);

    const [found1, setFound1] = useState();
    const [found2, setFound2] = useState();
    const [found3, setFound3] = useState();

    // --Line Chart
    const [DataTime, setDataTime] = useState([]);
    const arrDates = [168, 24, 1];

    // --Keeps page from breaking. Will force the page to wait before data is loaded.
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then((response) => {

                setCryptos(response.data.data);

                let AllCoins = response.data;
                console.log(AllCoins);

                // ----Get data
                let arrPriceChange = [[AllCoins.data[0].percent_change_7d, AllCoins.data[0].percent_change_24h, AllCoins.data[0].percent_change_1h]];
                arrPriceChange.push([AllCoins.data[1].percent_change_7d, AllCoins.data[1].percent_change_24h, AllCoins.data[1].percent_change_1h]);
                arrPriceChange.push([AllCoins.data[2].percent_change_7d, AllCoins.data[2].percent_change_24h, AllCoins.data[2].percent_change_1h]);

                // ----Bar Graph
                setDataTime({
                    labels: [
                        [arrDates[0] + ' hours (7 days)'],
                        [arrDates[1] + ' hours'],
                        [arrDates[2] + ' hour']
                    ],
                    datasets: [
                        {
                            label: 'Bitcoin',
                            data: arrPriceChange[0],
                            backgroundColor: 'rgba(0, 189, 255, 1)',
                            borderColor: 'rgba(0, 189, 255, 0.25)'
                        },
                        {
                            label: 'Ethereum',
                            data: arrPriceChange[1],
                            backgroundColor: 'rgba(219, 47, 21, 1)',
                            borderColor: 'rgba(219, 47, 21, 0.25)'
                        },
                        {
                            label: 'Tether',
                            data: arrPriceChange[2],
                            backgroundColor: 'rgba(220, 165, 63, 1)',
                            borderColor: 'rgba(220, 165, 63, 0.25)'
                        }
                    ]
                });

                setFound1(AllCoins.data[0]);
                setFound2(AllCoins.data[1]);
                setFound3(AllCoins.data[3]);

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

        <div style={{ backgroundColor: '#000C24', height: '940px' }}>
            <Container>

                <Row>

                    <Col>

                        <br></br>

                        <h1 className="Libre Font_Title Bold" style={{ color: 'gainsboro' }}> Price change in percentages </h1>

                        <select style={{ marginRight: '50px' }} onChange={(a) => {
                            let Coinrank = a.target.value - 1;

                            const Found = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                            setFound1(Found);

                            axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                let AllCoins = response.data;

                                setDataTime({
                                    labels: [
                                        [arrDates[0] + ' hours (7 days)'],
                                        [arrDates[1] + ' hours'],
                                        [arrDates[2] + ' hour']
                                    ],
                                    datasets: [
                                        {
                                            label: Found.name,
                                            data: [Found.percent_change_7d, Found.percent_change_24h, Found.percent_change_1h],
                                            backgroundColor: 'rgba(0, 189, 255, 1)',
                                            borderColor: 'rgba(0, 189, 255, 0.25)'
                                        },
                                        {
                                            label: found2.name,
                                            data: [found2.percent_change_7d, found2.percent_change_24h, found2.percent_change_1h],
                                            backgroundColor: 'rgba(219, 47, 21, 1)',
                                            borderColor: 'rgba(219, 47, 21, 0.25)'
                                        },
                                        {
                                            label: found3.name,
                                            data: [found3.percent_change_7d, found3.percent_change_24h, found3.percent_change_1h],
                                            backgroundColor: 'rgba(220, 165, 63, 1)',
                                            borderColor: 'rgba(220, 165, 63, 0.25)'
                                        }
                                    ]
                                });
                            })

                        }}>

                            {Array.isArray(cryptos)
                                ? cryptos.map((crypto) => {
                                    return <option key={crypto.id} value={crypto.rank}>{crypto.name}</option>;
                                })
                                : null}

                        </select>

                        <select style={{ marginRight: '50px' }} onChange={(a) => {
                            let Coinrank = a.target.value - 1;

                            const Found = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                            setFound2(Found);

                            axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                let AllCoins = response.data;

                                setDataTime({
                                    labels: [
                                        [arrDates[0] + ' hours (7 days)'],
                                        [arrDates[1] + ' hours'],
                                        [arrDates[2] + ' hour']
                                    ],
                                    datasets: [
                                        {
                                            label: found1.name,
                                            data: [found1.percent_change_7d, found1.percent_change_24h, found1.percent_change_1h],
                                            backgroundColor: 'rgba(0, 189, 255, 1)',
                                            borderColor: 'rgba(0, 189, 255, 0.25)'
                                        },
                                        {
                                            label: Found.name,
                                            data: [Found.percent_change_7d, Found.percent_change_24h, Found.percent_change_1h],
                                            backgroundColor: 'rgba(219, 47, 21, 1)',
                                            borderColor: 'rgba(219, 47, 21, 0.25)'
                                        },
                                        {
                                            label: found3.name,
                                            data: [found3.percent_change_7d, found3.percent_change_24h, found3.percent_change_1h],
                                            backgroundColor: 'rgba(220, 165, 63, 1)',
                                            borderColor: 'rgba(220, 165, 63, 0.25)'
                                        }
                                    ]
                                });
                            })

                        }}>

                            {Array.isArray(cryptos)
                                ? cryptos.map((crypto) => {
                                    return <option key={crypto.id} value={crypto.rank}>{crypto.name}</option>;
                                })
                                : null}

                        </select>

                        <select onChange={(a) => {
                            let Coinrank = a.target.value - 1;

                            const Found = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                            setFound3(Found);

                            axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                let AllCoins = response.data;

                                setDataTime({
                                    labels: [
                                        [arrDates[0] + ' hours (7 days)'],
                                        [arrDates[1] + ' hours'],
                                        [arrDates[2] + ' hour']
                                    ],
                                    datasets: [
                                        {
                                            label: found1.name,
                                            data: [found1.percent_change_7d, found1.percent_change_24h, found1.percent_change_1h],
                                            backgroundColor: 'rgba(0, 189, 255, 1)',
                                            borderColor: 'rgba(0, 189, 255, 0.25)'
                                        },
                                        {
                                            label: Found.name,
                                            data: [Found.percent_change_7d, Found.percent_change_24h, Found.percent_change_1h],
                                            backgroundColor: 'rgba(219, 47, 21, 1)',
                                            borderColor: 'rgba(219, 47, 21, 0.25)'
                                        },
                                        {
                                            label: Found.name,
                                            data: [Found.percent_change_7d, Found.percent_change_24h, Found.percent_change_1h],
                                            backgroundColor: 'rgba(220, 165, 63, 1)',
                                            borderColor: 'rgba(220, 165, 63, 0.25)'
                                        }
                                    ]
                                });
                            })

                        }}>

                            {Array.isArray(cryptos)
                                ? cryptos.map((crypto) => {
                                    return <option key={crypto.id} value={crypto.rank}>{crypto.name}</option>;
                                })
                                : null}

                        </select>

                        <div style={{ height: '600px', padding: '25px', alignSelf: 'center', paddingLeft: '100px' }}>
                            <LineChart ChartData={DataTime} />
                        </div>

                    </Col>

                </Row>

                <Row style={{ marginTop: '50px' }}>

                    <p className="Mulish Font_Body white">
                        This timeline compares the vale of three different cryptocurrencies within the last 1 hour, 1 day, and 7 days.
                    </p>

                </Row>

            </Container>

        </div>

    )
}

export default Timeline;