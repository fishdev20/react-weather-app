import { faThermometerEmpty, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FiSun } from 'react-icons/fi';
import { WiHumidity, WiSunrise,WiSunset } from 'react-icons/wi';
import { IoMdSpeedometer } from 'react-icons/io';
import '../Components/Style/Today.css'

export default function Today({wind, humidity, visibility, pressure, sunrise, sunset, uv}) {
    
    return (
       <div>
           <Row className="today-row">
                <Col lg={4} md={6} sm={12} className="today-col">
                    <div className="box">
                        <h6>UV index</h6>
                        <div className="today-des">
                            {/* <FontAwesomeIcon icon={faSun} className="today-icon"/> */}
                            <FiSun className="today-icon"/>
                            <p>{uv}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className="today-col">
                    <div className="box">
                        <h6>Wind Status</h6>
                        <div className="today-des">
                            <FontAwesomeIcon icon={faWind} className="today-icon"/>
                            <p>{Math.floor((wind * 18) / 5)} km/h</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className="today-col">
                    <div className="box">
                        <h6>Sunrise & Sunset</h6>
                        <div className="today-des">
                            <div className="sunset-sunrise">
                                {/* <div className="flex-row"><WiSunrise className="today-icon"/><p>{new Date(sunrise * 1000).toLocaleTimeString()}</p></div> */}
                                <div className="flex-row"><WiSunrise className="today-icon"/><p>{new Date(sunrise * 1000).toLocaleDateString("en-GB", {
                                hour12: true,
                                hour: "numeric",
                                minute: "2-digit",
                            }).split(',')[1]}</p></div>

                               
                                <div className="flex-row"><WiSunset className="today-icon"/><p>{new Date(sunset * 1000).toLocaleDateString("en-GB", {
                                hour12: true,
                                hour: "numeric",
                                minute: "2-digit",
                            }).split(',')[1]}</p></div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className="today-col">
                    <div className="box">
                        <h6>Humidity</h6>
                        <div className="today-des ">
                            <WiHumidity className="today-icon"/>
                            <p>{humidity}%</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className="today-col">
                    <div className="box">
                        <h6>Visibility</h6>
                        <div className="today-des">
                            <IoMdSpeedometer className="today-icon"/>
                            <p>{visibility / 1000} km</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className="today-col">
                    <div className="box">
                        <h6>Pressure</h6>
                        <div className="today-des">
                            <FontAwesomeIcon icon={faThermometerEmpty} className="today-icon"/>
                            <p>{pressure}hPa</p>
                        </div>
                    </div>
                </Col>
           </Row>
           
           
       </div>
    )
}
