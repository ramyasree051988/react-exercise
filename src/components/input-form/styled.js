import styled,{css} from 'styled-components';
import { TextField,Checkbox,LegendWrapper } from "@cruk/cruk-react-components";

const baseMargins = css`
    margin: 20px 0; 
`;

export const StyledTextField = styled(TextField)`
    ${baseMargins}
`
export const StyledCheckbox = styled(Checkbox)`
    ${baseMargins}
    border: 1px solid red;
`
export const StyledLegendWrapper = styled(LegendWrapper)`
    ${baseMargins}
`;

export const StyledDiv = styled.div`
    ${baseMargins}
`
