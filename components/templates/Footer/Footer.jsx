import { Center, Flex, Image, Box, Text } from "@chakra-ui/react";
import { SocialIconLinks } from "@components/elements";
import { FaCopyright } from "react-icons/fa";
import { boxStyle, imgTag, imageStyle } from "./FooterStyles";

const Footer = () => {
  const today = new Date();

  return (
    <Box as="footer" sx={boxStyle}>
      <Box as="figure">
        <Image src="/images/wave.svg" alt="waves" sx={imgTag} />
      </Box>
      <Flex
        as="article"
        justifyContent="center"
        direction="column"
        position="relative"
        gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
      >
        <Center as="figure">
          <Image src="/images/logo.svg" alt="Logo" sx={imageStyle} />
        </Center>
        <Box as="section" display={{ base: "block", md: "none" }}>
          <SocialIconLinks />
        </Box>
        <Box
          as="section"
          fontSize="0.8rem"
          mb={{ base: "0.5rem", lg: "1.5rem" }}
        >
          <Flex
            as="article"
            justify="center"
            align="center"
            direction="column"
            gap={{ base: "0rem", lg: "0.5rem" }}
          >
            <Text>Designed & Built By Jiten Gurung</Text>
            <Flex as="section" align="center">
              {today.getFullYear()}{" "}
              <FaCopyright style={{ margin: "0 0.5rem" }} />
              All Rights Reserved.
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
