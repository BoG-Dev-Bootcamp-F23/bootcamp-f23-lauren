import './NavBar.css'

export default function NavBar(props) {
    const { color } = props;
    const { data } = props;

    const stations = data[color.toLowerCase()];

    return (
        <div className="bar">
            {stations.map((station) => {
                return <p className="station">{station}</p>
            })}
        </div>
    );

}