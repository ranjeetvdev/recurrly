import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const subscriptions = () => {
  return (
    <SafeAreaView className="p-5 bg-background flex-1">
      <Text>subscriptions</Text>
    </SafeAreaView>
  );
};

export default subscriptions;
