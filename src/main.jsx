import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Declarative Mode */}

    {/* <BrowserRouter>
      <Routes>
        <Route path="/secret" element={<App />}></Route>
      </Routes>
    </BrowserRouter> */}

    {/* Data Mode */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
