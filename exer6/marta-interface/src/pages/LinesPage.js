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

  let dir1 = "Eastbound";
  let dir2 = "Westbound";
  if (currColor === "GOLD" || currColor === "RED") {
    dir1 = "Northbound";
    dir2 = "Southbound";
  }

  useEffect(() => {
    fetch(URLarrival + currColor)
    .then(response => response.json())
    .then(data => setData(data))
  },[currColor])
  useEffect(() => {
    fetch(URL + currColor)
    .then(response => response.json())
    .then(data => setData(data))
  },[currColor])

  console.log("here");
  console.log(data);

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
                    <button className="button">Arriving</button>
                    <button className="button">Scheduled</button>
                    <button className="button">{dir1}</button>
                    <button className="button">{dir2}</button>
                </div>
            </div>
        </div>
        <div className="flex">
            <div className="navbar">
                <NavBar color={currColor} data={stationData} />
            </div>
            <div className="trainlist">
                <TrainList color={currColor} data={data} />
            </div>
        </div>
    </div>
  );
}