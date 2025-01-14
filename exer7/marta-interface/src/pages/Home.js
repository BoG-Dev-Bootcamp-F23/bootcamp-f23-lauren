import './Home.css';
import map from './images/marta-map.jpg';
import about from './images/about.png';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div className="top-bar">
                <h1 className="marta">MARTA</h1>
                <img className="about" src={about} onClick={() => {
                    navigate('/about');
                }}></img>
            </div>
            <div className="bottom-home">
                <div className="schedules">
                    <h2 className="view">Train Schedules</h2>
                    <p className="line-element" onClick={() => {
                        props.setCurrColor('GOLD');
                        navigate('/schedules');
                    }}>GOLD LINE</p>
                    <p className="line-element" onClick={() => {
                        props.setCurrColor('RED');
                        navigate('/schedules');
                    }}>RED LINE</p>
                    <p className="line-element" onClick={() => {
                        props.setCurrColor('BLUE');
                        navigate('/schedules');
                    }}>BLUE LINE</p>
                    <p className="line-element" onClick={() => {
                        props.setCurrColor('GREEN');
                        navigate('/schedules');
                    }}>GREEN LINE</p>
                </div>
                <div>
                    <img className="map" src={map}></img>
                </div>
            </div>
        </div>
    );
}