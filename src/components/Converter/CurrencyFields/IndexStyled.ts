import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
`;

export const Texts = styled.div`
  /* text-align: center; */
  padding-left: 5px;
`;



export const InputCoin = styled.input`
  width: 100%;
  padding: 10px;
  border:1px solid #000;
  outline: none;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus{
    outline: 2px solid var(--color2);
    border:1px solid transparent;
  };
`;

export const InputValue = styled.input.attrs({ type: 'number' })`
  width: 100%;
  padding: 10px;
  border:1px solid #000;
  outline: none;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus{
    outline: 2px solid var(--color2);
    border:1px solid transparent;
  };
`;
