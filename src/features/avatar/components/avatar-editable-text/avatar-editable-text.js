import {
  Editable,
  EditableInput,
  EditablePreview,
  Heading
} from "@chakra-ui/react";
import { DEFAULT_AVATAR_NAME } from "../../constants";

const AvatarEditableText = ({
  name = DEFAULT_AVATAR_NAME,
  isDisabled = false,
  isEditMode = false
}) => {
  return (
    <Editable
      startWithEditView={isEditMode}
      isDisabled={isDisabled}
      fontSize="3xl"
      defaultValue={name}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

export { AvatarEditableText };
