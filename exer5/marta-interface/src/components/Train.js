import './Train.css';

export default function Train(props) {
    const { train } = props;
    
    const fromStation = train.STATION;
    const toStation = train.DESTINATION;
    const color = train.LINE;
    
    const waitingTime = train.WAITING_TIME;
    let delayDisplay = "Delayed";
    let delayColor = "redDelay";

    if (train.DELAY === "T0S") {
        delayDisplay = "On time";
        delayColor = "greenDelay";
    } 

    return (
        <div className="flex">
            <div className="mainSection">
                <div className="trainComponent">
                    <p>{fromStation} to {toStation}</p>
                </div>
                <div className="colortime">
                    <div className={color}>
                        <p>{color}</p>
                    </div>
                    <div className={delayColor}>
                        <p className="delay">{delayDisplay}</p>
                    </div>
                </div>
            </div>
            <div className="sideSection">
                <p>{waitingTime}</p>
            </div>
        </div>
    );


}