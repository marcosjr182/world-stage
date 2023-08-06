import { FunctionComponent } from "preact";

export const Container: FunctionComponent = ({ children }) => {
  return <div className="md:container md:mx-auto px-4">{children}</div>;
};
