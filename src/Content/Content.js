import React, { useState, useEffect } from 'react';
import FlowerCard from './FlowerCard';

const Content = () => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        const url = 'https://dtcqvoap3l.execute-api.us-west-1.amazonaws.com/default/interviewTakeHomeApi'

        const fetchData = async() => {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setFlowers(data);
        }

        fetchData();
    }, []);

    const listFlowers = flowers.map(flower => {
        return <FlowerCard flower={flower} key={flower.id} />
    })

        return (
            <div className="content">
                <h1>Flowers</h1>
                { flowers && listFlowers }
            </div>
        )
}

export default Content;