export type Props = {
  type: "decimal" | "integer";
  label: string;
} & {
  onChange: (value: number) => void;
};
