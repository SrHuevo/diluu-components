import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  fill: string;
};

const SquarePink = ({ fill, ...props }: Props) => {
  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 47.466L125.456 0L170 122.534L44.5442 170L0 47.466Z"
        fill={fill}
      />
    </svg>
  );
};

export default SquarePink;
