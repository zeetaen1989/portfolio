import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { btnStyle } from "../Btn";

const MotionBtn = motion(Button);

const btnVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1,
      type: "spring",
      stiffness: 110,
    },
  },
};

const DownloadBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const btn = {
    ...btnStyle,
    justifyContent: {
      base: "center",
      md: "start",
    },
  };

  return (
    <>
      <MotionBtn
        size="lg"
        sx={btn}
        rightIcon={<FaCloudDownloadAlt style={{ fontSize: "1.5rem" }} />}
        variants={btnVariants}
        initial="hidden"
        animate="visible"
        isLoading={isLoading}
        loadingText="Downloading"
        spinnerPlacement="end"
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 2500);
        }}
      >
        Download CV
      </MotionBtn>
    </>
  );
};

export default DownloadBtn;
