import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  height: 64px;
  background-color: #fff;
  border: 1px solid #dddddd;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  a:first-child {
    padding: 0px 25px 0px 25px;
    border-right: 1px solid #dddddd;
    margin-right: 25px;
    display: block;
    text-align: center;

    img {
      height: 26px;
      width: auto;
    }
  }
  a {
    font-size: 15px;
    color: #999999;
    padding: 0px 10px 0px 10px;
    text-decoration: none;
    transition: color 0.8s;

    &:hover {
      color: ${colors.primary};
    }

    &.active {
      color: #444;
    }
  }
`;

export const Logo = styled.div`
  display: block;
  text-align: center;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  strong {
    color: #666666;
    padding: 6px 0 6px 0;
    /* Limit for characters */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 95px;
    /* Limit for characters */
  }

  button {
    background: none;
    border: none;
    color: #de3b3b;
    transition: color 0.8s;

    &:hover {
      color: ${darken(0.2, '#de3b3b')};
    }
  }
`;
