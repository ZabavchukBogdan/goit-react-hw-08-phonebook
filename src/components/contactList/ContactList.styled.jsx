import styled from 'styled-components';

export const ListOfContact = styled.ul`
margin-left: auto;
    margin-right: auto;
    width: 500px;
    padding: 20px;
    background-color: #5c100a;
    border: 1px solid #050000;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 16px;
    button {
        width: fit-content;
        border-radius: 10px;
        border-color: #050000;
        text-align: center;
        font-size: 12px;
        margin-left: 10px;
        cursor: pointer;
        background-color: #f28a8a;
        outline: none;
        &:hover {
            background-color: #5c100a ;
            color: #fcf7f7;
            border-color: #fff;
        }
    }
`;
