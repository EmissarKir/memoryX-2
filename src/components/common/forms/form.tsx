import React from "react";

type Props = {
  children: React.ReactNode;
};

const FormComponent: React.FC<Props> = ({ children }) => {
  return <form>{children}</form>;
};

export default FormComponent;
