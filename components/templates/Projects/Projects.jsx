import {
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import { projects } from "../../../data/projects-data";
import { motion } from "framer-motion";
import {
  Header,
  LineDivider,
  SubHeader,
  DemoBtn,
  SourceBtn,
} from "../../elements";
import {
  boxStyle,
  commonVariants,
  flexStyle,
  imgStyle,
  linkContainer,
  linkToProjects,
  techTextStyle,
  techFlexStyle,
} from "./ProjectsStyle";

const MotionFlex = motion(Flex);

const Projects = () => {
  return (
    <Box>
      <Header heading="Projects" id="projects" />
      <LineDivider />
      <SubHeader subHeading="My Recent Works" />
      {projects.map((project) => (
        <>
          <MotionFlex
            sx={flexStyle}
            direction={{ base: "column", md: "row" }}
            variants={commonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              type: "tween",
            }}
          >
            <Box sx={boxStyle}>
              <Image
                key={project.id}
                src={project.imageOne}
                alt={project.altOne}
                sx={imgStyle}
              />
            </Box>
            <Grid placeContent="center" flex="1">
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h3"
                  size="lg"
                  fontSize="2rem"
                  color="#3892f9"
                  key={project.id}
                >
                  {project.titleOne}
                </Heading>
                <Divider mb="0.5rem" />
                <Text>{project.descriptionOne}</Text>
              </Box>
              <Box sx={linkContainer}>
                <Link
                  href={project.demoLinkOne}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <DemoBtn />
                </Link>
                <Link
                  href={project.sourceLinkOne}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <SourceBtn />
                </Link>
              </Box>
              <Heading
                as="h6"
                size="sm"
                sx={techTextStyle}
                textAlign={{ base: "center", md: "left" }}
              >
                Tech Stacks
              </Heading>
              <Flex sx={techFlexStyle}>
                {project.technologyOne.map((tech) => (
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    key={tech.id}
                    height="48px"
                  />
                ))}
              </Flex>
            </Grid>
          </MotionFlex>
          <MotionFlex
            sx={flexStyle}
            direction={{ base: "column-reverse", md: "row" }}
            variants={commonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "tween",
            }}
          >
            <Grid placeContent="center" flex="1">
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h3"
                  size="lg"
                  fontSize="2rem"
                  color="#3892f9"
                  key={project.id}
                >
                  {project.titleTwo}
                </Heading>
                <Divider mb="0.5rem" />
                <Text>{project.descriptionTwo}</Text>
              </Box>
              <Box sx={linkContainer}>
                <Link
                  href={project.demoLinkTwo}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <DemoBtn />
                </Link>
                <Link
                  href={project.sourceLinkTwo}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <SourceBtn />
                </Link>
              </Box>
              <Heading as="h6" size="sm" sx={techTextStyle}>
                Tech Stacks
              </Heading>
              <Flex sx={techFlexStyle}>
                {project.technologyTwo.map((tech) => (
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    key={tech.id}
                    height="48px"
                  />
                ))}
              </Flex>
            </Grid>
            <Box sx={boxStyle}>
              <Image
                key={project.id}
                src={project.imageTwo}
                alt={project.altTwo}
                sx={imgStyle}
              />
            </Box>
          </MotionFlex>
        </>
      ))}
    </Box>
  );
};

export default Projects;
