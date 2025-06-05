import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

type TProps = PropsWithChildren;

const queryClient = new QueryClient();
export const AppDataProvider = ({ children }: TProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
