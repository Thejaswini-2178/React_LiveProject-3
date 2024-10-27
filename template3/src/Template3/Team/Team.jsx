import React, { Component } from 'react';
import teamData from './teamData.json'; // Adjust the path if necessary

class Team extends Component {
    render() {
        return (
            <section className="team_section layout_padding">
                <div className="container-fluid">
                    <div className="heading_container heading_center">
                        <h2>
                            {teamData.heading} <span>{teamData.subheading}</span>
                        </h2>
                    </div>
                    <div className="team_container">
                        <div className="row">
                            {teamData.description.map((member, index) => (
                                <div className="col-lg-3 col-sm-6" key={index}>
                                    <div className="box">
                                        <div className="img-box">
                                            <img src={member.image} className="img1" alt={member.name} />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {member.name}
                                            </h5>
                                            <p>
                                                {member.role}
                                            </p>
                                        </div>
                                        <div className="social_box">
                                            {member.links.map((link, idx) => (
                                                <React.Fragment key={idx}>
                                                    <a href={link.fb}>
                                                        <i className="fa fa-facebook" aria-hidden="true" />
                                                    </a>
                                                    <a href={link.twitter}>
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </a>
                                                    <a href={link.linkedin}>
                                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                                    </a>
                                                    <a href={link.insta}>
                                                        <i className="fa fa-instagram" aria-hidden="true" />
                                                    </a>
                                                    <a href={link.youtube}>
                                                        <i className="fa fa-youtube-play" aria-hidden="true" />
                                                    </a>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;
