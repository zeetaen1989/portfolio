import { motion } from "framer-motion";
import { Flex, Text, Link, Divider, List, ListItem } from "@chakra-ui/react";
import { FaMobileAlt, FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import {
  commonVariants,
  links,
  iconStyle,
  mailStyle,
  textStyle,
  flexStyle,
  socialLinkStyle,
  socialIconStyle,
} from "./ContactInfoStyles";
import { MdLocationPin, MdMailOutline } from "react-icons/md";

const MotionFlex = motion(Flex);

const ContactInfo = () => {
  return (
    <MotionFlex
      as="article"
      display={{ base: "block", md: "none" }}
      flexDirection="column"
      justifyContent="center"
      gap={{ base: "1rem", md: "2rem" }}
      alignItems={{ base: "center" }}
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        type: "tween",
      }}
    >
      <Flex
        as="section"
        direction="column"
        justifyContent="center"
        gap={{ base: "1rem", md: "2rem" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Flex sx={flexStyle}>
          <MdLocationPin style={iconStyle} />
          <Text sx={textStyle}>Pokhara, Nepal</Text>
        </Flex>
        <Flex sx={flexStyle}>
          <FaMobileAlt style={iconStyle} />
          <Text sx={textStyle}>+977 9803709974</Text>
        </Flex>
        <Flex sx={flexStyle}>
          <MdMailOutline style={iconStyle} />
          <Link href="mailto:zeetaen.gurung@gmail.com" sx={mailStyle}>
            <Text sx={textStyle}>zeetaen.gurung@gmail.com</Text>
          </Link>
        </Flex>
      </Flex>
      <Divider as="figure" m="1rem 0rem" />
      <List display="flex" gap="5rem">
        {links.map((link) => (
          <ListItem key={link.id} m="0 auto">
            <Link href={link.url} aria-label={link.name} {...socialLinkStyle}>
              {link.name === "LinkedIn" ? (
                <FaLinkedinIn style={socialIconStyle} />
              ) : link.name === "Github" ? (
                <FaGithub style={socialIconStyle} />
              ) : (
                <FaCodepen style={socialIconStyle} />
              )}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider as="figure" m="1rem 0rem" />
    </MotionFlex>
  );
};

export default ContactInfo;
