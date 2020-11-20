import React, {useState} from 'react'
import { Container } from './style'

function Home() {

    const [color, setColor] = useState('red')

    const handleClick = e => color === 'red' ? setColor('blue') : setColor('red')

    return (
        <Container>
            <div>
                <p>欢迎大家来到 Rox 的 React demo 小主页</p>
                <br />
                <p>本 demo 全部由 <span style={{color}}>React hooks 纯函数组件</span> 编写</p>
                <br />
                <button style={{padding: '10px', cursor: 'pointer'}} onClick={handleClick}>~bulingbuling~</button>
            </div>
        </Container>
    )
}

export default Home