import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const UnForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  background: #fff;

  width: 100%;
  border-radius: 4px;

  > section {
    display: flex;
    justify-content: space-evenly;

    margin-bottom: 16px;

    > div:first-child {
      margin-right: 30px;
    }
  }
`;
// export const HeaderForm = styled.div`
//   padding: 34px 0px;
//   display: flex;
//   justify-content: space-between;

//   > div {
//     display: flex;
//   }
// `;

// export const Title = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   color: ${colors.dark};
// `;

// export const FormContainer = styled.div`
//   width: 100%;
//   background: #fff;
//   border-radius: 4px;
//   padding: 30px 22px;

//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;

//   > div {
//     padding-left: 8px;
//     padding-right: 8px;

//     &:nth-child(1),
//     &:nth-child(2) {
//       width: 50%;
//     }

//     &:last-child {
//       width: 100%;
//       margin-top: 10px;
//     }
//   }
// `;
