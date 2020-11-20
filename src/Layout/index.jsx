import React from 'react'
import { renderRoutes } from 'react-router-config'
import { GlobalStyles, Container, Navs, Content, Logo } from './style'

import Nav from '../Component/Nav'

function Layout(props) {

    const { route } = props

    return (
        <Container>
            <GlobalStyles />
            <Navs>
                <Logo> React Demo </Logo>
                <Nav datas={route.children.filter(child => child.name)} />
            </Navs>
            <Content>
                {renderRoutes(route.children)}
            </Content>
        </Container>
    )
}

export default Layout