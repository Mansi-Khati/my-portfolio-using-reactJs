import { React} from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";
function Skills() {
   const skills = [
      {
         name: "HTML",
         icon: images.html,
         bgColor: "#edf2f8",
      },
      {
         name: "CSS",
         icon: images.css,
         bgColor: "#313bac",
      },
      {
         name: "JavaScript",
         icon: images.javascript,
         bgColor: "#edf2f8",
      },
      {
         name: "Reactjs",
         icon: images.react,
         bgColor: "#edf2f8",
      },
      {
         name: "Bootstrap CSS",
         icon: images.tailwind,
         bgColor: "#6b7688",
      },
      {
         name: "Firebase",
         icon: images.firebase,
         bgColor: "#edf2f8",
      },
      {
         name: "C++",
         icon: images.cpp,
         bgColor: "#edf2f8",
      },
   ];
   return (
      <>
         <h2 className="head-text">Skills</h2>
         <div className="app__skills-container">
            <motion.div className="app__skills-list">
               {skills.map((skill) => (
                  <motion.div
                     whileInView={{ opacity: [0, 1] }}
                     transition={{ duration: 0.5 }}
                     className="app__skills-item app__flex"
                     key={skill.name}
                  >
                     <div
                        className="app__flex"
                        style={{ backgroundColor: skill.bgColor }}
                     >
                        <img src={skill.icon} alt="skillIcon" />
                     </div>
                     <p className="p-text">{skill.name}</p>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(Skills, "app__skills"),
   "skills",
   "app__whitebg"
);
