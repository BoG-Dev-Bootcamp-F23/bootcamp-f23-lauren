import './NavBar.css';
import {useState} from 'react';

export default function NavBar(props) {
    const { stations } = props;
    const { data } = props;
    const [filter, setFilter] = useState("");

    return (
        <div className="bar">
            <p className="all" onClick={() => {

            }}>ALL STATIONS</p>
            {stations?.map((station) => {
                return <p className='station' style={{
                    fontWeight: filter.includes(station) ? '700' : '400'
                }} onClick={() => {
                    if (filter.includes(station)) {
                        setFilter(filter.replace(station, ""));
                        
                        console.log('unclicked');
                    } else {
                        setFilter(filter + " " + station);
                        console.log('clicked');
                    }
                }}>{station}</p>
            })}
        </div>
    );

}