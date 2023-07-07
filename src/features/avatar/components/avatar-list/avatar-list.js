import { RobotIcon } from "../../../../components/icons/robot-icon";
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

const listSize = new Array(10).fill("");

const AvatarList = ({ clickHandler }) => {
  return (
    <UnorderedList display="flex" flexWrap="wrap">
      {listSize.length &&
        listSize.map((_, index) => (
          <ListItem m="2" listStyleType="none" key={index + 1} id={index + 1}>
            <RobotIcon onClick={clickHandler} iconId={index + 1} />
          </ListItem>
        ))}
    </UnorderedList>
  );
};

export { AvatarList };
