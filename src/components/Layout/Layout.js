import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import Footer from './Footer';
// import BG from "../../assets/bgimage.jpg";
import BGV from "../../assets/bgvideo.mp4"

// const Layout = (props) => {
//   const mainStyle = {
//     backgroundImage: `url(${BG})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat', 
//   };

//   return (
//     <Fragment  >
//       <MainNavigation />
//       <main style={mainStyle}>{props.children}</main>
//       <Footer />
//     </Fragment>
//   );
// };

// export default Layout;


const Layout = (props) => {
  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  };
  return (
    <Fragment  >
      <MainNavigation />
      <main  >
        <video autoPlay muted loop style={videoStyle}>
          <source src={BGV} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
