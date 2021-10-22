import * as React from 'react';

interface IProps {}

const Footer: React.FC<IProps> = () => {
  return (
    <footer className=' flex center'>
      <small>&copy; oshingate@gmail.com</small>
    </footer>
  );
};

export default Footer;
