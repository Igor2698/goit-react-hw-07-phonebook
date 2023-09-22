import React from 'react';
import { add } from 'redux/contactsSlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors/selectors';

import { nanoid } from 'nanoid';
import {
  StyledForm,
  Label,
  StyledField,
  ErrorMsg,
  InputContainer,
  ButtonForm,
} from './Form.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(3, 'Too Short!')
    .required('This field is required, please fill that'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-00-00')
    .required('This field is required, please fill that'),
});

const MyForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        if (
          contacts.find(
            contact =>
              contact.name.toLowerCase() === name.toLowerCase() ||
              contact.number === number
          )
        ) {
          return alert('Phonebook already has this values');
        }
        dispatch(add({ name, number, id: nanoid() }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <InputContainer>
          <StyledField type="text" name="name" placeholder=" " />
          <Label htmlFor="name">Please enter name:</Label>

          <ErrorMsg name="name" component="div" />
        </InputContainer>
        <InputContainer>
          <StyledField type="tel" name="number" placeholder=" " />
          <Label htmlFor="number">Please enter number:</Label>

          <ErrorMsg name="number" component="div" />
        </InputContainer>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </StyledForm>
    </Formik>
  );
};

export default MyForm;
