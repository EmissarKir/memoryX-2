import { FC } from "react";
import { SLoader } from "./loader.style";

export const Loader: FC = () => {
  return (
    <SLoader>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SLoader>
  );
};
