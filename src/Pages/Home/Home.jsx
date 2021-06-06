import React from 'react';
import Chart from '../../Components/chart/Chart';
import FeaturedInfo from '../../Components/featuredInfo/featuredInfo';
import SectionLg from '../../Components/section/sectionLg/SectionLg';
import SectionSm from '../../Components/section/sectionSm/SectionSm';
import { data, newJoinMember } from '../../data';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} grid title="User Analytics" dataKey="Active User"/>
            <div className="Section">
                <SectionSm newUser={newJoinMember}/>
                <SectionLg/>
            </div>
        </div>
    )
}

export default Home;
