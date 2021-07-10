import styled from "styled-components";

export const Content = styled.button`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #835afd;
    color: #fff;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;

    transition: filter .2s;

    img {
        margin-right: 8px;
    }

    &.outlined {
        background: #fff;
        border: 1px solid #835afd;
        color: #835afd;
    }

    &:not(:disabled):hover {
        filter: brightness(.9);
    }

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
`;