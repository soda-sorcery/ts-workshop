import {
  Box,
  Avatar,
  AvatarBadge,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

const RobotIcon = ({ iconId = 1, isSelected = false, ...rest }) => {
  const [outline, boxShadow] = useToken("colors", ["blue.400", "purple.700"]);
  return (
    <>
      {!isSelected && (
        <Avatar
          width="100px"
          height="auto"
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
