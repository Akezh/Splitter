import { FC } from "react";

import { Props } from "./types";

export const CheckoutItem: FC<Props> = ({
  className = "",
  heading,
  subHeading,
  value,
}) => {
  return (
    <div className={`flex justify-between align-middle ${className}`}>
      <div>
        <p className="text-lg font-semibold text-white">{heading}</p>
        <p className="font-semibold text-md text-splitter-gray-text">
          {subHeading}
        </p>
      </div>
      <p className="text-5xl font-extrabold text-splitter-blue-500">${value}</p>
    </div>
  );
};
