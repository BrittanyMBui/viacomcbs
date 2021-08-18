import React, { useState, useEffect } from 'react';
import FlowerCard from './FlowerCard';

const Content = () => {
    const [flowers, setFlowers] = useState('');

    useEffect(() => {
        const url = 'https://dtcqvoap3l.execute-api.us-west-1.amazonaws.com/default/interviewTakeHomeApi'

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setFlowers(data);
            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

        return (
            <div className="content">
                <h1>Flowers</h1>
                {flowers.map(flower =>
                    <FlowerCard key={flower.id} flower={flower} />)}
            </div>
        )
}

export default Content;