import { View } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const signupguide = () => {
  const router = useRouter();
  const handleSignUpGuide = () => {
    router.replace("/onboarding");
  };
  return (
    <View className="flex-1 justify-center">
      <View className="px-8 py-4 border-2 border-[#343434] w-[80%] mx-auto">
        <CustomButton
          onPress={handleSignUpGuide}
          title="メールに送られた認証メールのURLをクリック"
          textStyles="text-xl text-center"
        />
      </View>
    </View>
  );
};

export default signupguide;
