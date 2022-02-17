import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import '../SliderGallery/SliderGallery.css'
import nails1 from '../../images/nails1.jpg';
import nails2 from '../../images/nails2.jpg';
import nails3 from '../../images/nails3.jpg';
import nails4 from '../../images/nails4.jpg';
import nails5 from '../../images/nails5.jpg';
import nails6 from '../../images/nails6.jpg';
import nails7 from '../../images/nails7.jpg';
import nails8 from '../../images/nails8.jpg';
import nails9 from '../../images/nails9.jpg';
import nails10 from '../../images/nails10.jpg';

function Images() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    nails1,nails2,nails3,nails4,nails5,nails6,nails7,nails8,nails9,nails10,
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