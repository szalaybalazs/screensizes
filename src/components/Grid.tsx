import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 48px;
`;

interface iGridProps {
  children: ReactNode;
}

const Grid: FC<iGridProps> = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default Grid;
