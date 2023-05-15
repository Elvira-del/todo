import { ReactNode } from "react";
import { Heading } from "./style";

type TitleProps = {
  size: number;
  weight: number;
  tag: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
};

const Title = ({ size, weight, tag, children, ...rest }: TitleProps) => {
  return (
    <Heading $size={size} $weight={weight} as={tag} {...rest}>
      {children}
    </Heading>
  );
};

export default Title;
