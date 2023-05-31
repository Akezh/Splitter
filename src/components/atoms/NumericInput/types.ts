export type Props = {
  icon?: "dollar" | "person";
  type: "decimal" | "integer";
  label: string;
} & {
  onChange: (value: number) => void;
};
