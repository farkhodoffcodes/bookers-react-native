import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaskInput from "react-native-mask-input";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalButton from "@/components/(buttons)/modal-btn";

const cardNumberRegExp = /^[0-9]{16}$/;

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(cardNumberRegExp, "Karta raqami xato. 16 ta raqam kiriting.")
    .required("Karta raqami kerak."),
});

const CreateCard: React.FC = () => {
  return (
    <Formik
      initialValues={{ cardNumber: "", expirationDate: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Введите данные карты</Text>
          <MaskInput
            style={[
              styles.input,
              touched.cardNumber && errors.cardNumber
                ? styles.errorInput
                : null,
            ]}
            placeholder="Karta raqami (16 ta raqam)"
            placeholderTextColor="#828282"
            keyboardType="numeric"
            maxLength={19}
            onChangeText={(formatted, extracted) => {
              setFieldValue("cardNumber", extracted);
            }}
            onBlur={handleBlur("cardNumber")}
            mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
            value={values.cardNumber}
          />
          {touched.cardNumber && errors.cardNumber && (
            <Text style={styles.errorText}>{errors.cardNumber}</Text>
          )}

          <MaskInput
            style={[
              styles.input,
              touched.expirationDate && errors.expirationDate
                ? styles.errorInput
                : null,
            ]}
            placeholder="MM/YY"
            placeholderTextColor="#828282"
            keyboardType="numeric"
            maxLength={5}
            onChangeText={(formatted, extracted) => {
              setFieldValue("expirationDate", extracted);
            }}
            onBlur={handleBlur("expirationDate")}
            value={values.expirationDate}
            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
          />
          {touched.expirationDate && errors.expirationDate && (
            <Text style={styles.errorText}>{errors.expirationDate}</Text>
          )}

          <ModalButton
            title="Yuborish"
            backgroundColor="#828282"
            textColor="#fff"
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    marginBottom: 15,
    fontSize: 18,
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
});

export default CreateCard;
