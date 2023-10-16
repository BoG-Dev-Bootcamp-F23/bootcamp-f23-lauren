import './train.css';

export default function Train(props) {
    const { train } = props;
    
    const fromStation = train["STATION"];
    const toStation = train["DESTINATION"];
    const color = train["LINE"];
    
    const waitingTime = train["WAITING_TIME"];

    if (train["DELAY"] === "T0S") {
        const delayDisplay = "On time";
        const delayColor = "greenDelay";
    } else {
        const delayDisplay = "Delayed";
        const delayColor = "redDelay";
    }

    return (
        <div className="flex">
            <div className="mainSection">
                <div className="trainComponent">
                    <p>fromStation</p>
                    <p>U+02192</p>
                    <p>toStation</p>
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