export type Props = {
  label: string;
  value: number;
  isSelected: boolean;
} & {
  onSelect: (value: number) => void;
};
