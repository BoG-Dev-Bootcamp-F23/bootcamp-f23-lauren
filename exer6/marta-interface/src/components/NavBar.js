import './NavBar.css'
import {useState} from 'react';

export default function NavBar(props) {
    const { color } = props;
    const { data } = props;
    let [clicked, setClicked] = useState(false);

    return (
        <div className="bar">
            {data?.map((station) => {
                return <p className='station' style={{
                    fontWeight: clicked ? '500' : '400'
                }} onClick={() => {
                    if (clicked) {
                        setClicked(false);
                    } else {
                        setClicked(true);
                    }
                }}>{station}</p>
            })}
        </div>
    );

}