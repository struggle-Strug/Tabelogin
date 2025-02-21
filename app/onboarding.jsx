import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { router, useRouter } from "expo-router";

const onboarding = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [introduction, setIntroduction] = useState("");
  const router = useRouter();
  const handleOnBoarding = () => {
    router.replace("/mypage");
  };
  return (
    <View className="flex-1">
      <Text className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[80%] mx-auto mt-8">
        食べログ×インスタ
      </Text>
      <View className="mt-20">
        <TextInput
          placeholder="名前"
          onChangeText={(value) => setName(value)}
          className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[70%] mx-auto mt-8"
        />
        <TextInput
          placeholder="性別"
          onChangeText={(value) => setGender(value)}
          className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[70%] mx-auto mt-8"
        />
        <TextInput
          placeholder="年齢"
          onChangeText={(value) => setAge(value)}
          className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[70%] mx-auto mt-8"
        />
        <TextInput
          multiline
          mode="outlined"
          numberOfLines={4}
          placeholder="自己紹介"
          onChangeText={(value) => setIntroduction(value)}
          className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[70%] mx-auto mt-8 min-h-40"
        />
        <CustomButton
          onPress={handleOnBoarding}
          title="登録"
          textStyles="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[30%] mx-auto mt-8"
        />
      </View>
    </View>
  );
};

export default onboarding;
