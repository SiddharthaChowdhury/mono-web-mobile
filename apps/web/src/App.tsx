import { Home } from "./pages/home/Home";
import { AppDataProvider } from "@mono/data";

const App = () => {
  return (
    <AppDataProvider>
      <Home />
    </AppDataProvider>
  );
};

export default App;
