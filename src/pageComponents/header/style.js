import styled from 'styled-components';

export const Container = styled.header`
    background-color: orange;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

   @media screen and (max-width: 777px) {
        
    }
`;

export const Image = styled.img`
    width: 100px;
    height: 60px;
`;

export const TitleHeader = styled.p`
    padding-left: 10px;
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0;
`;

export const TextHeader = styled.p`
    padding-right: 10px;
    font-size: 16px;
    color: #fff;
    font-style: italic;
    margin-bottom: 0;
`;