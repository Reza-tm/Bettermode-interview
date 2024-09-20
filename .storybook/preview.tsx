import type { Preview } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";
import "../src/styles/dark.css";
import "../src/styles/light.css";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#eff2fa" },
        { name: "dark", value: "#1a1a21" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
