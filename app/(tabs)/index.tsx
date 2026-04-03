import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link
        href="/onborading"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Go to SignIn
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Go to SignUp
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: {
            id: "claude",
          },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
