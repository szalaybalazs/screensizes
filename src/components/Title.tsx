import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  margin-top: 64px;
  padding-bottom: 48px;
  width: var(--max-width);
  max-width: calc(100vw - 64px);
`;

const TitleWrapper = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 1.125rem;
  margin: 0;
  margin-top: 8px;
`;
interface iTitleProps {
  title: string;
  subtitle: string;
}

const Title: FC<iTitleProps> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default Title;
