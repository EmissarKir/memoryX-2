import React from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "../common/button";
import Text from "../common/text";
import Flex from "../stylesComp/flex";

export default function EmptyTestPage() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Text align="center" view="secondary" size="l">
        У вас еще нет тестов...
      </Text>
      <Button
        renderAs={NavLink}
        to="/tests/create"
        label="Создать новый тест"
        iconLeft={FaPlus}
      />
    </Flex>
  );
}
