import React, { Component } from 'react';
import footerData from './footerData.json';

class Footer extends Component {
  render() {
    const { sectionClassName, containerClassName, text, yearId, link } = footerData;

    return (
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <p>
            {text} <span id={yearId} /> {text}
            <a href={link.url}>{link.text}</a>
          </p>
        </div>
        <div>
          <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script type="text/javascript" src="js/bootstrap.js"></script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
          <script type="text/javascript" src="js/custom.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
        </div >
      </section>
    );
  }
}
export default Footer;
