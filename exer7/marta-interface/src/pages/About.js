import marta1 from './images/marta1.jpg';
import marta2 from './images/marta2.jpg';
import marta3 from './images/marta3.jpg';
import home from './images/home.png';
import './About.css';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="flex-about">
            <div className="left-about">
                <div className="chunk">
                    <h1 className="about-marta">About MARTA</h1>
                    <img className="backhome" src={home} onClick={() => {
                        navigate('/');
                    }}></img>
                </div>

                <h2 className="mini">Our History</h2>
                <div className="par">
                    <p>We started MARTA with a commitment to making public transit a reliable service — one that boosts economic development and enhances the lives of people across Metro Atlanta.</p>
                    <br></br>
                    <p>Our story began in the 1950s when people first started to recognize the importance of Atlanta’s public transportation. They saw it as more than just a way to get people from point A to point B. They saw it as a vital part of the city’s future growth.</p>
                    <br></br>
                    <p>Although the way we serve this city has changed over the years, our commitment remains the same. We believe public transportation is far more than a last resort. It’s a chance to better serve the people and communities all throughout our city.</p>
                </div>

                <h2 className="mini">Our Vision</h2>
                <p className="par">People taking People where they want to go today and tomorrow.</p>
                
                <h2 className="mini">Our Mission</h2>
                <p className="par">To advocate for and provide safe, multimodal transit services that advance prosperity, connectivity and equity for a more livable region.</p>

                <h2 className="mini">Our Priorities</h2>
                <p className="par">Everyday, we will do our part at MARTA to operate a transit system that:</p>
                <ol className="par">
                    <li>Consistently provides excellence in customer service</li>
                    <li>Delivers the capital program with speed and efficiency</li>
                    <li>Strengthens the MARTA brand</li>
                    <li>Demonstrates fiscal responsibility</li>
                </ol>
            </div>
            <div className="right-about">
                <img className="picture" src={marta1}></img>
                <img className="picture" src={marta2}></img>
                <img className="picture" src={marta3}></img>
            </div>
        </div>
    );
}