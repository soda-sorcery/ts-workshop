import "./avatar.css";
import { Flex, IconButton, ButtonGroup, Button } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { DEFAULT_AVATAR_ID, DEFAULT_AVATAR_NAME } from "./constants";
import { AvatarForm } from "./components/avatar-form";
import { RobotIcon } from "../../components/icons/robot-icon";
import { StaticAvatar } from "./components/static-avatar";
import { AvatarList } from "./components/avatar-list";

const Avatar = () => {
  const [avatar, setAvatar] = useState({
    id: DEFAULT_AVATAR_ID,
    name: DEFAULT_AVATAR_NAME,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const onEditHandler = () => {
    setIsEditMode(() => !isEditMode);
  };

  const formHandler = (updatedAvatar) => {
    setAvatar(updatedAvatar);
  };

  return (
    <Flex direction="column" m="7">
      <Flex justifyContent="end">
        {!isEditMode && (
          <IconButton m="1" onClick={onEditHandler} icon={<EditIcon />} />
        )}
        {isEditMode && (
          <ButtonGroup>
            <IconButton m="1" onClick={onEditHandler} icon={<CheckIcon />} />
            <IconButton m="1" onClick={onEditHandler} icon={<CloseIcon />} />
          </ButtonGroup>
        )}
      </Flex>
      <Flex alignItems="center" direction="column">
        {!isEditMode && <RobotIcon iconId={avatar?.id} />}
        {isEditMode && <AvatarList clickHandler={formHandler} />}
      </Flex>
    </Flex>
  );
};

export { Avatar };
