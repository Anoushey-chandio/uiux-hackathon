// components/Hero.tsx


import ImageGrid from '@/components/blogsimg';
import Button from '@/components/button';
import CardImg from '@/components/cardimg';
import TwoImagesWithBg from '@/components/twoimages';



import Image from 'next/image'; // Import Image from next/image

const Hero = () => {
  return (
    <>
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-24 bg-primary">
      {/* Left side - Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
        Rocket single seater
        </h1>
       {/* Button */}
       <Button label="Shop Now" underline={true} />
      </div>

      {/* Right side - Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/images/1st.png" // Path to image in public folder
          alt="Rocket"
          width={700} // Set the width for optimization
          height={500} // Set the height for optimization
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
       {/* Use the TwoPics component  */}
  {/* Second use of TwoImagesWithBg with different images and background */}
  <TwoImagesWithBg
        leftImage="/images/2nd.png"
        rightImage="/images/3rd.png"
        bgColor="bg-custom"  // Another background color
      />

 {/* the image gallery component  */}
 <CardImg
  limit={4}
  title="Top Picks For You"
  description="Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights."
/>

    
 {/* the new arival  */}
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-primary">
  {/* Left Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img 
      src="/images/Asgaard sofa 1.png" 
      alt="Asgaard Sofa" 
      className="w-full max-w-md object-cover rounded-lg"
    />
  </div>

  {/* Right Side - Text */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
    <p className="text-sm text-gray-800 uppercase tracking-wide">New Arrivals</p>
    <h1 className="text-4xl font-bold mt-4">Asgaard Sofa</h1>
    <br></br>
    <Button label="Order Now" outline={true} />

  </div>
</div>
{/* blogs grid */}

<ImageGrid />

 {/* Instagram */}
 <div className="relative w-full h-[430px]">
          <Image
            src="/images/Group 47.png"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

 
    </>
  );
};

export default Hero;
