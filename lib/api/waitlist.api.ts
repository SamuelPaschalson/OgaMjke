import { api } from "@/lib/api/api.config";
import { WaitlistSchema } from "@/components/waitlist";

export const addToWaitlist = async (data: WaitlistSchema) =>
  await api.post("/waitlist", data);
