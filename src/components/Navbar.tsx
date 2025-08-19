import { HStack, Image, Text } from "@chakra-ui/react";
import favicon1 from "../assets/favicon1.ico";

const Navbar = () => {
  return (
    <HStack>
      <Image src={favicon1} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
