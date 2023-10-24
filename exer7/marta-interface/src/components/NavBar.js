import './NavBar.css';
import {useState, useEffect} from 'react';

export default function NavBar(props) {
    const { stations } = props;
    const { filter } = props;

    return (
        <div className="bar">
            <p className="all" style ={{
                fontWeight: filter.length===0 ? '700' : '400'
            }} onClick={() => {
                if (filter.length !== 0) {
                    props.setFilter("");
                } 
            }}>ALL STATIONS</p>
            {stations?.map((station) => {
                return <p className='station' style={{
                    fontWeight: filter.includes(station) ? '700' : '400'
                }} onClick={() => {
                    if (filter.includes(station)) {
                        props.setFilter(filter.replace(station, ""));
                    } else {
                        props.setFilter(filter + station);
                    }
                }}>{station}</p>
            })}
        </div>
    );

}