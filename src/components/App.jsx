import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
import Home from "pages/home/home";

const Loader = lazy(() => import("components/Loader/Loader.jsx"));
const Tweets = lazy(() => import("pages/tweets/tweets"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
