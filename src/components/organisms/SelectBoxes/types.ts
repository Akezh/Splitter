export type Props = {
  options: Array<{
    label: string;
    value: number;
  }>;
} & {
  onSelectBox: (value: number) => void;
};
