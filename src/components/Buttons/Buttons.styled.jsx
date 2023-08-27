import styled from 'styled-components';

export const Buttons = styled.button`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  justify-content: space-between;
  width: 120px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.nice};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    color: white;
    background-color: ${p => p.theme.colors.nice};
  }
`;
