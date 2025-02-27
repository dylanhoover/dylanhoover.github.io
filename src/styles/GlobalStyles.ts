import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-background: ${theme.colors.background};
    --color-text: ${theme.colors.text};
    /* Add more CSS variables as needed */
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: Arial, sans-serif; /* Change to your preferred font */
  }
  /* Add more global styles as needed */
`;

export default GlobalStyles;
