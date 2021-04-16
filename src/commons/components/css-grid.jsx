import styled from 'styled-components';
import React from 'react';

export const CssGrid = styled((props) => <div {...props} />)`
  display: grid;
  grid-auto-flow: ${(props) => props.autoFlow};
  gap: ${(props) => `${(props.gap || 0) * 8}px`};
  justify-content: ${(props) => props.justifyContent};
  place-items: ${(props) => props.placeItems};
`;
