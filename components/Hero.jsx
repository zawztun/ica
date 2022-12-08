import Image from "next/image";
import React from "react";
import Slider from "./Slider";
import { SliderData } from './SliderData'



// const Hero = ({heading, message}) => {
//   return (
// //     < className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
// //       {/* Overlay */}
// //       <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' />
// //       <div className='p-5 text-white z-[2]  mt-[-10rem]'>
// //         <h2 className='text-5xl font-bold'>WE NEED REAL CHANGE</h2>
// //         <p className='py-5 text-xl'>THE INTERNATIONAL CAMPAIGN FOR ARAKAN  (ICA)​
// // is an advocacy organization, working for equality and justice for Arakanese and the lending voice of the voiceless.</p>
// //         <button className='px-8 py-2 border'>Book</button>
// //       </div>
// <div >

//  <div className='flex items-center justify-center'>
//     {/* <div className="flex flex-col-reverse items-center p-10 mt-10 space-y-0 md:flex-row md:space-y-2">
//       <div className='py-4 '>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam. Ducimus adipisci molestias delectus, illo quaerat nemo quia reprehenderit sapiente esse suscipit veritatis deserunt similique unde architecto ab nihil dolore!
//       </div> */}
//       <div className="min-h-screen">
//   <div className="flex flex-col items-center justify-center p-5 lg:flex-row">
//     <img src="https://placeimg.com/400/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
//     <div className='p-5 '>
//       <h1 className="py-4 text-5xl font-bold">Box Office News!</h1>
//       <p className="justify-center py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates, aut magnam earum fugiat obcaecati dolorum, quod officiis quaerat quibusdam atque esse in? Vitae adipisci fugit optio enim voluptates iure.
//       </p>
//       <div className='flex justify-between'>

//       <button className="p-2 text-white bg-black rounded-xl">Date: November 12 </button>
//       <button className="p-2 text-white bg-black rounded-md">More Details</button>
//       </div>
//     </div>
//   </div>
// </div>
// {/* </div> */}
// </div>
// </div>

//   );
// };

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex gap-8 fl-4 x-col mb md:flex-row">
      {/* <Image
        src="/home/test.1.jpeg"
        width={600}
        height={600}
        className="flex w-4/5"
      /> */}
      
       <Slider slides = {SliderData}/>
      <div className="flex flex-col items-center justify-center w-1/4 text-xl">
        <h1 className="text-2xl font-bold ">History</h1>
        <p>
          The International Campaign for Arakan (ICA) was founded in July 2019
          in Washington DC, United State. The ICA is an advocacy organization,
          working for equality and justice for Arakanese and the lending voice
          of the voiceless. International Campaign for Arakan (ICA) is a global
          network of individual activists and partner organizations. Our main
          focus is to bringing awareness to the struggle of Arakanese at the
          global level. In addition to amplifying the Arakanese voice around the
          world for self dignity, collective power, freedom, and the rights to
          protect and preserve our inherited land, culture and resources
        </p>
          <button className="p-2 mb-4 text-white bg-black rounded-md">More....</button>
      </div>
      
    </div>
  );
};

export default Hero;
