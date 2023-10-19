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
  let [oldData1, setOld1] = useState(null), [oldData2, setOld2] = useState(null), [oldData3, setOld3] = useState(null), [oldData4, setOld4] = useState(null);

  let [b1, setB1] = useState(false), [b2, setB2] = useState(false), [b3, setB3] = useState(false), [b4, setB4] = useState(false);

  let dir1 = "Eastbound", dir2 = "Westbound";
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
                    <button className="button" style={{
                        backgroundColor: b1 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        if (!b1) {
                            setOld1(data);
                            setData(data?.filter((currTrain) => {
                                return currTrain.WAITING_TIME === "Arriving";
                            }));
                            setB1(true);
                        } else {
                            setData(oldData1);
                            setB1(false);
                        }
                    }}>Arriving</button>
                    <button className="button" style={{
                        backgroundColor: b2 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        if (!b2) {
                            setOld2(data);
                            setData(data?.filter((currTrain) => {
                                return currTrain.WAITING_TIME !== "Arriving";
                            }));
                            setB2(true);
                        } else {
                            setData(oldData2);
                            setB2(false);
                        }
                    }}>Scheduled</button>
                    <button className="button" style={{
                        backgroundColor: b3 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        if (!b3) {
                            setOld3(data);
                            setData(data?.filter((currTrain) => {
                                if (currColor === 'GOLD' || currColor === 'RED') {
                                    return currTrain.DIRECTION === "N";
                                } else {
                                    return currTrain.DIRECTION === 'E';
                                }
                            }));
                            setB3(true);
                        } else {
                            setData(oldData3);
                            setB3(false);
                        }
                    }}>{dir1}</button>
                    <button className="button" style={{
                        backgroundColor: b4 ? '#e0c6f5' : '#f9faf2'
                    }} onClick={() => {
                        if (!b4) {
                            setOld4(data);
                            setData(data?.filter((currTrain) => {
                                if (currColor === 'GOLD' || currColor === 'RED') {
                                    return currTrain.DIRECTION === "S";
                                } else {
                                    return currTrain.DIRECTION === 'W';
                                }
                            }));
                            setB4(true);
                        } else {
                            setData(oldData4);
                            setB4(false);
                        }
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