import './NavBar.css'
import {useState} from 'react';

export default function NavBar(props) {
    const { color } = props;
    const { data } = props;
    let [st, setSt] = useState("station");

    return (
        <div className="bar">
            {data?.map((station) => {
                return <p className={st} onClick={() => {
                    if (st === "station") {
                        st = setSt("clickedNav");
                    } else {
                        st = setSt("station");
                    }
                }}>{station}</p>
            })}
        </div>
    );

}