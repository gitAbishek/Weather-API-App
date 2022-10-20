import {useEffect, useState} from "react"
import Cart from "./Cart"
const Weather = () =>{

    const [data,setData] = useState("America")
    const [info,setInfo] = useState({})


    const handleClick = async() =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&APPID=6d8fee14a15c0e8c4a7e3b2afeef49e7`
            const res = await fetch(url)
            const resJson = await res.json()
            const {temp,humidity,pressure} = resJson.main;
            const {main:weathercondition} = resJson.weather[0];
            const {name} = resJson;
            const {speed} = resJson.wind;
            const {country,sunset} = resJson.sys;

            const weatherInfo = {
                temp,
                humidity,
                pressure,
                weathercondition,
                name,
                speed,
                country,
                sunset,
            }

            setInfo(weatherInfo)
            setData("")

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        handleClick()
    },[])
    return(
        <div className="weather">
            <div className="searchbar">
                <div className="input">
                    <input type="text" 
                    className="no-outline"
                    placeholder="Search.."
                    value={data}
                    onChange={(event)=> setData(event.target.value)}
                    />
                </div>

                <div className="button">
                    <button
                    onClick={handleClick}
                    >Search</button>
                </div>
            </div>
            <Cart info={info}/>
        </div>
    )
}

export default Weather