import { View, Text } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";

import "@/global.css";
import { router } from "expo-router";
const Home = () => {
  return (
    <View className="flex-1 justify-center items-center gap-8">
      <Text className="text-2xl px-8 py-4 border-2 border-[#343434]">
        食べログ×インスタ
      </Text>
      <CustomButton
        onPress={() => router.push("/signup")}
        title="Start"
        textStyles="border-2 border-[#343434] px-8 py-2"
      />
    </View>
  );
};

export default Home;
