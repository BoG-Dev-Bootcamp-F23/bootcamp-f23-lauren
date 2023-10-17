import Train from '../components/Train';
import './TrainList.css'

export default function TrainList(props) {
    const { color } = props;
    const { data } = props;

    const displayedTrains = data.RailArrivals.filter((currTrain) => {
        return currTrain.LINE === color;
    });

    return (
        <div className="list">
        {displayedTrains.map((currTrain) => {
            return <Train train={currTrain} />
        })}
        </div>
    );
    
}
