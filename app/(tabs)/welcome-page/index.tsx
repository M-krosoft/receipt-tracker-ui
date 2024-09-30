import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function WelcomePage() {
  return (
    <View>
      <Text>Hello login to use app</Text>
      <Link href={"/login"}>
        <Button title="Login" />
      </Link>
    </View>
  );
}
