import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  padding: 5px 80px;
  border: 2px solid var(--red);
  border-radius: 16px;
  color: var(--red);
  font-size: 16px;
  transition: 0.5s ease;
  background: transparent;

  &:hover {
    background: linear-gradient(225.27deg, #f95e3f 16.17%, #ff7457 75.59%);
    color: var(--white);
  }
`;
