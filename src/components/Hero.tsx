import { FaDotCircle, FaLinkedinIn } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoChatboxEllipsesSharp, IoLogoWhatsapp } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";

import { motion } from "motion/react";

function Hero() {
  return (
    <div className="hero container mx-auto px-4">
      <section className="flex flex-col text-black-500 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/38391845?v=4s"
            alt="img-profile"
            className="rounded-full w-[90px] pb-3"
          />
          <h1 className="flex items-center gap-2">
            <span className="text-blue-400">
              <FaDotCircle />
            </span>
            Available for freelance
          </h1>
        </motion.div>
        <div className="md:w-4/6 w-full mt-3">
          <motion.h1
            className="md:text-5xl text-4xl font-medium text-gray-800  py-3 leading-tight"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          >
            Full-Stack & Software Engineer. Building Intuitive Design &
            Innovative ERP Solutions
          </motion.h1>
          <motion.p
            className="md:py-5 py-3 font-normal md:text-lg text-base"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            I’m Adi Prabowo, a Full-Stack & Software Engineer
            {/* (5+ years) */}
            specializing in building Innovative ERP Solutions using Intuitive
            Design & Expert in delivering high-impact web and mobile enterprise
            platforms.
          </motion.p>
        </div>
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-2 justify-center px-5 py-3 bg-blue-400 hover:bg-blue-100 md:w-1/3 w-full rounded-lg text-white hover:text-blue-600 border border-blue-400"
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <IoChatboxEllipsesSharp className="text-2xl text-lg" /> Let's Talk
            Together
          </motion.button>
          <motion.button
            className="flex items-center gap-2 justify-center px-5 py-3 hover:bg-blue-400 md:w-1/3 w-full rounded-lg hover:text-white 
             border border-black-400"
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            All Work
          </motion.button>
        </motion.div>

        <div className="h-[120px]  items-end flex mb-5">
          <div className="flex justify-between w-full">
            <motion.button
              className="relative bottom-15"
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            >
              <FaArrowDownLong className="text-3xl animate-bounce text-gray-400" />
            </motion.button>
            <motion.div
              className="flex justify-end gap-2 social-media"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            >
              <a
                href="https://github.com/adiprabowo194"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 bg-blue-400 rounded-full"
              >
                <AiFillGithub className="md:text-3xl text-xl text-white" />
              </a>
              <a
                href="https://linkedin.com/in/adiprabowo194"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 bg-gray-400 rounded-full"
              >
                <FaLinkedinIn className="md:text-3xl text-xl text-white" />
              </a>
              <a
                href="https://wa.me/6281219134561"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 bg-gray-400 rounded-full"
              >
                <IoLogoWhatsapp className="md:text-3xl text-xl text-white" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
