import { StyledCheckbox } from './StyledCheckbox';


type Props = { checked: boolean; onChange: () => void };

export const Checkbox = ({ checked, onChange }: Props): JSX.Element => (
  <StyledCheckbox checked={checked} onChange={onChange} />
);
