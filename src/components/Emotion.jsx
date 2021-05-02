/** @jsxRuntime classic */
/** @jsx jsx*/

import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const conatinerStyle = css`
    border: solid 2px green;
    border-radius: 20px;
    padding: 8px;
  `;
  return (
    <div css={conatinerStyle}>
      <p>Emotion</p>
      <button>fight!</button>
      <p>ddd</p>
    </div>
  );
};
