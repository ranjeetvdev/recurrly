import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait for auth to load before rendering anything
  if (!isLoaded) return null;

  // Redirect to home if use is already signed in
  if (isSignedIn) return <Redirect href="/(tabs)" />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default AuthLayout;
