import React, { Component } from 'react';
import clientData from './clientData.json';

class Clintsection extends Component {
    render() {
        return (
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center psudo_white_primary mb_45">
                        <h2>
                            {clientData.heading} <span>{clientData.subheading}</span>
                        </h2>
                    </div>
                    <div className="carousel-wrap">
                        <div className="owl-carousel client_owl-carousel">
                            {clientData.clients.map((client, index) => (
                                <div className="item" key={index}>
                                    <div className="box">
                                        <div className="img-box">
                                            <img src={client.image} alt={client.name} className="box-img" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_id">
                                                <div className="client_info">
                                                    <h6>
                                                        {client.name}
                                                    </h6>
                                                    <p>
                                                        {client.description}
                                                    </p>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true" />
                                            </div>
                                            <p>
                                                {client.testimonial}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Clintsection;
