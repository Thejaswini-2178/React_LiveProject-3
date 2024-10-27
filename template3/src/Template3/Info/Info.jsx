import React, { Component } from 'react';
import infoData from './infoData.json';

class Info extends Component {
    render() {
        return (
            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row">
                        {/* Address Section */}
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_contact">
                                <h4>Address</h4>
                                <div className="contact_link_box">
                                    <a href="#">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>{infoData.address.location}</span>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>Call {infoData.address.phone}</span>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <span>{infoData.address.email}</span>
                                    </a>
                                </div>
                            </div>
                            <div className="info_social">
                                <a href="#">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_detail">
                                <h4>{infoData.info.title}</h4>
                                <p>{infoData.info.description}</p>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="col-md-6 col-lg-2 mx-auto info_col">
                            <div className="info_link_box">
                                <h4>Links</h4>
                                <div className="info_links">
                                    {infoData.links.map((link, index) => (
                                        <a key={index} href={link.url} className={link.isActive ? "active" : ""}>
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Subscribe Section */}
                        <div className="col-md-6 col-lg-3 info_col">
                            <h4>Subscribe</h4>
                            <form action="#">
                                <input type="text" placeholder="Enter email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Info;
