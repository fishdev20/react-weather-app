import React, { useState } from 'react'
import {  Col, Row } from 'react-bootstrap'
import { API_BASE_URL } from './Api';
import '../Components/Style/Week.css';


export default function Week({daily}) {
    const [selected, setSelected] = useState(0);
    
    const selectedChangeHandler = (e) => {
        setSelected(e.currentTarget.dataset.id);
    };

    return (
        <div className="week">
            <Row>
                    
                {daily ? daily.map((day, i) => (
                    <Col xs={3} sm={3} md={6} lg={3} className=""
                        
                        key={i}
                        data-id={i}
                        onClick={selectedChangeHandler}
                    >
                        <div className="day-container">
                            <h6>
                                {new Date(day.dt * 1000).toLocaleDateString("en-GB", {
                                weekday: "short",
                                day: "numeric",
                                month: "numeric",
                                })}
                            </h6>
                            <div className=" day-des text-center">
                                <img
                                src={`${API_BASE_URL}img/w/${day.weather[0].icon}.png`}
                                alt=""
                                />
                                <p>
                                {Number.parseInt(day.temp.min)}° -&nbsp;
                                {Number.parseInt(day.temp.max)}°
                                </p>
                            </div>
                        </div>
                    </Col>
                    ))
                : ""}
                    
            </Row>
            <Row className="forecast-des">
                {daily ? (
                    <h3>
                        {new Date(daily[selected].dt * 1000).toLocaleDateString(
                            "en-GB",
                            {
                            weekday: "short",
                            month: "numeric",
                            day: "numeric",
                            }
                        )}
                    </h3>
                ) : ("")}
                <Col sm={6} md={6} lg={6}>
                    <p>Temp current: {daily[selected].temp.morn}°C</p>
                    <p>Temp: {Number.parseInt(daily[selected].temp.min)}°C</p>
                    <p>Humidity: {daily[selected].humidity}%</p>
                    <p>Wind speed: {Math.floor((daily[selected]['wind_speed'] * 18) / 5)} km/h</p>
                    
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <p>Sunrise: {new Date(daily[selected].sunrise * 1000).toLocaleDateString("en-GB", {
                    hour24: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }).split(',')[1]}</p>
                    <p>Sunset: {new Date(daily[selected].sunset * 1000).toLocaleDateString("en-GB", {
                    hour24: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }).split(',')[1]}</p>
                    <p>Description: {daily[selected].weather[0].description}</p>
                    <p>Atmospheric pressure: {daily[selected].pressure}hPa</p>
                </Col>
                  
                
            </Row>
        </div>
    )
}
