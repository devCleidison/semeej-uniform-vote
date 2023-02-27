import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";

import { VoteProvider } from "./context/VoteContext";

import { Router } from "./routes";

export const App = () => {
  const [vote, setVote] = useState(0);

  return (
    <VoteProvider value={{ vote }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </VoteProvider>
  );
};
