import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  fill: string;
};

const GreenCircle = ({ fill, ...props }: Props) => {
  return (
    <svg
      width="178"
      height="120"
      viewBox="0 0 178 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.32455 119.487C4.89866 118.23 4.49825 116.958 4.12406 115.671C-9.73963 67.9828 17.6442 18.0873 65.2967 4.16073L65.5468 4.08803C113.238 -9.70357 163.104 17.7341 176.968 65.4219C177.342 66.7091 177.686 67.9978 178.001 69.2874L5.32455 119.487Z"
        fill={fill}
      />
    </svg>
  );
};

export default GreenCircle;
