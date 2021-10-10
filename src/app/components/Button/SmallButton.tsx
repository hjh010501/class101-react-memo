import * as React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 36px;
  min-width: 32px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  & svg {
    fill: #646464;
  }
`;

export default function SmallButton({
  className,
  onClick,
  Icon,
}: {
  className?: string;
  onClick?: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <Circle onClick={onClick} className={className}>
      <Icon />
    </Circle>
  );
}
