import { useQuery } from "@tanstack/react-query";

// TODO remove this file when first query will be implemented
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export function useGetTest() {
  const { data, isLoading, isError } = useQuery<Todo>({
    queryKey: ["test"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      return response.json();
    },
  });

  return { data, isLoading, isError };
}
