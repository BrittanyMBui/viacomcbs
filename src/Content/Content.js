import React, { useState, useEffect } from 'react';
import FlowerCard from './FlowerCard';

const Content = () => {
    const [state, setState] = useState('');

    useEffect(() => {
        const url = 'https://dtcqvoap3l.execute-api.us-west-1.amazonaws.com/default/interviewTakeHomeApi'

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

        return (
            <div className="content">
                <h1>Flowers</h1>
                <FlowerCard />
            </div>
        )
}

export default Content;