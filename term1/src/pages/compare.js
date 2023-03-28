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
function Compare() {

    // Populating Selects
    const [cryptos, setCryptos] = useState([]);

    // --Bar Chart found
    const [found1, setFound1] = useState();
    const [found2, setFound2] = useState();
    const [found3, setFound3] = useState();

    // --Pie Graph found
    const [found1p, setFound1p] = useState();
    const [found2p, setFound2p] = useState();
    const [found3p, setFound3p] = useState();

    // --Radar Graph found
    const [found1r, setFound1r] = useState();
    const [found2r, setFound2r] = useState();
    const [found3r, setFound3r] = useState();

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
                CurrentPriceUSD.push(AllCoins.data[3].price_usd);

                setFound1p(AllCoins.data[0]);
                setFound2p(AllCoins.data[1]);
                setFound3p(AllCoins.data[3]);

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

                var CurrentStatsBi = [];
                CurrentStatsBi.push(AllCoins.data[3].volume24 / 1000);
                CurrentStatsBi.push(AllCoins.data[3].volume24a / 1000);
                CurrentStatsBi.push(AllCoins.data[3].csupply);
                CurrentStatsBi.push(AllCoins.data[3].tsupply);
                CurrentStatsBi.push(AllCoins.data[3].msupply);

                var StatNames = [];
                StatNames.push('Volume 24 per 1000');
                StatNames.push('Volume 24a per 1000');
                StatNames.push('Current Supply');
                StatNames.push('Total Supply');
                StatNames.push('Maximum Supply');

                setFound1r(AllCoins.data[0]);
                setFound2r(AllCoins.data[1]);
                setFound3r(AllCoins.data[3]);

                // ----Universal Chart Variables
                var CurrentNames = [];
                CurrentNames.push(AllCoins.data[0].name);
                CurrentNames.push(AllCoins.data[1].name);
                CurrentNames.push(AllCoins.data[3].name);
                CurrentNames.push(AllCoins.data[2].name);
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
                    labels: [CurrentNames[0], CurrentNames[1], CurrentNames[2]],
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
                        },
                        {
                            label: CurrentNames[2] + ' Average Statistics',
                            data: CurrentStatsBi,
                            backgroundColor: 'rgba(220, 165, 63, 0.2)',
                            borderColor: 'rgba(220, 165, 63, 0.75)'
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

        <div style={{ backgroundColor: '#000C24', paddingTop: '50px' }}>

            <Container style={{ maxWidth: '90%' }}>
                <Row>

                    <Col>
                        <Card className="graph_card border-light">
                            <Container>
                                <Row>

                                    <Card.Title>

                                        <select style={{ marginRight: '50px' }} onChange={(a) => {
                                            let Coinrank = a.target.value - 1;

                                            const Found = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                                            setFound1(Found);

                                            axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                                let AllCoins = response.data;

                                                // Used to format numbers, but not currency
                                                var nf = new Intl.NumberFormat();

                                                setCoinDataBar({
                                                    labels: [
                                                        [Found.name + ':', nf.format(Found.csupply)],
                                                        [found2.name + ':', nf.format(found2.csupply)],
                                                        [found3.name + ':', nf.format(found3.csupply)]
                                                    ],
                                                    datasets: [
                                                        {
                                                            label: 'Current Supply',
                                                            data: [Found.csupply, found2.csupply, found3.csupply],
                                                            backgroundColor: '#00BDFF'
                                                        },
                                                        {
                                                            label: 'Current Maximum Supply',
                                                            data: [Found.msupply, found2.msupply, found3.msupply],
                                                            backgroundColor: '#db2f15'
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

                                                // Used to format numbers, but not currency
                                                var nf = new Intl.NumberFormat();

                                                setCoinDataBar({
                                                    labels: [
                                                        [found1.name + ':', nf.format(found1.csupply)],
                                                        [Found.name + ':', nf.format(Found.csupply)],
                                                        [found3.name + ':', nf.format(found3.csupply)]
                                                    ],
                                                    datasets: [
                                                        {
                                                            label: 'Current Supply',
                                                            data: [found1.csupply, Found.csupply, found3.csupply],
                                                            backgroundColor: '#00BDFF'
                                                        },
                                                        {
                                                            label: 'Current Maximum Supply',
                                                            data: [found1.msupply, Found.msupply, found3.msupply],
                                                            backgroundColor: '#db2f15'
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

                                                // Used to format numbers, but not currency
                                                var nf = new Intl.NumberFormat();

                                                setCoinDataBar({
                                                    labels: [
                                                        [found1.name + ':', nf.format(found1.csupply)],
                                                        [found2.name + ':', nf.format(found2.csupply)],
                                                        [Found.name + ':', nf.format(Found.csupply)]
                                                    ],
                                                    datasets: [
                                                        {
                                                            label: 'Current Supply',
                                                            data: [found1.csupply, found2.csupply, Found.csupply],
                                                            backgroundColor: '#00BDFF'
                                                        },
                                                        {
                                                            label: 'Current Maximum Supply',
                                                            data: [found1.msupply, found2.msupply, Found.msupply],
                                                            backgroundColor: '#db2f15'
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

                                        <select style={{ marginRight: '50px' }} onChange={(a) => {
                                            let Coinrank = a.target.value - 1;

                                            const Foundp = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                                            setFound1(Foundp);

                                            axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                                let AllCoins = response.data;

                                                setCoinDataPie({
                                                    labels: [Foundp.name, found2p.name, found3p.name],
                                                    datasets: [{
                                                        label: 'Current Price in USD',
                                                        data: [Foundp.price_usd, found2p.price_usd, found3p.price_usd]
                                                    }]
                                                })
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

                                            const Foundp = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                                            setFound2(Foundp);

                                            axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                                let AllCoins = response.data;

                                                setCoinDataPie({
                                                    labels: [found1p.name, Foundp.name, found3p.name],
                                                    datasets: [{
                                                        label: 'Current Price in USD',
                                                        data: [found1p.price_usd, Foundp.price_usd, found3p.price_usd]
                                                    }]
                                                })
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

                                            const Foundp = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                                            setFound3(Foundp);

                                            axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                                let AllCoins = response.data;

                                                setCoinDataPie({
                                                    labels: [found1p.name, found2p.name, Foundp.name],
                                                    datasets: [{
                                                        label: 'Current Price in USD',
                                                        data: [found1p.price_usd, found2p.price_usd, Foundp.price_usd]
                                                    }]
                                                })
                                            })

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

                                    <select style={{ marginRight: '50px' }} onChange={(a) => {
                                        let Coinrank = a.target.value - 1;

                                        const Foundr = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                                        setFound1r(Foundr);

                                        axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                            let AllCoins = response.data;

                                            setCoinDataRadar({
                                                labels: ['Volume 24 per 1000', 'Volume 24a per 1000', 'Current Supply', 'Total Supply', 'Maximum Supply'],
                                                datasets: [
                                                    {
                                                        label: Foundr.name + ' Average Statistics',
                                                        data: [Foundr.volume24 / 1000, Foundr.volume24a / 1000, Foundr.csupply, Foundr.tsupply, Foundr.msupply],
                                                        backgroundColor: 'rgba(193, 66, 37, 0.2)',
                                                        borderColor: 'rgba(193, 66, 37, 0.75)'
                                                    },
                                                    {
                                                        label: found2r.name + ' Average Statistics',
                                                        data: [found2r.volume24 / 1000, found2r.volume24a / 1000, found2r.csupply, found2r.tsupply, found2r.msupply],
                                                        backgroundColor: 'rgba(37, 166, 183, 0.2)',
                                                        borderColor: 'rgba(37, 166, 183, 0.75)'
                                                    },
                                                    {
                                                        label: found3r.name + ' Average Statistics',
                                                        data: [found3r.volume24 / 1000, found3r.volume24a / 1000, found3r.csupply, found3r.tsupply, found3r.msupply],
                                                        backgroundColor: 'rgba(220, 165, 63, 0.2)',
                                                        borderColor: 'rgba(220, 165, 63, 0.75)'
                                                    }

                                                ]
                                            })
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

                                        const Foundr = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                                        setFound2r(Foundr);

                                        axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                            let AllCoins = response.data;

                                            setCoinDataRadar({
                                                labels: ['Volume 24 per 1000', 'Volume 24a per 1000', 'Current Supply', 'Total Supply', 'Maximum Supply'],
                                                datasets: [
                                                    {
                                                        label: found1r.name + ' Average Statistics',
                                                        data: [found1r.volume24 / 1000, found1r.volume24a / 1000, found1r.csupply, found1r.tsupply, found1r.msupply],
                                                        backgroundColor: 'rgba(193, 66, 37, 0.2)',
                                                        borderColor: 'rgba(193, 66, 37, 0.75)'
                                                    },
                                                    {
                                                        label: Foundr.name + ' Average Statistics',
                                                        data: [Foundr.volume24 / 1000, Foundr.volume24a / 1000, Foundr.csupply, Foundr.tsupply, Foundr.msupply],
                                                        backgroundColor: 'rgba(37, 166, 183, 0.2)',
                                                        borderColor: 'rgba(37, 166, 183, 0.75)'
                                                    },
                                                    {
                                                        label: found3r.name + ' Average Statistics',
                                                        data: [found3r.volume24 / 1000, found3r.volume24a / 1000, found3r.csupply, found3r.tsupply, found3r.msupply],
                                                        backgroundColor: 'rgba(220, 165, 63, 0.2)',
                                                        borderColor: 'rgba(220, 165, 63, 0.75)'
                                                    }

                                                ]
                                            })
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

                                        const Foundr = cryptos.find(obj => { return obj.rank === (Coinrank + 1) })

                                        setFound3r(Foundr);

                                        axios.get('https://api.coinlore.net/api/tickers/').then((response) => {

                                            let AllCoins = response.data;

                                            setCoinDataRadar({
                                                labels: ['Volume 24 per 1000', 'Volume 24a per 1000', 'Current Supply', 'Total Supply', 'Maximum Supply'],
                                                datasets: [
                                                    {
                                                        label: found1r.name + ' Average Statistics',
                                                        data: [found1r.volume24 / 1000, found1r.volume24a / 1000, found1r.csupply, found1r.tsupply, found1r.msupply],
                                                        backgroundColor: 'rgba(193, 66, 37, 0.2)',
                                                        borderColor: 'rgba(193, 66, 37, 0.75)'
                                                    },
                                                    {
                                                        label: found2r.name + ' Average Statistics',
                                                        data: [found2r.volume24 / 1000, found2r.volume24a / 1000, found2r.csupply, found2r.tsupply, found2r.msupply],
                                                        backgroundColor: 'rgba(37, 166, 183, 0.2)',
                                                        borderColor: 'rgba(37, 166, 183, 0.75)'
                                                    },
                                                    {
                                                        label: Foundr.name + ' Average Statistics',
                                                        data: [Foundr.volume24 / 1000, Foundr.volume24a / 1000, Foundr.csupply, Foundr.tsupply, Foundr.msupply],
                                                        backgroundColor: 'rgba(220, 165, 63, 0.2)',
                                                        borderColor: 'rgba(220, 165, 63, 0.75)'
                                                    }

                                                ]
                                            })
                                        })

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