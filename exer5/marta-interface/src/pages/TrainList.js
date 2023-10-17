import Train from '../components/Train';

export default function TrainList(props) {
    const { color } = props;
    const { data } = props;

    const displayedTrains = data.RailArrivals.filter((currTrain) => {
        return currTrain.LINE === color;
    });

    return (
        displayedTrains.map((currTrain) => {
            return <Train train={currTrain} />
        })
    );
    
}
