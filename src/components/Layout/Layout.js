import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import Footer from './Footer';
import BG from "../../assets/bgimage.jpg";

const Layout = (props) => {
  return (
    <Fragment  >
      <MainNavigation />
      <main className='bg-gray-600'>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
