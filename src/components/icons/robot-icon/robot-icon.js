import { Box, Avatar, AvatarBadge } from "@chakra-ui/react";

const RobotIcon = ({ iconId = 1, isSelected = true, ...rest }) => {
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
          src={`/icons/icon-${iconId}.svg`}
        >
          <AvatarBadge boxsize="1.25em" />
        </Avatar>
      )}
    </>
  );
};

export { RobotIcon };
