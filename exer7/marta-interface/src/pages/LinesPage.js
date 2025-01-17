// get static data
import TrainList from './TrainList';
import NavBar from '../components/NavBar';
import backhome from './images/home.png';
import './LinesPage.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function LinesPage(props) {
  const navigate = useNavigate();
  const { currColor } = props;
  let URLarrival = 'http://13.59.196.129:3001/arrivals/';
  let URLstation = 'http://13.59.196.129:3001/stations/';
  let [data, setData] = useState(null);
  let [data2, setData2] = useState(null);
  let [givetrain, setGiveTrain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  let [b1, setB1] = useState(false), [b2, setB2] = useState(false), [b3, setB3] = useState(false), [b4, setB4] = useState(false);

  let dir1 = "Eastbound", dir2 = "Westbound";
  if (currColor === "GOLD" || currColor === "RED") {
    dir1 = "Northbound";
    dir2 = "Southbound";
  }

  useEffect(() => {
    setLoading(true);

    fetch(URLarrival + currColor)
    .then(response => response.json())
    .then(data => setData(data));

    fetch(URLarrival + currColor)
    .then(response => response.json())
    .then(data => {setGiveTrain(data); setLoading(false);});
    
    fetch(URLstation + currColor)
    .then(response => response.json())
    .then(data2 => setData2(data2));

  },[currColor])

  useEffect(() => {
    setGiveTrain(data?.filter((currTrain) => {
        if (filter.length === 0 || filter.toUpperCase().includes(currTrain.HEAD_SIGN)) {
            let temp1=false, temp2=false, temp3=false, temp4=false;
        if (currTrain.WAITING_TIME === 'Arriving') {
            temp1 = true;
        } else {
            temp2 = true;
        }
        if (currTrain.currColor === 'GOLD' || currTrain.currColor === 'RED') {
            if (currTrain.DIRECTION === 'N') {
                temp3 = true;
            } else {
                temp4 = true;
            }
        } else {
            if (currTrain.DIRECTION === 'E') {
                temp3 = true;
            } else {
                temp4 = true;
            }
        }

        if ((b1 && !temp1) || (b2 && !temp2) || (b3 && !temp3) || (b4 && !temp4)) return false;
        else return true;
        }

        return false;
    }));
  }, [b1, b2, b3, b4, filter])

  return (
    <div>
        <div className="top">
            <div className="titlehome">
                <h1 className="title">{currColor}</h1>
                <div className="homeside">
                    <img className="backhome2" src={backhome} onClick={() => {
                        navigate("/");
                    }}></img>
                </div>
            </div>
            <div className="buttonsColors">
                <button className="gold" onClick={() => {
                    props.setCurrColor('GOLD');
                }}></button>
                <button className="red" onClick={() => {
                    props.setCurrColor('RED');
                }}></button>
                <button className="blue" onClick={() => {
                    props.setCurrColor('BLUE');
                }}></button>
                <button className="green" onClick={() => {
                    props.setCurrColor('GREEN');
                }}></button>
            </div>

            <div className="buttonsouter">
                <div className="buttons">
                    <button className="button" style={{
                        backgroundColor: b1 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        setB1(!b1);
                    }}>Arriving</button>
                    <button className="button" style={{
                        backgroundColor: b2 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        setB2(!b2);
                    }}>Scheduled</button>
                    <button className="button" style={{
                        backgroundColor: b3 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        setB3(!b3);
                    }}>{dir1}</button>
                    <button className="button" style={{
                        backgroundColor: b4 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        setB4(!b4);
                    }}>{dir2}</button>
                </div>
            </div>
        </div>

        <div className="flex">
            <div className="navbar">
                <NavBar stations={data2} data={data} filter={filter} setData={setData} setGiveTrain={setGiveTrain} setFilter={setFilter}/>
            </div>
            <div className="trainlist">
                <TrainList color={currColor} data={givetrain} loading={loading}/>
            </div>
        </div>
    </div>
  );
}