import React, {memo} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import PropsType from 'prop-types'

import { Component, Item } from './style'

const NavItem = memo((props) => {
    const { name, path, isActive } = props
    const history = useHistory()

    const handleLink = (e) => history.push(path)

    return (
        <Item isActive={isActive} onClick={handleLink}>{name}</Item>
    )
})

function Nav(props) {
    const { datas } = props
    const location = useLocation()

    return (
        <Component>
            {datas.map(item => (
                <NavItem isActive={location.pathname === item.path} name={item.name} path={item.path} />
            ))}
        </Component>
    )
}

Nav.defaultProps = {
    datas: []
}

Nav.propsType = {
    datas: PropsType.array
}


export default memo(Nav)