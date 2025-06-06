import { Gallery } from "@mono/ui";
import "./home.css";
import { useDataHome } from "./useDataHome";

export const Home = () => {
  const { data } = useDataHome();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <center className="homeWrapper">
      <Gallery data={data} />
    </center>
  );
};
