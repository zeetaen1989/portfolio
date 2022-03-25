export const menuStyle = {
  position: "absolute",
  right: "1rem",
  background: "transparent",
  fontSize: "3rem",
  _hover: {
    backgroundColor: "none",
    color: "white",
  },
  _active: {
    backgroundColor: "none",
    opacity: "0",
    transition: "opacity 0.5s ease-in-out",
  },
  _focus: "none",
  opacity: {
    base: "1",
    md: "0",
    lg: "0",
  },
  transition: "all 0.5s ease-in-out",
};
