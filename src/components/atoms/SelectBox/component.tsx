import { FC, useCallback } from "react";

import { Props } from "./types";

export const SelectBox: FC<Props> = ({ label, value, onSelect }) => {
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
      className="flex justify-center p-4 align-middle rounded-lg bg-splitter-blue-800 hover:bg-splitter-blue-400"
      onClick={handleClick(value)}
      onKeyDown={handleClick(value)}
    >
      <p className="text-2xl text-white">{label}</p>
    </div>
  );
};
