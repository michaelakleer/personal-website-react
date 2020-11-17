import React from "react";
import Breakpoint, { BreakpointProvider } from "react-socks";

import Website from "./Website";
import "./App.css";

export default function App() {
  return (
    <BreakpointProvider>
      <div className="App">
        <Breakpoint small down>
          <Website />
        </Breakpoint>
        <Breakpoint medium only>
          <Website />
        </Breakpoint>
        <Breakpoint large up>
          <Website />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  );
}
