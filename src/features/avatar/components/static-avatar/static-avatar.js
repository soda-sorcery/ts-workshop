import { DEFAULT_AVATAR_ID } from "../../constants";
import { RobotIcon } from "../../../../components/icons/robot-icon";
import { AvatarEditableText } from "../avatar-editable-text";
import React from "react";

const StaticAvatar = ({ iconId = DEFAULT_AVATAR_ID }) => {
  return (
    <React.Fragment>
      <RobotIcon iconId={iconId} />
    </React.Fragment>
  );
};

export { StaticAvatar };
