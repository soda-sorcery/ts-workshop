import { ReactSVG } from "react-svg";
import { Box, Avatar } from "@chakra-ui/react";

const RobotIcon = ({ iconId = 1 }) => {
  return (
    <Box width="75px" height="auto">
      {/* <ReactSVG src={`/icons/icon-${iconId}.svg`} /> */}
      <Avatar
        ignoreFallback
        loading="eager"
        src={`/icons/icon-${iconId}.svg`}
      />
    </Box>
  );
};



export { RobotIcon };
