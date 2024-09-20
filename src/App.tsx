import { Layout } from "@/components/layout";
import { HomePage } from "@/pages";
import { LoginPage } from "@/pages/auth/Login";
import { SpacePage } from "@/pages/space";
import { Route, Routes } from "react-router-dom";
import { PostPage } from "@/pages/post";

export const App = () => {
  return (
    <Routes>
      <Route path={"/auth/login"} element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"/:spaceSlug"} element={<SpacePage />} />
        <Route path={"/:spaceSlug/post/:postSlug"} element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
