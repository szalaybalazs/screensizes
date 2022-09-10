import { FC } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Title from '../components/Title';
import { iConfig } from '../types/config';

const Heading = styled.h2`
  font-size: 1.75rem;
  margin: 0;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin: 0;
  margin-top: 1.25rem;
`;
interface iindexProps {
  devices: { device: string; model: iConfig }[];
}

const index: FC<iindexProps> = ({ devices }) => {
  return (
    <Container>
      <Title title='Compare' subtitle='Compare all the features of devices in a certain category' />
      <Wrapper>
        <Heading>Coming soon.</Heading>
        <Subtitle>I am currently working on this tab. Check back later. 👨‍💻</Subtitle>
      </Wrapper>
    </Container>
  );
};

export default index;
