import { Tabs } from "expo-router";

export default function LoggedUserLayout() {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen
        options={{ headerShown: false, title: "Home" }}
        name="home/index"
      />
      <Tabs.Screen
        options={{ headerShown: false, title: "User" }}
        name="user/index"
      />
    </Tabs>
  );
}
