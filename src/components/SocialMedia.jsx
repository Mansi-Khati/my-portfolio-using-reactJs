import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/mansi_khati">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/mansi-khati-160bb5214">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:khatimansi2004@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
