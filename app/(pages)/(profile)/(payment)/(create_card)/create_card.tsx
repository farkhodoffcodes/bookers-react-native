import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalButton from "@/components/(buttons)/modal-btn";

const cardNumberRegExp = /^[0-9]{16}$/;
const expirationDateRegExp = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(cardNumberRegExp, "Karta raqami xato. 16 ta raqam kiriting.")
    .required("Karta raqami kerak."),
  expirationDate: Yup.string()
    .matches(expirationDateRegExp, "Sana formati MM/YY bo'lishi kerak.")
    .required("Karta sanasi kerak."),
});

const CreateCard = () => (
  <Formik
    initialValues={{ cardNumber: "", expirationDate: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text className="text-white mb-5 text-lg">Введите данные карты</Text>
          <TextInput
            style={[
              styles.input,
              touched.cardNumber && errors.cardNumber
                ? styles.errorInput
                : null,
            ]}

            placeholder="Karta raqami (16 ta raqam) "
            placeholderTextColor="#828282"
            keyboardType="numeric"
            maxLength={16}
            onChangeText={handleChange("cardNumber")}
            onBlur={handleBlur("cardNumber")}
            value={values.cardNumber}
          />

          {touched.cardNumber && errors.cardNumber && (
            <Text style={styles.errorText}>{errors.cardNumber}</Text>
          )}

          <TextInput
            style={[
              styles.input,
              touched.expirationDate && errors.expirationDate
                ? styles.errorInput
                : null,
            ]}
            placeholder="MM/YY"
            keyboardType="numeric"
            placeholderTextColor="#828282"
            maxLength={5}
            onChangeText={handleChange("expirationDate")}
            onBlur={handleBlur("expirationDate")}
            value={values.expirationDate}
          />
          {touched.expirationDate && errors.expirationDate && (
            <Text style={styles.errorText}>{errors.expirationDate}</Text>
          )}
        </View>

        <ModalButton title="Yuborish" backgroundColor="#828282" textColor="#fff"  onPress={() => handleSubmit()} />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4B4B64",
    color: "#fff",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#4B4B64",
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
});

export default CreateCard;
