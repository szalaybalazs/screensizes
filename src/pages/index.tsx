import { GetStaticProps } from 'next';
import { FC } from 'react';
import Container from '../components/Container';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import Title from '../components/Title';
import { deviceTypeMap, models } from '../core/models';
import { iConfig } from '../types/config';

interface iindexProps {
  devices: { device: string; model: iConfig }[];
}

const index: FC<iindexProps> = ({ devices }) => {
  return (
    <Container>
      <Title title='Devices' subtitle='Choose the type of device you want to inspect' />
      <Grid>
        <>
          {devices.map((device) => (
            <GridItem
              href={`/devices/${device.device}`}
              key={device.device}
              {...device}
              title={deviceTypeMap[device.device]}
              image={`https://screensizes.app/images/models/${device.model.id}.png`}
            />
          ))}
        </>
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const devices = Object.keys(models).map((device) => {
    const model = Object.values(models[device])[0];

    return {
      device,
      model,
    };
  });

  return { props: { devices } };
};

export default index;
