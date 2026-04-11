import { styled } from "nativewind";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import ListHeading from "@/components/ListHeading";
import dayjs from "dayjs";
import { router } from "expo-router";

const SafeAreaView = styled(RNSafeAreaView);

const WEEK_DATA = [
  { day: "Mon", value: 36 },
  { day: "Tue", value: 30 },
  { day: "Wed", value: 22 },
  { day: "Thu", value: 40, highlight: true },
  { day: "Fri", value: 34 },
  { day: "Sat", value: 20 },
  { day: "Sun", value: 24 },
];

const HISTORY = [
  {
    id: "1",
    name: "Claude",
    date: "June 25, 12:00",
    price: 9.84,
    color: "bg-yellow-400",
  },
  {
    id: "2",
    name: "Canva",
    date: "June 30, 16:00",
    price: 43.89,
    color: "bg-subscription",
  },
];

const MAX_BAR_HEIGHT = 120;

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      {/* Header */}
      <Text className="text-3xl font-sans-bold text-primary mb-6">
        Monthly Insights
      </Text>

      {/* Upcoming */}
      <ListHeading
        title="Upcoming"
        onPress={() => {
          router.push("/(tabs)");
        }}
      />

      {/* Chart Card */}
      <View className="rounded-2xl bg-muted p-5 mb-6">
        <View className="flex-row items-end justify-between h-36">
          {WEEK_DATA.map((item) => {
            const height = (item.value / 40) * MAX_BAR_HEIGHT;

            return (
              <View key={item.day} className="items-center gap-2">
                {item.highlight && (
                  <View className="mb-1 rounded-full bg-background px-2 py-0.5">
                    <Text className="text-xs font-sans-bold text-accent">
                      ${item.value}
                    </Text>
                  </View>
                )}

                <View
                  style={{ height }}
                  className={`w-3 rounded-full ${
                    item.highlight ? "bg-accent" : "bg-primary"
                  }`}
                />

                <Text className="text-xs font-sans-semibold text-muted-foreground">
                  {item.day}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Expenses */}
      <View className="rounded-2xl bg-card p-5 mb-6 border border-border flex-row justify-between">
        <View>
          <Text className="text-xl font-sans-bold text-primary">Expenses</Text>
          <Text className="text-sm font-sans-medium text-muted-foreground mt-1">
            {dayjs().format("MMMM YYYY")}
          </Text>
        </View>

        <View>
          <Text className="text-xl font-sans-extrabold text-primary">
            -$424.63
          </Text>
          <Text className="text-sm font-sans-semibold text-success mt-1 text-right">
            +12%
          </Text>
        </View>
      </View>

      {/* History */}
      <ListHeading title="History" onPress={() => {}} />
      <FlatList
        data={HISTORY}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item }) => (
          <View
            className={`rounded-2xl p-4 flex-row items-center justify-between ${item.color}`}
          >
            <View>
              <Text className="text-lg font-sans-bold text-primary">
                {item.name}
              </Text>

              <Text className="text-sm font-sans-semibold text-black/60">
                {item.date}
              </Text>
            </View>

            <View className="items-end">
              <Text className="text-lg font-sans-bold text-primary">
                ${item.price.toFixed(2)}
              </Text>

              <Text className="text-sm font-sans-medium text-black/60">
                per month
              </Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Insights;
