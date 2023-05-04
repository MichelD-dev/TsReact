import React from "react";
// import { JSXElementTypes } from "../06-type

interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button = (props: Props): JSX.Element => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
