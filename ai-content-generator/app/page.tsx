import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard"); // Automatically redirect to the dashboard
  return null;
}
