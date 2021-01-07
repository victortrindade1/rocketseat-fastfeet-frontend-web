import styled, { keyframes } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const containerAppear = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-height: 70%;
  min-height: 30%;
  height: auto;
  max-width: 30%;
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  display: inline-block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${containerAppear} 200ms linear backwards;
`;

export const Div = styled.div`
  border-bottom: 1px solid #eee;
  padding: 4px 0px;
  height: auto;

  :last-child {
    border: none;
  }
`;

export const Title = styled.div`
  color: #444;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 0px;
`;

export const Text = styled.div`
  color: #666;
  font-size: 16px;
  padding: 4px 0px;

  > strong {
    margin-right: 5px;
  }
`;

export const Signature = styled.img.attrs(props => ({
  src: props.url,
  alt: 'signature',
}))`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 90vh;
  /* padding: 25px; */
`;
