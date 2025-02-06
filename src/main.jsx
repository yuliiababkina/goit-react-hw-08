import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

import { persistor, store } from "./redux/store";

import App from "./components/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                    <Toaster />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
);
