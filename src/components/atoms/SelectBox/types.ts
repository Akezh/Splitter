export type Props = {
  label: string;
  value: number;
} & {
  onSelect: (value: number) => void;
};
