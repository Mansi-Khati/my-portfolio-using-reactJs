import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
function About() {
   const abouts = [
      {
         title: "Frontend Developer",
         description:"Passionate about creating a beautiful and easy navigation website for better user experience",
         imageUrl: images.about01,
      },
      
      {
         title: "Full-Stack Developer",
         description:
         "Loves to juggle through code and structure which can give user a good experience while surfing.",
         imageUrl: images.about02,
      },
   ];
   return (
      <>
         <h2 className="head-text">
            About
            <span> Me!</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={about.imageUrl} alt={about.title}></img>
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(About, "app__about"),
   "about",
   "app__whitebg"
);
