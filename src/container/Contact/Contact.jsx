import { React} from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Contact.scss";

function Contact() {

   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} alt="email"/>
               <a href="mailto:khatimansi2004@gmail.com" className="p-text">
                  Email
               </a>
            </div>
            
            <div className="app__footer-card">
            
               <img src={images.twitter} alt="twitter"/>
               <a href="https://twitter.com/mansi_khati" className="p-text">
               Twitter
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} alt="linkedin"/>
               <a
                  href="https://www.linkedin.com/in/mansi-khati-160bb5214"
                  className="p-text"
               >
                  Linkedln
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} alt="github"/>
               <a href="https://github.com/Mansi-Khati" className="p-text">
                 GitHub
               </a>
            </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "app__whitebg"
);
