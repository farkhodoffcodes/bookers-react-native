import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const cardNumberRegExp = /^[0-9]{16}$/;
const expirationDateRegExp = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(cardNumberRegExp, 'Karta raqami xato. 16 ta raqam kiriting.')
    .required('Karta raqami kerak.'),
  expirationDate: Yup.string()
    .matches(expirationDateRegExp, 'Sana formati MM/YY bo\'lishi kerak.')
    .required('Karta sanasi kerak.'),
});

const CreateCard = () => (
  <Formik
    initialValues={{ cardNumber: '', expirationDate: '' }}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            touched.cardNumber && errors.cardNumber ? styles.errorInput : null,
          ]}
          placeholder="Karta raqami (16 ta raqam)"
          keyboardType="numeric"
          maxLength={16}
          onChangeText={handleChange('cardNumber')}
          onBlur={handleBlur('cardNumber')}
          value={values.cardNumber}
        />
        {touched.cardNumber && errors.cardNumber && (
          <Text style={styles.errorText}>{errors.cardNumber}</Text>
        )}

        <TextInput
          style={[
            styles.input,
            touched.expirationDate && errors.expirationDate ? styles.errorInput : null,
          ]}
          placeholder="MM/YY"
          keyboardType="numeric"
          maxLength={5}
          onChangeText={handleChange('expirationDate')}
          onBlur={handleBlur('expirationDate')}
          value={values.expirationDate}
        />
        {touched.expirationDate && errors.expirationDate && (
          <Text style={styles.errorText}>{errors.expirationDate}</Text>
        )}

        <Text onPress={handleSubmit} style={styles.submitButton}>Yuborish</Text>
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default CreateCard;
