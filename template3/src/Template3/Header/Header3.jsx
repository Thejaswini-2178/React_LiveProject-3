import React, { Component } from 'react';
import headerData from './header.json'; // Import JSON file

export class Header3 extends Component {
  render() {
    return (
      <div className="hero_area">
        <div>
          <div className="hero_bg_box">
            <div className="bg_img_box">
              {/* Use hero image from JSON */}
              <img src={headerData.heroImage} alt="Hero Background" />
            </div>
          </div>
          {/* Header section starts */}
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>{headerData.brandName}</span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {headerData.navigationLinks.map((link, index) => (
                      <li
                        key={index}
                        className={`nav-item ${link.active ? 'active' : ''}`}
                      >
                        <a className="nav-link" href={link.url}>
                          {link.name}
                          {link.active && <span className="sr-only">(current)</span>}
                        </a>
                      </li>
                    ))}
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-user" aria-hidden="true" /> Login
                      </a>
                    </li>
                    <form className="form-inline">
                      <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                        <i className="fa fa-search" aria-hidden="true" />
                      </button>
                    </form>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          {/* Slider section */}
          <section className="slider_section">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {headerData.sliderData.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="detail-box">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <div className="btn-box">
                              <a href="#" className="btn1">
                                {slide.buttonText}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="img-box">
                            <img src={slide.image} alt="Slider" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ol className="carousel-indicators">
                {headerData.sliderData.map((_, index) => (
                  <li
                    key={index}
                    data-target="#customCarousel1"
                    data-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                  />
                ))}
              </ol>
            </div>
          </section>
          {/* End slider section */}
        </div>
      </div>
    );
  }
}
export default Header3;
