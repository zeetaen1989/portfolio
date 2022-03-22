import { Flex, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  wrapperList,
  listItemStyle,
  iconStyle,
  titleStyle,
  subTitleStyle,
} from "./AboutMeWrapperStyle";

const MotionListItem = motion(ListItem);

const listItemVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      type: "tween",
    },
  },
};

const AboutMeWrapper = () => {
  return (
    <List display="flex" gap="1rem">
      {wrapperList.map((wrapper) => (
        <MotionListItem
          sx={listItemStyle}
          key={wrapper.id}
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ListIcon {...iconStyle}>{wrapper.icon}</ListIcon>
          <Text {...titleStyle}>{wrapper.title}</Text>
          <Text {...subTitleStyle}>{wrapper.subtitle}</Text>
        </MotionListItem>
      ))}
    </List>
  );
};

export default AboutMeWrapper;
