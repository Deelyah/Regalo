import { Outlet } from "react-router-dom";
import Layout from "../../components/layout";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
