import type { PlatForm } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatform";
import { Menu, Button, Portal } from "@chakra-ui/react";
interface Props {
  onSelectedPlatform: (platform: PlatForm) => void;
  selectedPlatform: PlatForm | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platform"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((items) => (
              <Menu.Item
                onClick={() => onSelectedPlatform(items)}
                key={items.id}
                value={items.slug}
              >
                {items.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
