import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  background-color: #5c100a ;
  padding: 20px;
  border: 1px solid #050000;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const TitleInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  span {
    color: #030bfc;
  }
`;

export const InputField = styled.input`
  padding: 5px;
  font-size: 16px;
  color: black;
  text-align: center;
  font-weight: 500;
  border-color: #050000;
  border-radius: 10px;
  background-color: #f28a8a;
  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  outline: none;
`;

export const ButtonAdd = styled.button`
  width: fit-content;
  border-radius: 10px;
  border-color: #050000;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  background-color: #f28a8a;
  outline: none;
  &:hover {
    background-color: #5c100a;
    color: #fcf7f7;
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;
