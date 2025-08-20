import type { PlatForm } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: PlatForm[];
}

const PlatFormIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginTop={2} color={"gray"} marginY={2}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;
        return <Icon key={platform.id} as={iconMap[platform.slug]} />;
      })}
    </HStack>
  );
};

export default PlatFormIcon;
