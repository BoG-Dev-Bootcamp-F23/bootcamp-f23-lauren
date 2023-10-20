import './NavBar.css';
import {useState, useEffect} from 'react';

export default function NavBar(props) {
    const { stations } = props;
    const { data } = props;
    const { givetrain } = props;
    const [filter, setFilter] = useState("");

    useEffect(() => {
        props.setGiveTrain(data?.filter((train) => {
            if (filter.length === 0) {
                return true;
            } else {
                return filter.toUpperCase().includes(train.HEAD_SIGN);
            }
        }));
    }, [filter]);

    return (
        <div className="bar">
            <p className="all" style ={{
                fontWeight: filter.length===0 ? '700' : '400'
            }} onClick={() => {
                if (filter.length !== 0) {
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
                        setFilter(filter + station);
                    }
                }}>{station}</p>
            })}
        </div>
    );

}