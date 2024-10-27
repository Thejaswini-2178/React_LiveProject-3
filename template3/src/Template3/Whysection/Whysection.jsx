import React, { Component } from 'react';
import whyData from './whyData.json'; // Adjust the path if necessary

class Whysection extends Component {
    render() {
        return (
            <section className="why_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            {whyData.heading}
                        </h2>
                    </div>
                    <div className="why_container">
                        {whyData.boxes.map((box, index) => (
                            <div className="box" key={index}>
                                <div className="img-box">
                                    <img src={box.image} alt={box.title} />
                                </div>
                                <div className="detail-box">
                                    <h5>{box.title}</h5>
                                    <p>{box.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-box">
                        <a href={whyData.buttonLink}>
                            {whyData.buttonText}
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Whysection;
