import React from "react";
import ReactDom from "react-dom";
import { MainPage } from "./pages/MainPage";
import { DigitalPage } from "./pages/DigitalPage";
import { TurboPage } from "./pages/TurboPage";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Modal from "@modules/Modal/containers/ModalContainer";
import Footer from "./pages/MainPage/components/Footer";
import { GlossSelection } from "./pages/MainPage/components/GlossSelection";
import HelpSelection from "./pages/MainPage/components/HelpSelection";
import { MainMenuTopBlock } from "./pages/MainPage/components/MainMenuTopBlock";
import store from "./store";

import "./global.scss";
import "./mobile.scss";
//import "./all-styles.scss";
import { CoursePage } from "./pages/course";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainMenuTopBlock />
        <Routes>
          <Route
            path="/view_doc.html?mode=komus_digital"
            element={<MainPage />}
          />
          <Route path="komus_digital" element={<MainPage />} />
          <Route
            path="komus_digital/digital_knowledge"
            element={<DigitalPage />}
          />
          <Route path="komus_digital/turbo_knowledge" element={<TurboPage />} />
          <Route path="komus_digital/course/:id" element={<CoursePage />} />

          <Route
            path="*"
            element={<div className="not-found">Страницы не существует</div>}
          />
        </Routes>
        <GlossSelection />
        <HelpSelection />
        <Footer />
        <Modal />
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("komus-number"));
