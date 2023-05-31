import { ChangeEvent, FC, useCallback, useState } from "react";

import { SelectBox } from "../../atoms/SelectBox";
import { Props } from "./types";

const INTEGER_REGEX = /^\d+$/;

export const SelectBoxes: FC<Props> = ({ options, onSelectBox }) => {
  const [selectOptions, setSelectOptions] = useState(options);
  const [inputValue, setInputValue] = useState<string | number>();

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (INTEGER_REGEX.test(e.target.value) || !e.target.value) {
        setSelectOptions(options);
        setInputValue(e.target.value);
        onSelectBox(Number(e.target.value));
      }
    },
    [onSelectBox, options]
  );

  const handleSelectChange = useCallback(
    (value: number) => {
      setInputValue("");
      onSelectBox(value);

      const newOptions = options.map((option) =>
        option.value !== value
          ? option
          : {
              ...option,
              isSelected: true,
            }
      );
      setSelectOptions(newOptions);
    },
    [onSelectBox, options]
  );

  return (
    <div>
      <p className="mb-4 font-bold text-splitter-gray-text">Select Tip %</p>
      <div className="grid grid-cols-3 gap-4">
        {selectOptions.map(({ label, value, isSelected }) => (
          <SelectBox
            key={label}
            label={label}
            value={value}
            onSelect={handleSelectChange}
            isSelected={isSelected}
          />
        ))}
        <input
          className="py-4 pr-3 text-2xl font-extrabold bg-white border text-end"
          type="text"
          placeholder="Custom"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
