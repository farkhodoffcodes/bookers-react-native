import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationNav from "@/components/navigation/notification_nav";
import { useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import ModalButton from "@/components/(buttons)/modal-btn";

export default function CardPage() {
  const navigation = useNavigation();
  const [card, setCard] = useState(null);

  return (
    <View className="flex-1 px-5">
      <SafeAreaView>
        <NotificationNav
          deleteIcon={false}
          name="salom"
          backIcon={() => navigation.goBack()}
        />
      </SafeAreaView>

      {card ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View>
            <Text className="text-white">Lorem ipsum</Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <AntDesign name="creditcard" size={100} color="white" />
          <Text className="text-white">Вы не добавили платежную карту</Text>
          <Text className="text-white">
            Добавьте карту, чтобы быстро и легко совершать платежи через
            приложение
          </Text>
          <ModalButton
            backgroundColor="#9C0A35"
            textColor="#fff"
            title="Добавить карту"
            onPress={() => {}}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
