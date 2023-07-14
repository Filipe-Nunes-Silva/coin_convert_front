import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--color1);
    padding: 5px;
    height: 100vh;

    @media (min-width:800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Header = styled.header`
    overflow: hidden;
    color:#fff;
    text-align: center;
    h1{
        font-weight: bolder;
    };
`;

