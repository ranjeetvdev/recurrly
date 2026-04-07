import { create } from "zustand";

import { HOME_SUBSCRIPTIONS } from "@/constants/data";

interface SubscriptionStore {
  subscriptions: Subscription[];
  addSubscription: (subscription: Subscription) => void;
  setSubscriptions: (subscriptions: Subscription[]) => void;
}

export const useSubscriptionStore = create<SubscriptionStore>((set) => ({
  subscriptions: HOME_SUBSCRIPTIONS,

  addSubscription: (subscription) =>
    set((state) => {
      const exists = state.subscriptions.some((s) => s.id === subscription.id);
      if (exists) return state;
      return { subscriptions: [subscription, ...state.subscriptions] };
    }),

  setSubscriptions: (subscriptions) => set({ subscriptions }),
}));
