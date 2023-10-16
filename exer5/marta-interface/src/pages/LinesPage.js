// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import {useState} from 'react';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("GOLD");

  return (
    <div>
      // YOUR JSX CODE
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
      // YOUR JSX CODE
    </div>
  );
}