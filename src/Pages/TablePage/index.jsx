import React from 'react'
import {Table, Column} from '../../Component/Table'
import { PageWrapper } from './style'

const getRandomName = () => ['Rox zhuo', '小明', '小白', '小黑', 'Rox Huang', '葛葛', '喵苗', '诸葛村夫', '王朗', '小李子'][~~(Math.random() * 10)]
const getRandomSex = () => ['male', 'female', '男的', '女的', '男的女的折磨', '保密', '你猜'][~~(Math.random() * 7)]

const createTableDatas = (row_num) => {
    return Array.from({length: row_num}, (ele, index) => {
        return {
            id: index,
            name: getRandomName(),
            age: ~~(Math.random() * 50),
            sex: getRandomSex()
        }
    })
}

const tableDatas = createTableDatas(50)

function TablePage() {
    return (
        <PageWrapper>
            <Table datas={tableDatas}>
                <Column
                    dataIndex="id"
                    width={200}
                />
                <Column
                    dataIndex="name"
                    width={200}
                />
                <Column
                    dataIndex="age"
                    width={200}
                />
                <Column
                    dataIndex="sex"
                    width={200}
                />
            </Table>
        </PageWrapper>
    )
}

export default TablePage