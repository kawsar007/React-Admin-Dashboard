import React from 'react';
import './SectionLg.css';

const SectionLg = () => {
    const Button = ({ type }) => {
        return <button className={"sectionLgButton " + type }>{type}</button>;
    }
    return (
        <div className="sectionLg">
            <h2 className="sectionLgTitle">Latest Transections</h2>
            <table className="sectionLgTable">
                <tr className="sectionLgTr">
                    <th className="sectionLgTh">Customer</th>
                    <th className="sectionLgTh">Date</th>
                    <th className="sectionLgTh">Amount</th>
                    <th className="sectionLgTh">Status</th>
                </tr>
                <tr className="sectionLgTh">
                    <td className="sectionLgUser">
                        <img src="images/kawsar.jpg" alt="" className="sectionLgImg"/>
                        <span className="sectionLgName">Susan Carol</span>
                    </td>
                    <td className="sectionLgDate">1 Feb 2021</td>
                    <td className="sectionLgAmount">$202.00</td>
                    <td className="sectionLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="sectionLgTr">
                    <td className="sectionLgUser">
                        <img src="images/kawsar.jpg" alt="" className="sectionLgImg"/>
                        <span className="sectionLgName">Susan Carol</span>
                    </td>
                    <td className="sectionLgDate">1 Feb 2021</td>
                    <td className="sectionLgAmount">$202.00</td>
                    <td className="sectionLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="sectionLgTr">
                    <td className="sectionLgUser">
                        <img src="images/kawsar.jpg" alt="" className="sectionLgImg"/>
                        <span className="sectionLgName">Susan Carol</span>
                    </td>
                    <td className="sectionLgDate">1 Feb 2021</td>
                    <td className="sectionLgAmount">$202.00</td>
                    <td className="sectionLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="sectionLgTr">
                    <td className="sectionLgUser">
                        <img src="images/kawsar.jpg" alt="" className="sectionLgImg"/>
                        <span className="sectionLgName">Susan Carol</span>
                    </td>
                    <td className="sectionLgDate">1 Feb 2021</td>
                    <td className="sectionLgAmount">$202.00</td>
                    <td className="sectionLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="sectionLgTr">
                    <td className="sectionLgUser">
                        <img src="images/kawsar.jpg" alt="" className="sectionLgImg"/>
                        <span className="sectionLgName">Susan Carol</span>
                    </td>
                    <td className="sectionLgDate">1 Feb 2021</td>
                    <td className="sectionLgAmount">$202.00</td>
                    <td className="sectionLgStatus"><Button type="Pending"/></td>
                </tr>
            </table>
        </div>
    )
}

export default SectionLg;
