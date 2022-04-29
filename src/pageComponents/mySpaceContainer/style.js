import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    background-color: #ffefd5;
    display: grid;
    grid-template-columns: repeat(auto-fit, 25rem);
    justify-items: center;
    justify-content: center;
`;

export const TextItem = styled.p`
    font-style: italic;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`