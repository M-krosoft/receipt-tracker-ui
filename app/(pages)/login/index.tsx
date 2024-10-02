import { Link } from "expo-router";
import { View, Button } from "react-native";

export default function Login() {
  return (
    <View>
      <Link href={"/home"}>
        <Button title="Login"></Button>
      </Link>
    </View>
  );
}
