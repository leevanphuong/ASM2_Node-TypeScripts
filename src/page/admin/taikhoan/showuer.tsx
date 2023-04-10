import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

const Showuer = (props) => {
    interface DataType {
        key: string;
        name: string;
        email: number;
        password: string,
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'role',
            dataIndex: 'role',
            key: 'role',
        }
    ];
    const data = props.user.map(item => {
        return {
            key: item._id,
            ...item
        }
    })
    return (
        <div>
            <div>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 5, showQuickJumper: true }} />
            </div>
        </div>
    )
}

export default Showuer