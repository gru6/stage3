import React from "react";
import ReactDOMServer, {
  RenderToPipeableStreamOptions,
} from "react-dom/server";
import { App } from "./App";
import { StaticRouter } from "react-router-dom/server";
import { setupStore } from "./store";
import { Provider } from "react-redux";

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  return ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
}
