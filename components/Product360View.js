// components/Product360View.js

import dynamic from 'next/dynamic';

const React360Viewer = dynamic(() => import('react-360-view'), {
  ssr: false
});

const Product360View = () => {
  return (
    <React360Viewer
      amount={24} // Number of images in the sequence
      imagePath="/monjaro/" // Path to your image folder
      fileName="munjaro-{index}.webp" // Image file naming pattern
    />
  );
};

export default Product360View;
