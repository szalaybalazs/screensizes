import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.a`
  display: block;
  background: var(--background-secondary);
  border: 1px solid var(--border-colour);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 32px;
  color: inherit;
  cursor: pointer;
  &:hover {
    img {
      transform: translateY(-12px);
    }
  }
`;
const ItemType = styled.h2`
  margin: 0;
  margin-bottom: 32px;
`;
const ItemBanner = styled.img`
  width: 80%;
  transition: 320ms;
`;

interface iGridItemProps {
  title: string;
  href: string;
  image: string;
}

const GridItem: FC<iGridItemProps> = ({ title, image, href }) => {
  return (
    <Link href={href}>
      <ItemWrapper>
        <ItemType>{title}</ItemType>
        <ItemBanner src={image} alt={title} />
      </ItemWrapper>
    </Link>
  );
};

export default GridItem;
