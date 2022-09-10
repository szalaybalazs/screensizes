import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, useMemo } from 'react';
import Container from '../../../components/Container';
import Grid from '../../../components/Grid';
import GridItem from '../../../components/GridItem';
import Title from '../../../components/Title';
import { deviceTypeMap, models } from '../../../core/models';
import { iConfig } from '../../../types/config';
import styled from 'styled-components';
import BreadCrumbs from '../../../components/BreadCrumbs';

interface iModelProps {
  models: { [key: string]: iConfig };
  device: string;
}

const Year = styled.h2`
  font-size: 3.75rem;
  margin: 0;
  font-weight: 800;
  margin-top: 96px;
  margin-bottom: 12px;
  color: var(--colour-secondary);
`;

const Model: FC<iModelProps> = ({ models, device }) => {
  const steps = useMemo(() => {
    return [
      { key: 'devices', label: 'Devices', href: '/' },
      {
        key: device,
        label: deviceTypeMap[device],
        current: true,
        href: `/devices/${device}`,
      },
    ];
  }, [device]);
  const years = useMemo(() => {
    const yearList = Array.from(new Set(Object.values(models).map((m) => m.release)));

    const years = yearList.map((year) => {
      const modelList = Object.values(models).filter((m) => m.release === year);

      return { year, models: modelList };
    });

    return years.sort((a, b) => b.year - a.year);
  }, []);
  return (
    <Container>
      <BreadCrumbs steps={steps} />
      <Title title={deviceTypeMap[device]} subtitle='Select a model to view all the details of the product' />

      <>
        {years.map(({ year, models }) => (
          <>
            <Year>{year}</Year>
            <Grid>
              {models.map((model) => (
                <GridItem
                  key={model.id}
                  title={model.name.long}
                  href={`/devices/${device}/${model.id}`}
                  image={`https://screensizes.app/images/models/${model.id}.png`}
                />
              ))}
            </Grid>
          </>
        ))}
      </>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(models).map((device) => ({
    params: { device },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { device } = context.params;
    const deviceModels = models[device as string];

    if (!deviceModels) return { notFound: true };
    return {
      // Passed to the page component as props
      props: { models: deviceModels, device },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Model;
