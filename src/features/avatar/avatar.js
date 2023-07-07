import "./avatar.css";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { getAvatar } from "../../api/avatar";
import { useEffect, useState } from "react";
import { RobotIcon } from "../../components/icons/robot-icon";
import { DEFAULT_AVATAR_ID, DEFAULT_AVATAR_NAME } from "./constants";
import { AvatarForm } from "./components/avatar-form";
import { StaticAvatar } from "./components/static-avatar";

const Avatar = () => {
  const [avatar, setAvatar] = useState({
    id: DEFAULT_AVATAR_ID,
    name: DEFAULT_AVATAR_NAME
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
          <>
            <IconButton m="1" onClick={onEditHandler} icon={<CheckIcon />} />
            <IconButton m="1" onClick={onEditHandler} icon={<CloseIcon />} />
          </>
        )}
      </Flex>
      <Flex alignItems="center" direction="column">
        {!isEditMode && <StaticAvatar iconId={avatar?.id} />}
        {isEditMode && <AvatarForm formHandler={formHandler} />}
      </Flex>
    </Flex>
  );
};

export { Avatar };
