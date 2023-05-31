import { FC, useCallback } from "react";

import { Props } from "./types";

export const SelectBox: FC<Props> = ({
  label,
  value,
  isSelected,
  onSelect,
}) => {
  const handleClick = useCallback(
    (percent: number) => () => {
      onSelect(percent);
    },
    [onSelect]
  );

  return (
    <div
      key={label}
      tabIndex={0}
      role="button"
      className={`flex justify-center p-4 align-middle rounded-lg hover:bg-splitter-blue-400 ${
        isSelected ? "bg-splitter-blue-200" : "bg-splitter-blue-800"
      }`}
      onClick={handleClick(value)}
      onKeyDown={handleClick(value)}
    >
      <p
        className={`text-2xl ${
          isSelected ? "text-splitter-blue-800" : "text-white"
        }`}
      >
        {label}
      </p>
    </div>
  );
};
