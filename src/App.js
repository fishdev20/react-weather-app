
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,   Row } from 'react-bootstrap';
// import {  faSun } from '@fortawesome/free-solid-svg-icons';
import Hour from './Components/Hour';
import Week from './Components/Week';
import Today from './Components/Today';
import React, { useEffect, useState } from "react";
import {API_KEY, API_BASE_URL} from './Components/Api';
import axios from 'axios';
import SearchWeather from './Components/SearchWeather';




  
  const App = () => {

    

    const [value, setValue] = useState("");
    const [temp, settemp] = useState("");
    const [typecity, settypecity] = useState("");
    const [city, setcity] = useState("Haiphong");
    const [img, setimg] = useState("");
    const [disc, setdisc] = useState("");
    const [location,setLocaltion]=useState("");
    const [wind,setWind]=useState("");
    const [humidity,setHumidity]=useState("");
    const [visibility,setVisibility]=useState("");
    const [pressure, setPressure] = useState("");
    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");
    const [coord,setCoord] = useState("");
    const [uv, setUv] = useState("");
    const [daily, setDaily] = useState("");
    const [percentage, setPercentage] = useState("");
    const [clouds, setCloud] = useState("");
    const [time, setTime] = useState("");
    const [hourly, setHourly] = useState("");

  
    
    useEffect(() => {
      axios(`${API_BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((res) => {
        setValue(res.data);
        settemp(res.data.main);
        setimg(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`);
        setdisc(res.data.weather[0].description);
        setLocaltion(res.data.sys.country);
        setWind(res.data.wind.speed)
        setHumidity(res.data.main.humidity)
        setVisibility(res.data.visibility )
        setPressure(res.data.main.pressure)
        setSunrise(res.data.sys.sunrise)
        setSunset(res.data.sys.sunset)
        setCoord(res.data.coord)
        // console.log(res);
        // console.log('render');
      }) 
      .catch(function (error) {
        console.log('error');
      }); 
    }, [city]);

    useEffect(() => {
      if(coord){
       let {lat,lon} = coord;
      axios( `${API_BASE_URL}data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
      .then((res) => {
        
        setTime(res.data.current.dt)
        setUv(res.data.current.uvi)
        setDaily(res.data.daily)
        setCloud(res.data.current.weather[0].main)
        setPercentage(res.data.current.clouds)
        setHourly(res.data.hourly)
        // console.log(res);
      })
      .catch(function (error) {
        console.log('this is not error :D');
      });
    };
    }, [coord]);

  const [tabs, setTabs] = useState([
    {
      index: 0,
      name: 'Today',
      status: true
    },
    {
      index: 1,
      name: 'Week',
      status: false
    },
    {
      index: 2,
      name: 'Hour',
      status: false
    },

  ])

  const handleChangeTab = (el) => {
    setTabs(tabs.map(item => item.index === el.index ? { ...item, status: true } : { ...item, status: false }))
  }
 
  return (
    <Container className="App">
      <Row>
        <SearchWeather 
          value={value}
          temp={temp}
          location={location}
          disc={disc}
          img={img}
          typecity={typecity}
          setcity={setcity}
          settypecity={settypecity}
          percentage={percentage}
          clouds={clouds}
          time={time}
          setValue={setValue}
          
        />
        <Col lg={9} md={8} sm={12} className="weather-info" >
          <div className="info-container">
            <div className="navbar">
                  <ul className="nav">
                    {tabs.map((el, index) =>
                      <li 
                        key={index} 
                        role="button" 
                        className={`${el.status ? 'tabs active-tabs' : 'tabs'}`} 
                        onClick={() => handleChangeTab(el)}
                      >
                        {el.name}
                      </li>
                    )}
                  </ul>
                  <img  src="https://cdn-www.bluestacks.com/bs-images/0c4ca69b0c81f701b46afbfdc0670f44.png" alt="avatar" width='50' />
                </div>
            <div>
            {tabs.map((el, index) =>
                    el.status === true && el.name === 'Today' ? 
                      <Today 
                        key={index}  
                        wind={wind}
                        humidity={humidity}
                        visibility={visibility}
                        pressure={pressure}
                        sunrise={sunrise}
                        sunset={sunset}
                        uv={uv}
                      />
                    : el.status === true && el.name === 'Week' ? 
                      <Week 
                        key={index} 
                        daily={daily}
                      />
                    : el.status === true && el.name === 'Hour' ?
                      <Hour 
                      key={index}
                      hourly={hourly}
                      />
                    : ""
                  )}
            </div>
          </div>
        </Col> 
    </Row>
    </Container>
  );
}

export default App;
