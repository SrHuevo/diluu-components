import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  fill: string;
};

const OrangeCircle = ({ fill, ...props }: Props) => {
  return (
    <svg
      width="178"
      height="119"
      viewBox="0 0 178 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.32455 0.0243353C4.89866 1.28154 4.49825 2.55391 4.12406 3.84103C-9.73963 51.5289 17.6442 101.424 65.2967 115.351L65.5468 115.424C113.238 129.215 163.104 101.778 176.968 54.0898C177.342 52.8027 177.686 51.5139 178.001 50.2244L5.32455 0.0243353Z"
        fill={fill}
      />
    </svg>
  );
};

export default OrangeCircle;
