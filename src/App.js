import React, { useState } from 'react';
import './app.css';
import './styles.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ListingAd({ pic, title, address, description, psf_min, psf_max, project_type, year, ownership_type, subprice_label, availabilities_label, icon }) {
  const [showDescription, setShowDescription] = useState(false);
  const [anonymizeNumbers, setAnonymizeNumbers] = useState(true);

  const handleSeeDescriptionClick = () => {
    setShowDescription(!showDescription);
    setAnonymizeNumbers(true);
  };

  const anonymizePhoneNumbers = (text) => {
    return text.replace(/\b(\d{4})\d{4}\b/g, '$1XXXX');
  };

  const handlePhoneNumberClick = () => {
    setAnonymizeNumbers(!anonymizeNumbers);
  };

  const getDescriptionContent = () => {
    const content = anonymizeNumbers ? anonymizePhoneNumbers(description) : description;
    return <div className='text-center' onClick={handlePhoneNumberClick}>{content}</div>
  };

  return (
    <div className="App p-4">
      <div className='card shadow-2xl'>
        <Carousel className='shadow-inner' showThumbs={false}>
          <div>
            <img src={pic} style={{ height: '272px', width: '544px' }} alt="Slide 1" />
          </div>
          <div>
            <img src={pic} style={{ height: '272px', width: '544px' }} alt="Slide 2" />
          </div>
        </Carousel>
          <div className='wrapper flex flex-row p-4'>
              <div className='text-start flex flex-col'>
                <div className='flex flex-row'>
                  <img className='mt-2' style={{ width: 40, height: 40 }} src={icon} />
                  <div className='flex flex-col ml-3 '>
                    <div className='avenir-demibold f-23 f-color2'>{title}</div>
                    <div className='avenir-regular f-14 f-color1'>{address}</div>
                  </div>
                </div>
                <div className='mt-2 text-start flex flex-row avenir-regular f-16 f-color2'>
                  {project_type} - {year} - {ownership_type}
                </div>
                <div className='text-start flex flex-row avenir-regular f-16 f-color2'>
                  {availabilities_label}
               </div>
              </div>   
            <div className=' col-2 text-end flex flex-col'>
                <div className='avenir-demibold' style={{fontSize: '19px'}}>${psf_min} - ${psf_max} psf</div>
                <div className='avenir-regular f-14 f-color1 text-1'>{subprice_label}</div>
            </div>
          </div>
          <div className='pb-4 pr-4 pl-4 text-end avenir-demibold f-16 f-color3' >
          <button 
              className='focus:outline-none
                        hover:text-orange-300'
              onClick={handleSeeDescriptionClick}
>            See description
            </button>
            {showDescription && (
              <div>
                {getDescriptionContent()}
              </div>
            )}
          </div>
        </div>
      </div>
  );
}