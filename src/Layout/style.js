import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body, div, span,
	h1, h2, h3, h4, h5, h6, p, 
	table, caption, tbody, tfoot, thead, tr, th, td {
		margin: 0;
		padding: 0;
    }
`

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh; 
    background-color: #eee;
`

export const Navs = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #999;
`
export const Content = styled.div`
    flex-grow: 1;
    width: 1px;
`

export const Logo = styled.div`
    flex-shrink: 0;
    height: 120px;
    width: 100%;
    text-align: center;
    line-height: 120px;
    color: #fff;
    letter-spacing: 1px;
    font-size: 18px;
    background-color: #212121;
`
