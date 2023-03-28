import React from "react";

// Import charts
import LineChart from "../components/TimelineGraph";

// Import API functionality
import axios from "axios";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Import bootstrap elements 
import { Col, Row, Container } from "react-bootstrap";

// Display data
function Timeline() {

    // --Line Chart
    const [DataTime, setDataTime] = useState([]);
    const arrDates = [168, 24, 1];

    // --Keeps page from breaking. Will force the page to wait before data is loaded.
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then((response) => {

                let AllCoins = response.data;
                console.log(AllCoins);

                // ----Get data
                let arrPriceChange = [[AllCoins.data[0].percent_change_24h, AllCoins.data[0].percent_change_1h, AllCoins.data[0].percent_change_7d]];
                arrPriceChange.push([AllCoins.data[1].percent_change_24h, AllCoins.data[1].percent_change_1h, AllCoins.data[1].percent_change_7d]);

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
                        }
                    ]
                });

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

                        <br></br>

                        <h1 className="Libre Font_Title Bold" style={{ color: 'gainsboro' }}> Price change in percentages </h1>

                        <div style={{ height: '600px', padding: '25px', alignSelf: 'center', paddingLeft: '100px' }}>
                            <LineChart ChartData={DataTime} />
                        </div>
                    </Col>

                </Row>

            </Container>

        </div>

    )
}

export default Timeline;