import { HStack, Image } from "@chakra-ui/react";
import favicon1 from "../assets/favicon1.ico";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between">
      <Image src={favicon1} boxSize="60px" />

      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
      </ClientOnly>
    </HStack>
  );
};

export default Navbar;
