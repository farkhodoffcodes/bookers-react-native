import React from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInputMask from "react-native-text-input-mask";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationNav from "@/components/navigation/notification_nav";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const cardNumberRegExp = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
const expirationDateRegExp = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(cardNumberRegExp, "Karta raqami xato. 16 ta raqam kiriting.")
    .required("Karta raqami kerak."),
  expirationDate: Yup.string()
    .matches(expirationDateRegExp, "Sana formati MM/YY bo'lishi kerak.")
    .required("Karta sanasi kerak."),
});

const CreateCard: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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
          <SafeAreaView>
            <NotificationNav
              deleteIcon={false}
              name="salom"
              backIcon={() => navigation.goBack()}
            />
          </SafeAreaView>
          <TextInputMask
            style={[
              styles.input,
              touched.cardNumber && errors.cardNumber ? styles.errorInput : null,
            ]}
            placeholder="Karta raqami (16 ta raqam)"
            keyboardType="numeric"
            onChangeText={(formatted, extracted) => {
              setFieldValue("cardNumber", extracted);
            }}
            onBlur={handleBlur("cardNumber")}
            value={values.cardNumber}
            mask="[0000] [0000] [0000] [0000]"
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
            maxLength={5}
            onChangeText={handleChange("expirationDate")}
            onBlur={handleBlur("expirationDate")}
            value={values.expirationDate}
          />
          {touched.expirationDate && errors.expirationDate && (
            <Text style={styles.errorText}>{errors.expirationDate}</Text>
          )}

          <TouchableOpacity onPress={handleSubmit as any} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Yuborish</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
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
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CreateCard;
