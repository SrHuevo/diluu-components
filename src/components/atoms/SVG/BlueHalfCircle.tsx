import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  fill: string;
};

const BlueHalfCircle = ({ fill, ...props }: Props) => {
  return (
    <svg
      width="183"
      height="183"
      viewBox="0 0 183 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M91.3873 91.765C91.3873 91.7652 91.3874 91.7648 91.3873 91.765L91.3852 91.7641C76.0797 127.017 35.2945 143.439 0 128.45L54.5494 0C89.8439 14.9888 106.349 55.7408 91.6103 91.2341L91.6124 91.235L91.6145 91.2359C106.92 55.983 147.705 39.5605 183 54.5493L128.45 183C93.1556 168.011 76.6509 127.259 91.3897 91.7653L91.3873 91.765ZM91.4098 91.7121C91.4399 91.6413 91.4702 91.5706 91.5005 91.4999C91.5304 91.4288 91.5604 91.3577 91.5905 91.2866C91.5602 91.3577 91.5298 91.4288 91.4994 91.4998C91.4829 91.5389 91.4664 91.578 91.4499 91.6172C91.4366 91.6488 91.4232 91.6805 91.4098 91.7121Z"
        fill={fill}
      />
    </svg>
  );
};

export default BlueHalfCircle;
