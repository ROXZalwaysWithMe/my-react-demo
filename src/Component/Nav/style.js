import styled from 'styled-components'

export const Component = styled.div`

`

export const Item = styled.div`
    cursor: pointer;
    height: 70px;
    line-height: 70px;
    text-indent: 10px;
    color: ${({isActive}) => isActive ? '#333' : '#fff'};
    background-color: ${({isActive}) => isActive ? 'rgba(255,255,255,.5)' : ''};
    &:hover{
        background-color: rgba(255,255,255,.5);
        color: #333;
    }
`