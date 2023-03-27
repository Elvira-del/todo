import { ElementType, ReactNode } from "react";
import { Heading } from "./style";

type TitleProps = {
  size: number;
  weight: number;
  tag: ElementType;
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
