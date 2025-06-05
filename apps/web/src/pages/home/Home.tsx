import { Button } from "@mono/ui";

export const Home = () => {

  return (
    <div
      style={{ fontFamily: "sans-serif", padding: "20px", textAlign: "center" }}
    >
      <h1>Welcome to your Vite Web App!</h1>
      <div style={{ fontSize: 20, marginBottom: 20 }}>
        This text is from the shared UI package.
      </div>
      <Button title="Click Me (Web)" onPress={handlePress} />

    </div>
  )
};

const handlePress = () => {
    alert("Hello from the Web App (Vite)!");
  };