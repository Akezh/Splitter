export type Props = {
  options: Array<{
    label: string;
    value: number;
    isSelected: boolean;
  }>;
} & {
  onSelectBox: (value: number) => void;
};
