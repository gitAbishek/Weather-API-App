import {BsCloudSun,BsCloudRain,BsWind} from "react-icons/bs"
import {WiSunset,WiHumidity} from "react-icons/wi"

const date = new Date().toLocaleDateString();

const time = new Date().toLocaleTimeString();


const Cart = ({info}) =>{

    


    const{
        temp,
        humidity,
        pressure,
        weathercondition,
        name,
        speed,
        country,
        sunset,
    } = info;



    return (
        <> 
           {!name ? (<p>No data found</p>) : (
            <div className="cart">
            <div className="first">
                <p className="cloudsunicon">
                <BsCloudSun/>
                </p>
            </div>
            <div className="second">
            <div className="firstsection">
                <p className="temperature">{temp}°</p>

                <div className="minisection">
                <p className="weather-condition">{weathercondition}</p>
                <p className="place">{name},{country}</p>
                </div>
            </div>
            <div className="secondsection">
                <p className="date">{date}</p>
                <p className="time">{time}</p>
            </div>
            </div>
            <div className="third">
               <div className="sunset">
                 <p className="icon"> <WiSunset/></p>
                 <div className="insidethird">
                    <p className="first-text">{sunset}</p>
                    <p className="second-text">sunset</p>
                 </div>
               </div>
               <div className="humidity">
               <p className="icon"><WiHumidity/></p>
                 <div className="insidethird">
                    <p className="first-text">{humidity}</p>
                    <p className="second-text">Humidity</p>
                 </div>

               </div>
               <div className="pressure">
               <p className="icon"><BsCloudRain/></p>
                 <div className="insidethird">
                    <p className="first-text">Pressure</p>
                    <p className="second-text">{pressure}</p>
                 </div>

               </div>
               <div className="wind">
               <p className="icon"><BsWind/></p>
                 <div className="insidethird">
                    <p className="first-text">Wind</p>
                    <p className="second-text">{speed}</p>
                 </div>

               </div>
            </div>
            </div>
            )}
        </>
    )
}

export default Cart