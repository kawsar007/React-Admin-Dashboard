import React from 'react';
import Chart from '../../Components/chart/Chart';
import FeaturedInfo from '../../Components/featuredInfo/featuredInfo';
import { data } from '../../data';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} grid title="User Analytics" dataKey="Active User"/>
        </div>
    )
}

export default Home;
