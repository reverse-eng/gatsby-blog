import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋🏾 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
        box-shadow: 0.09em 0.09em 0.09em 0.09em #5d5b5b;
        cursor: pointer;
        &:hover {
          background: Lavender;
          color: black;
        }
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
