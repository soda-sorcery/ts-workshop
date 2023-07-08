import {
  Box,
  Avatar,
  AvatarBadge,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

const RobotIcon = ({ iconId = 1, isSelected = false, ...rest }) => {
  const [outline, boxShadow, unSelected] = useToken("colors", [
    "red.400",
    "purple.700",
    "yellow.400",
  ]);
  return (
    <>
      {!isSelected && (
        <Avatar
          width="100px"
          height="auto"
          outline="4px solid"
          outlineColor={unSelected}
          {...rest}
          src={`/icons/icon-${iconId}.svg`}
        />
      )}
      {isSelected && (
        <Avatar
          width="100px"
          height="auto"
          {...rest}
          outline="4px solid"
          outlineColor={outline}
          boxShadow={`0 0 30px ${boxShadow}`}
          src={`/icons/icon-${iconId}.svg`}
        />
      )}
    </>
  );
};

export { RobotIcon };
