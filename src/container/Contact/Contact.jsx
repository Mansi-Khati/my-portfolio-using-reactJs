import { React} from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Contact.scss";

function Contact() {

   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         
         <div className="app__footer-cards">

            <a href="mailto:khatimansi2004@gmail.com" className="p-text">
               <div className="app__footer-card">
                  <img src={images.email} alt="email"/>
                  Email
               </div>
            </a>
            
            
            <a href="https://twitter.com/mansi_khati" className="p-text">
               <div className="app__footer-card">
                  <img src={images.twitter} alt="twitter"/>
                  Twitter
               </div>
            </a>
            
            
            <a href="https://www.linkedin.com/in/mansi-khati-160bb5214" className="p-text">
               <div className="app__footer-card">
                  <img src={images.linkedln} alt="linkedin"/>
                  Linkedln
               </div>
            </a>
            
            
            <a href="https://github.com/Mansi-Khati" className="p-text">
               <div className="app__footer-card">
                  <img src={images.github} alt="github"/>
                  GitHub
               </div>
            </a>
            
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "app__whitebg"
);
