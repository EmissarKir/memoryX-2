import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { createTest } from "../../store/tests";
import { SCreateTestPage } from "../../styles/styles";
import { ITest } from "../../types/types";
import { validateSchemeCreateTestPage } from "../../validateScheme";
import { FormComponent, TextFiled } from "../common/forms";
import Text from "../common/text";
import Flex from "../stylesComp/flex";

export default function CreateTestPage() {
  const dispatch = useAppDispatch();

  const handleSubmit = (data: ITest) => {
    dispatch(createTest(data));
  };
  return (
    <Flex direction="column" justify="center" align="center" height="100%">
      <SCreateTestPage>
        <Text align="center" size="l" weight="bold" view="secondary">
          Введите название нового теста
        </Text>

        <FormComponent
          onSubmit={handleSubmit}
          validateScheme={validateSchemeCreateTestPage}
        >
          <TextFiled
            type="text"
            placeholder="Например: '100 английских слов'"
            name="name"
          />
        </FormComponent>
      </SCreateTestPage>
    </Flex>
  );
}
