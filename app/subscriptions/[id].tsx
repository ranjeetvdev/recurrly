import { Link, useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaVIew = styled(RNSafeAreaView);

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaVIew className="flex-1 bg-background p-5">
      <Text>Subscription details: {id}</Text>
      <Link href="/">Go back</Link>
    </SafeAreaVIew>
  );
};

export default SubscriptionDetails;
