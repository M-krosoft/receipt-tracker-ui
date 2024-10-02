import { useGetTest } from "@/app/api/hooks/test/useGetTest";
import { Link } from "expo-router";
import { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function WelcomePage() {
  const { data, isLoading, isError } = useGetTest();
  useEffect(() => {}, [data]);
  return (
    <View>
      <Text>{data && data.title}</Text>
      <Text> {isLoading && "Loading"}</Text>
      <Text>{isError && "Error"}</Text>
      <Link href={"/login"}>
        <Button title="Login" />
      </Link>
    </View>
  );
}
