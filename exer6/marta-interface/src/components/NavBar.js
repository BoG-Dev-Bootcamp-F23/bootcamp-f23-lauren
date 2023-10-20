import './NavBar.css';
import {useState} from 'react';

export default function NavBar(props) {
    const { stations } = props;
    const { data } = props;
    const [selected, setSelected] = useState(true);
    const [filter, setFilter] = useState("");

    return (
        <div className="bar">
            <p className="all" style ={{
                fontWeight: selected ? '700' : '400'
            }} onClick={() => {
                if (!selected) {
                    setSelected(true);
                    setFilter("");
                } 
            }}>ALL STATIONS</p>
            {stations?.map((station) => {
                return <p className='station' style={{
                    fontWeight: filter.includes(station) ? '700' : '400'
                }} onClick={() => {
                    if (filter.includes(station)) {
                        setFilter(filter.replace(station, ""));
                    } else {
                        setFilter(filter + " " + station);
                    }
                    setSelected(false);
                }}>{station}</p>
            })}
        </div>
    );

}