import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    >div{
        vertical-align: middle;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
    }
`