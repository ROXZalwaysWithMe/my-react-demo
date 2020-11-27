import React, {memo} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

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
                <NavItem key={item.name} isActive={location.pathname === item.path} name={item.name} path={item.path} />
            ))}
        </Component>
    )
}

Nav.defaultProps = {
    datas: []
}

Nav.propTypes = {
    datas: PropTypes.array
}


export default memo(Nav)