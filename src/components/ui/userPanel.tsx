import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";
import { getTimesOfDay } from "../../utils";
import Flex from "../stylesComp/flex";

import { FaBars, FaRegSun } from "react-icons/fa";
import Button from "../common/button";
import Text from "../common/text";
import { useResponsive } from "../../hooks/useResponsive";
import {
  SAvatar,
  SGreeting,
  SUserPanel,
  SUserPanelContainer,
} from "../../styles/styles";
import { Link } from "react-router-dom";

type Props = {
  onToggleSidebar: () => void;
};
export default function UserPanel({ onToggleSidebar }: Props) {
  const userData = useSelector(getCurrentUserData());
  const currentTimesOfDay = getTimesOfDay(Date.now());
  const userName = userData ? userData.name : "Незнакомец";
  const userImage = userData && userData.image;

  const isMobile = useResponsive(960);

  const words = userData ? userData.name.split(" ") : ["H"];
  const firstLetter = words[0] ? words[0][0] : "";
  const secondLetter = words[1] ? words[1][0] : "";

  return (
    <SUserPanel>
      <SUserPanelContainer>
        <Flex>
          <Button
            form="round"
            view="ghost"
            iconLeft={FaBars}
            onlyIcon
            onClick={onToggleSidebar}
            size="xl"
          />
          <SGreeting>
            <Text size={isMobile ? "l" : "2l"} weight="bold" marginBottom="0px">
              Добро пожаловать!
            </Text>
            <Text renderAs="p" view="secondary" size={isMobile ? "s" : "m"}>
              Привет {userName}, {currentTimesOfDay}!
            </Text>
          </SGreeting>
        </Flex>
        <Flex>
          {userData && (
            <Button
              renderAs={Link}
              to="/user"
              form="round"
              view="ghost"
              iconLeft={FaRegSun}
              onlyIcon
              size="xl"
            />
          )}

          <SAvatar>
            {!userImage && `${firstLetter} ${secondLetter}`}
            {userImage && <img src={userImage} alt="user" />}
          </SAvatar>
        </Flex>
      </SUserPanelContainer>
    </SUserPanel>
  );
}
