import styled from 'styled-components';

export const Container = styled.div`
    height: 30px;
    background-color: #ffefd5;
    display: flex;
    justify-items: center;
    justify-content: center;
    
    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px 0px 20px;
    }

    @media screen and (max-width: 564px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px 0px 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
`;

export const TextItem = styled.p`
    font-style: italic;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
`