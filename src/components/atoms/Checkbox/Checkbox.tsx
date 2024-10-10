import { Checkbox as AntCheckbox } from "antd";

type Props = { checked: boolean; onChange: () => void };

export const Checkbox = ({ checked, onChange }: Props): JSX.Element => (
  <AntCheckbox checked={checked} onChange={onChange} />
);
