import styled from 'styled-components';

import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 3px solid black;
  border-radius: 3px;
  padding: 10px;
  margin-left: 25px;
  max-width: 350px;
`;
export const Label = styled.label`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`;
