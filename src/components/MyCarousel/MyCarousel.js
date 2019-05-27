

 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import { Carousel } from 'react-responsive-carousel';
 import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
 import topLandingImage from './topLandingImage.jpg';
 
 import './MyCarousel.css';
 
 import Button from 'muicss/lib/react/button';
 
 export default class MyCarousel extends Component {
   constructor(props) {
     super(props);
 
     //SET INITIAL STATE BELOW:
     this.state = { open: false };
     //BIND METHODS BELOW:
     this.handleLinkClick = this.handleLinkClick.bind(this);
   }
   //HANDLE METHODS BELOW:
   handleLinkClick(e) {
     e.preventDefault();
     console.log('click to see supplement page.');
   }
   handleButtonClick = () => {
     this.setState({ open: true });
     window.location.href = 'http://localhost:3000/Meals/CustomMeals';
   };
   handleShopNowButton = () => {
     this.setState({ open: true });
     window.location.href = 'http://localhost:3000/Meals/FullMenu';
   };
 
   render() {
     const style = {
       backgroundColor: 'white',
       color: 'red',
       padding: '1.3%',
       textTransform: 'uppercase',
       fontSize: '45px',
       fontWeight: 'bold',
       fontStyle: 'oblique',
       fontFamily: 'SansSerif'
     };
     return (
       <Carousel
         showArrows={true}
         stopOnHover={true}
         showThumbs={false}
         width="100%"
         transitionTime={800}
         interval={4000}
         infiniteLoop={true}
         autoPlay={true}
         showStatus={false}
         dynamicHeight={true}
         swipeable={true}
         swipeScrollTolerance={5}
         centerMode={false}
         centerSlidePercentage={80}
       >
         {/* /// 1ST SECTION */}
         <div>
    
           <img
             className="carouselImage"
             src="http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-547005387.jpg?itok=UEefA_30"
           />

           <div
             style={{
               color: 'white',
               marginTop: '-90vh',
               fontSize: '4em',
               fontStyle: 'oblique',
               display: 'flex'
             }}
           >
             <div className="left">
               <span style={style}>WORK HARD.EAT RIGHT.</span>
               <div>_____</div>
               <p2
                 style={{
                   color: 'red',
                   fontSize: '20px',
                   textTransform: 'uppercase',
                   backgroundColor: 'white',
                   fontWeight: 'bold',
                   padding: '1.3%',
                   marginBottom: '4%',
                   marginTop: '3%',
                   fontStyle: 'oblique',
                   fontFamily: 'SansSerif'
                 }}
               >
                 Heat & Eat Gourmet Meals.
               </p2>
               <p2
                 style={{
                   color: 'red',
                   fontSize: '14px',
                   textTransform: 'uppercase',
                   backgroundColor: 'white',
                   fontWeight: 'bold',
                   padding: '1.5%',
                   fontStyle: 'oblique',
                   fontFamily: 'SansSerif'
                 }}
               >
                 Delivered to Your Door.
               </p2>
             </div>
           </div>
         </div>
 
         {/* ///2ND SECTION  */}
         <div>
           <img
             className="carouselImage"
             src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/5/19/0/FNK_300-Calorie-Breakfasts-Opener_s4x3.jpg.rend.hgtvcom.966.725.suffix/1463631026438.jpeg"
           />
           <div
             style={{
               marginTop: '-90vh',
               // zIndex: 1,
               fontSize: '4em',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               paddingTop: '25%'
             }}
           >
             <p
               style={{
                 background: 'black',
                 color: 'white',
                 borderColor: 'gray',
                 borderRadius: '15px',
                 width: '70%',
                 // paddingLeft: '.5%',
                 // paddingRight: '.5%',
                 fontSize: '40px',
                 fontWeight: 900,
                 textTransform: 'upperCase',
                 fontFamily: 'SansSerif'
               }}
             >
               Simple - Convenient - Fresh - Affordable
             </p>
 
             <div>
               <Button
                 style={{
                   color: 'black',
                   fontSize: '35px',
                   backgroundColor: 'white',
                   marginTop: '10%',
                   // marginRight: '25%',
                   alignItems: 'center',
                   fontWeight: 900,
                   textTransform: 'upperCase'
                 }}
                 size="large"
                 variant="raised"
                 onClick={this.handleShopNowButton}
               >
                 See The Menu
               </Button>
             </div>
           </div>
         </div>
         {/* ///3RD SECTION*/}
         <div>
           <img
             src="https://reviewed-com-res.cloudinary.com/image/fetch/s--1tvhakF9--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_747/https://reviewed-production.s3.amazonaws.com/1479493028000/GettyImages-530418242.jpg"
             className="carouselImage"
           />
 
           <div
             style={{
               color: 'red',
               marginTop: '-90vh',
               fontSize: '4em',
               display: 'flex',
               marginLeft: '5%'
             }}
           >
             <div className="left">
               <span
                 style={{
                   backgroundColor: 'red',
                   color: 'white',
                   padding: '1.3%',
                   textTransform: 'uppercase',
                   fontSize: '45px',
                   fontWeight: 'bold',
                   fontStyle: 'oblique',
                   fontFamily: 'SansSerif'
                 }}
               >
                 Eat Healthy Your Way!
               </span>
 
               <p2
                 style={{
                   backgroundColor: '	#7CFC00',
                   color: 'orange',
                   marginTop: '5%',
                   padding: '2%',
                   fontSize: '20px',
                   fontWeight: 'bold',
                   fontStyle: 'oblique',
                   fontFamily: 'SansSerif'
                 }}
               >
                 Chef Prepared Custom Meals...Just a Click Away!
               </p2>
               {/* <p2
                 style={{
                   backgroundColor: 'red',
                   color: 'white',
                   marginTop: '5%',
                   padding: '1.3%',
                   fontSize: '16px',
                   fontWeight: 'bold',
                   fontStyle: 'oblique',
                   fontFamily: 'SansSerif'
                 }}
               >
                 Let our chef do the hard part.
               </p2> */}
             </div>
           </div>
           <div
             style={{
               color: 'red',
               marginTop: '-90vh',
               fontSize: '4em',
               display: 'flex',
               marginLeft: '25%',
               marginTop: '-10%'
             }}
           >
             <Button
               style={{
                 color: 'white',
                 background: 'linear-gradient(#00FF00 30%, #FF8E53 90%)',
                 marginRight: '25%',
                 fontFamily: 'osward'
               }}
               size="large"
               variant="raised"
               onClick={this.handleButtonClick}
             >
               Start Now
             </Button>
           </div>
         </div>
 
         
         {/* /// 4TH SECTION */}
         {/* <div>
           <img
             className="carouselImage"
             src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/47038488_2115673675413779_8927643923409534976_o.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=db3c4f29b7d1702dfdb0f97a6094e6a4&oe=5CC1D71F"
           />
 
           <span
             style={{
               color: 'red',
               fontSize: '20px',
               textTransform: 'uppercase',
               backgroundColor: 'black',
               fontWeight: 900,
               position: 'absolute',
               borderRadius: '15px',
               top: '55%',
               right: '5%',
               padding: '1.5%'
             }}
           >
             {' '}
             <a
               href="https://spartansupps.com/?fbclid=IwAR1C_xsTrvKbHILUyAXma8KG4m7VzY93jlsoGoJTMp5P-edFtj3of4LbNoc"
               onClick={() => this.handleLinkClick}
               className="linkStyle"
             >
               Check Out Our Supplements.
             </a>
           </span>
         </div> */}
       </Carousel>
     );
   }
 }
 