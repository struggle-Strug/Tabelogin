import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { router, useRouter } from "expo-router";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignUp = () => {
    // After signup, go to the dashboard
    router.replace("/signupguide");
  };
  return (
    <View className="flex-1">
      <Text className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[80%] mx-auto mt-8">
        食べログ×インスタ
      </Text>
      <View className="mt-20">
        <Text className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[50%] mx-auto mt-8">
          会員登録
        </Text>
        <TextInput
          placeholder="メールアドレス"
          onChangeText={(value) => setEmail(value)}
          className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[70%] mx-auto mt-8"
        />
        <TextInput
          placeholder="パスワード"
          onChangeText={(value) => setPassword(value)}
          className="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[70%] mx-auto mt-8"
        />
        <CustomButton
          onPress={handleSignUp}
          title="登録"
          textStyles="text-2xl text-center px-8 py-4 border-2 border-[#343434] w-[30%] mx-auto mt-8"
        />
      </View>
    </View>
  );
};

export default signup;
