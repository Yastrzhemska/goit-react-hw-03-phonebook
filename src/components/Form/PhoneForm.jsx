import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { StyledForm, Label, StyledErrorMessage } from './PhoneForm.styled';

const schema = yup.object({
  name: yup.string().min(3, 'Too short').max(15, 'Too long').required(),
  tel: yup.number().min(5, 'Too short  phone number').positive().required(),
});

export const PhoneForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        tel: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
        console.log(values);
      }}
    >
      <StyledForm>
        <Label>
          Name
          <Field name="name" type="text" />
          <StyledErrorMessage component="div" name="name" />
        </Label>
        <Label>
          Number
          <Field name="tel" type="tel" />
          <StyledErrorMessage component="div" name="tel" />
        </Label>

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
