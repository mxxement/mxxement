import { keyframes } from "styled-components";

export const theme = {
  gutter: "40px",
  keyframes: {
    showing: (
      translateX?: string = "0%",
      translateY?: string = "0%"
    ) => keyframes`
      from {
        translate: ${translateX} ${translateY};
      }
      to {
        translate: 0 0%;
        opacity: 1;
      }
    `,
  },
};

export type Theme = typeof theme;
