import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <section>
    <footer className="bg-gray-50 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* Column 1 */}
        <div className="text-center  md:text-left">
          <h2 className="font-bold  text-gray-400 text-sm  mt-10 ml-5">400 University Drive Suite 200 Coral Gables,
          </h2>
          <h3 className="font-extralight  text-sm ml-5">FL 33134 USA </h3>
        </div>

        {/* Column 2 */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-gray-400 mb-4">Links</h3>
          <ul>
            <li>Home</li><br></br>
            <li>shop</li><br></br>
            <li>about</li><br></br>
            <li>Contact</li><br></br>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center md:text-left">
          <h3 className="font-bold  text-gray-400 mb-4"> Help</h3>
          <ul>
            <li>Payment Options</li> <br></br>
            <li>Returns</li><br></br>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-gray-400 mb-4">Newsletters</h3>
          <h3 className="  text-sm underline text-black-400 mb-4">Enter your email address</h3>
        </div>

             {/* Column 5 */}
        <div className="text-center md:text-left">
          <h3 className="font-bold underline text-black-400 mt-10">subscribe</h3>
         
        </div>
   
       
      </div>
      <hr className="w-full border-t border-gray-400" />


    </footer>
    <div className="bg-gray-50 w-full h-12 flex items-left justify-left">
  <p className="text-black flex items-center">
    <FaCopyright className="mr-2" /> 2022 Meubel House. All rights reverved
  </p>
</div>

    </section>
  );
}