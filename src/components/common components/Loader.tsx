import React from 'react';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className='bouncing-loader'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
