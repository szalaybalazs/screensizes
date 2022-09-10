import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background: var(--background-secondary);
  border-radius: 8px;
  height: 64px;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 24px;
  margin-top: 16px;
  padding-inline: 24px;
`;

const StepWrapper = styled.a`
  color: inherit;
`;

interface iStepProps {
  current?: boolean;
}
const StepLabel = styled.span<iStepProps>`
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${(props) => (props.current ? 'var(--colour-primary)' : 'inherit')};
`;

const Devider = styled.span`
  margin-inline: 8px;
  color: var(--colour-secondary);
`;

interface iBreadCrumbsProps {
  steps: {
    key: string;
    label: string;
    href: string;
    options?: { label: string; value: string }[];
    current?: boolean;
  }[];
  onChange?: () => {};
}

const BreadCrumbs: FC<iBreadCrumbsProps> = ({ steps }) => {
  return (
    <Wrapper>
      {steps.map((step, i, steps) => (
        <>
          <Link href={step.href}>
            <StepWrapper key={step.key}>
              <StepLabel current={step.current}>{step.label}</StepLabel>
            </StepWrapper>
          </Link>
          {i < steps.length - 1 && <Devider>/</Devider>}
        </>
      ))}
    </Wrapper>
  );
};

export default BreadCrumbs;
