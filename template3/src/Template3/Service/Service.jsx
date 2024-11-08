import React, { Component } from 'react';
import serviceData from './serviceData.json'; 

class Service extends Component {
    render() {
        return (
            <section className="service_section layout_padding">
                <div className="service_container">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                {serviceData.heading} <span>Services</span>
                            </h2>
                            <p>
                                {serviceData.subheading}
                            </p>
                        </div>
                        <div className="row">
                            {serviceData.services.map((service, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="box">
                                        <div className="img-box">
                                            <img src={service.image} alt={service.title} />
                                        </div>
                                        <div className="detail-box">
                                            <h5>{service.title}</h5>
                                            <p>{service.description}</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-box">
                            <a href="#">View All</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Service;
