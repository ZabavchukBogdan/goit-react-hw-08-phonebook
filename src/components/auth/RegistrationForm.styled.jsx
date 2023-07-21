import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  background-color: #5c100a;
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
  font-size: 24px;
  text-align: center;
  font-weight: 700;
   color: #fcf7f7;
`;

export const InputField = styled.input`
  padding: 5px;
  font-size: 24px;
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
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  border-radius: 10px;
  border-color: #050000;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: #f28a8a;
  outline: none;
  &:hover {
    background-color: #5c100a;
    color: #edf3fb;
    border-color: #fff;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
  color: #fcf7f7;
`;
