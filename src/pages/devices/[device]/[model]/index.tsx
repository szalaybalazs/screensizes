import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, useMemo } from 'react';
import styled from 'styled-components';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import Container from '../../../../components/Container';
import { deviceTypeMap, models } from '../../../../core/models';
import { iConfig } from '../../../../types/config';

interface iModelProps {
  model: string;
  device: string;
  config: iConfig;
}

const Banner = styled.img`
  width: 40%;
  margin-bottom: 48px;
  margin-top: 48px;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 8px;
`;
const Dimensions = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Model: FC<iModelProps> = ({ model, device, config }) => {
  const steps = useMemo(() => {
    return [
      { key: 'devices', label: 'Devices', href: '/' },
      {
        key: device,
        label: deviceTypeMap[device],
        href: `/devices/${device}`,
      },
      { key: model, label: config.name.long, href: `/devices/${device}/${model}`, current: true },
    ];
  }, [model, device]);
  return (
    <Container>
      <BreadCrumbs steps={steps} />
      <Wrapper>
        <Banner src={`https://screensizes.app/images/models/${model}.png`} />
        <Title>{config.name.long}</Title>
        <Dimensions>
          {config.standard.dimensions.width} &times; {config.standard.dimensions.height} PX
        </Dimensions>
      </Wrapper>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(models).map((device) => {
    const modelList = Object.keys(models[device]);
    return modelList.map((model) => ({ params: { model, device } }));
  });
  return {
    paths: paths.flat(100) as any,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { model, device } = context.params;
    const config = models[device as string][model];

    if (!config) return { notFound: true };
    return {
      // Passed to the page component as props
      props: { model, device, config },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Model;
