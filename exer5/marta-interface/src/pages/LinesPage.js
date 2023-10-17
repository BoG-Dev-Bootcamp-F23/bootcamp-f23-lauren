// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from './TrainList';
import NavBar from '../components/NavBar';
import './LinesPage.css'
import {useState} from 'react';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("BLUE");
  let dir1 = "Eastbound";
  let dir2 = "Westbound";
  if (currColor === "GOLD" || currColor === "RED") {
    dir1 = "Northbound";
    dir2 = "Southbound";
  }


  return (
    <div>
        <div className="top">
            <h1 className="title">Train Schedules</h1>
            <div className="buttonsouter">
                <div className="buttons">
                    <button>Arriving</button>
                    <button>Scheduled</button>
                    <button>{dir1}</button>
                    <button>{dir2}</button>
                </div>
            </div>
        </div>
        <div className="flex">
            <div className="navbar">
                <NavBar color={currColor} data={stationData} />
            </div>
            <div className="trainlist">
                <TrainList color={currColor} data={trainData} />
            </div>
        </div>
    </div>
  );
}