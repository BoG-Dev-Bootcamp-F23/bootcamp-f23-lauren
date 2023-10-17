// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from './TrainList';
import {useState} from 'react';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("GOLD");

    console.log(trainData);

  return (
    <div>
      {/* <NavBar color={currColor} data={stationData} /> */}
      <TrainList color={currColor} data={trainData} />
    </div>
  );
}