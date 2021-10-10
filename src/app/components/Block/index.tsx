import styled from 'styled-components';

export default styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}>`
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
`;
