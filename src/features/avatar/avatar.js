import "./avatar.css";
import { Flex, IconButton, ButtonGroup, Button } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { DEFAULT_AVATAR_ID, DEFAULT_AVATAR_NAME } from "./constants";
import { RobotIcon } from "../../components/icons/robot-icon";
import { AvatarList } from "./components/avatar-list";

const Avatar = () => {
  const [avatarId, setAvatar] = useState(DEFAULT_AVATAR_ID);
  const [isEditMode, setIsEditMode] = useState(false);

  const onCancelHandler = () => {
    setIsEditMode(() => !isEditMode);
    setAvatar(DEFAULT_AVATAR_ID);
  };

  const onSaveHandler = () => {
    setIsEditMode(() => !isEditMode);
  };

  const formHandler = (updatedAvatar) => {
    setAvatar(updatedAvatar);
  };

  return (
    <Flex direction="column" m="7">
      <Flex justifyContent="end">
        {!isEditMode && (
          <IconButton m="1" onClick={onSaveHandler} icon={<EditIcon />} />
        )}
        {isEditMode && (
          <ButtonGroup>
            <IconButton m="1" onClick={onSaveHandler} icon={<CheckIcon />} />
            <IconButton m="1" onClick={onCancelHandler} icon={<CloseIcon />} />
          </ButtonGroup>
        )}
      </Flex>
      <Flex alignItems="center" direction="column">
        {!isEditMode && <RobotIcon iconId={avatarId} />}
        {isEditMode && <AvatarList clickHandler={formHandler} />}
      </Flex>
    </Flex>
  );
};

export { Avatar };
