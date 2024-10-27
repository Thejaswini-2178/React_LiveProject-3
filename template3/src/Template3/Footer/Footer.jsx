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
      </section>
    );
  }
}

export default Footer;
