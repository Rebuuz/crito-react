import React from 'react';

import Logo1 from '../../assets/images/Logo1.svg';
import Logo2 from '../../assets/images/Logo2.svg';
import Logo3 from '../../assets/images/Logo3.svg';
import Logo4 from '../../assets/images/Logo4.svg';
import Logo5 from '../../assets/images/Logo5.svg';

const Companies = () => {

    const logotypes =  [
        { src: Logo1, alt: "Paperz företagslogga" },
        { src: Logo2, alt: "Dorfus företagslogga" },
        { src: Logo3, alt: "Martino företagslogga" },
        { src: Logo4, alt: "Square företagslogga" },
        { src: Logo5, alt: "Gobana företagslogga" }
    ];

  return (
    <section className="companies">
        <div className="logos" id="logos">

            {
               logotypes.map((logo, index) => (
                <a href="#" key={index}>
                    <img src={logo.src} alt={logo.alt} className='logo-img'/>
                </a>
               ))
            }
        </div>
    </section>
  )
}

export default Companies;