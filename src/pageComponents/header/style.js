import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: orange;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleHeader = styled.p`
    padding-left: 10px;
    font-size: 28px;
    color: #fff;
    font-weight: bold;
`;

export const TextHeader = styled.p`
    padding-right: 10px;
    font-size: 16px;
    color: #fff;
    font-style: italic;
`;