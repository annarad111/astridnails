import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import '../SliderGallery/SliderGallery.css'
import nails1 from '../../images/nails1.jpg';
import nails2 from '../../images/nails2.jpg';
import nails3 from '../../images/nails3.jpg';
import nails4 from '../../images/nails4.jpg';
import nails5 from '../../images/nails5.jpg';
import nails6 from '../../images/nailsastrid1.jpeg'
import nails7 from '../../images/nailsastrid2.jpeg'
import nails8 from '../../images/nailsastrid4.jpeg'
import nails9 from '../../images/nailsastrid5.jpeg'
import nails10 from '../../images/nailsastrid6.jpeg'
import nails11 from '../../images/nailsastrid8.jpeg'
import nails12 from '../../images/nailsastrid10.jpeg'
import nails13 from '../../images/nailsastrid17.jpeg'
import nails14 from '../../images/nailsastrid18.jpeg'


function Images() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    nails1,nails2,nails3,nails4,nails5,nails6,nails7,nails8,nails9,nails10,nails11,nails12,nails13,nails14
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className='images'> 
      {images.map((src, index) => (
        <img
        className='gallery-img'
          src={ src }
          onClick={ () => openImageViewer(index) }
          // width="300"
          // height="300"
          key={ index }
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}

export default Images