import { Box, Avatar } from "@chakra-ui/react";
import { RobotIcon } from "./robot-icon";

const SelectableRobotIcon = ({ iconId = 1 }) => {
  return <RobotIcon iconId={iconId} _hover={{ transform: "scale(1.25)" }} />;
};

export { SelectableRobotIcon };
