// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from './TrainList';
import NavBar from '../components/NavBar';
import './LinesPage.css'
import {useState, useEffect} from 'react';

export default function LinesPage() {
  let [currColor, setCurrColor] = useState("GOLD");
  let URLarrival = 'http://13.59.196.129:3001/arrivals/';
  let URLstation = 'http://13.59.196.129:3001/stations/';
  let [data, setData] = useState(null);
  let [data2, setData2] = useState(null);
  let [loading, setLoading] = useState(true);

  let dir1 = "Eastbound";
  let dir2 = "Westbound";
  if (currColor === "GOLD" || currColor === "RED") {
    dir1 = "Northbound";
    dir2 = "Southbound";
  }

  useEffect(() => {
    fetch(URLarrival + currColor)
    .then(response => response.json())
    .then(data => setData(data));
    
    fetch(URLstation + currColor)
    .then(response => response.json())
    .then(data2 => setData2(data2));

    setLoading(false);
  },[currColor])

  return (
    <div>
        <div className="top">
            <h1 className="title">{currColor}</h1>
            <div className="buttonsColors">
                <button className="gold" onClick={() => {
                    setCurrColor('GOLD');
                }}></button>
                <button className="red" onClick={() => {
                    setCurrColor('RED');
                }}></button>
                <button className="blue" onClick={() => {
                    setCurrColor('BLUE');
                }}></button>
                <button className="green" onClick={() => {
                    setCurrColor('GREEN');
                }}></button>
            </div>
            <div className="buttonsouter">
                <div className="buttons">
                    <button className="button" onClick={() => {

                    }}>Arriving</button>
                    <button className="button" onClick={() => {

                    }}>Scheduled</button>
                    <button className="button" onClick={() => {

                    }}>{dir1}</button>
                    <button className="button" onClick={() => {
                        
                    }}>{dir2}</button>
                </div>
            </div>
        </div>
        <div className="flex">
            <div className="navbar">
                <NavBar color={currColor} data={data2} />
            </div>
            {
                loading ? 
                <div className="loading">LOADING</div>
                : <div className="trainlist">
                    <TrainList color={currColor} data={data} />
                </div>
            }
        </div>
    </div>
  );
}