import { useState } from "react";
import { DEFAULT_AVATAR_ID, DEFAULT_AVATAR_NAME } from "../../constants";
import { RobotIcon } from "../../../../components/icons/robot-icon";
import { AvatarEditableText } from "../avatar-editable-text";
import { AvatarList } from "../avatar-list";
import { Box, Flex } from "@chakra-ui/react";

const AvatarForm = ({ formHandler }) => {
  const [avatar, setAvatar] = useState({
    id: DEFAULT_AVATAR_ID,
    name: DEFAULT_AVATAR_NAME
  });

  const setAvatarImg = (id) => {
    console.log(id);
    const update = { ...avatar, id };
    setAvatar(update);
    formHandler(update);
  };

  return (
    <Flex alignItems="center" direction="column">
      <AvatarList clickHandler={setAvatarImg} />
      <AvatarEditableText isEditMode />
    </Flex>
  );
};

export { AvatarForm };
