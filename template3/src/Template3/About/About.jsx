import React, { Component } from 'react';
import aboutData from './aboutData.json'; 

class About extends Component {
    render() {
        return (
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            {aboutData.heading.title} <span>{aboutData.heading.subtitle}</span>
                        </h2>
                        <p>
                            {aboutData.description}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={aboutData.image} alt="About Us" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <h3>
                                    {aboutData.details.title}
                                </h3>
                                {aboutData.details.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <a href={aboutData.details.link}>
                                    {aboutData.details.linkText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;
