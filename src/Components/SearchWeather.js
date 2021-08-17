import React from 'react'
import { Col, Form } from 'react-bootstrap'
import '../Components/Style/SearchWeather.css'


export default function SearchWeather({typecity, settypecity, img, value, setValue, location, temp, setcity, disc,percentage, clouds, time}) {







  
  // const search = evt => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         setWeather(result);
  //         setQuery('');
  //       }, [api.base]);
  //   }
  // }
    
  const search =(e) => {
    if (e.key === 'Enter') {
      setcity(typecity);
      settypecity('');
      e.preventDefault();
      e.stopPropagation();
    } 
  }

    const handleChange = (e) => {
        settypecity(e.target.value);  
    }
    


    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
      }
    return (
        <Col lg={3} md={4} sm={12} className="col-search search-form" >
            <Form className="form">
              <Form.Control 
                type="text" 
                placeholder="Search" 
                className="mt-20"
                value={typecity}
                onChange={handleChange}
                // onKeyPress={citySelect}
                onKeyDown={search}
              />
              {/* <FontAwesomeIcon icon={faSun} className="icon mt-20" /> */}
              <img src={img} alt="weather icon" className="imgcss" />
              <div>
                <h1 className="">{value.name}
                <br/><span> {`${Math.floor(temp.temp - 273.15)}°C`}</span>
                </h1>
                <h5>
                    {dateBuilder(new Date())}
                  </h5>
                    <h3>
                    {new Date(time * 1000).toLocaleDateString("en-GB", {
                                    hour24: true,
                                    hour: "numeric",
                                    minute: "2-digit",
                                }).split(',')[1]}
                    </h3>
                
                <p>
                {disc}
                <br/>
                {clouds} {`${percentage}%`}
                </p>
              </div>
              <div className="img-box">
                    <div className="image">
                        {`${Math.floor(temp.temp - 273.15)}` > 20
                        ? <img src="https://c.wallhere.com/images/b4/4c/082581ac7cb231781c60cce48b28-1571321.jpg!d" alt="warm"/>
                        : <img src="https://media.idownloadblog.com/wp-content/uploads/2017/02/alex-muench-minimalist-ice-landscae-wallpaper-5120x2880.png" alt="cold"/>}  
                    </div>   
                
              </div>
              {/* <img  className="img " src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6" alt="img" /> */}
          </Form>
        </Col>
    )
}
