import { Button, Space, Table, Input, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Iproduct } from '../../interface/Iproduct';
interface Iprops{
    product:Iproduct[],
    onRemove:Function

}
const dashboarh = (props:Iprops) => {
    const naviga = useNavigate()
    const [search, setSearch]=useState("")
    interface DataType {
        key: string;
        name: string;
        price: number;
        image: string,
        desc: string
    }
    const [products, setproduct] = useState<Iproduct[]>([])
    useEffect(() => {
       setproduct(props.product)
    }, [props])
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'desc',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
            render: (avatarUrl) => <img src={avatarUrl} style={{ maxWidth: 100 }} alt="image" />,
        },
        {
            dataIndex: "",
            filteredValue: [search],
            onFilter: (value:any, record) => {
                return String(record.name).toLowerCase()
                    .includes(value.toLowerCase())
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)} type="primary">Remove</Button>
                    <Button style={{ backgroundColor: 'skyblue' }} type="primary"><a href={"admin/update/" + record._id} >Update</a></Button>
                </Space>
            ),
        },
    ];
    const data = props.product.map(item => {
        return {
            key: item._id,
            ...item
        }
    })

    const removeProduct = (id: Number | string) => {
        const check = confirm("Bạn có muốn xóa sản phẩm")
        if (check) {
            props.onRemove(id)
            naviga('/admin')
        }
        if (check == true) {
            message.success("Xoa san pham thanh cong")
        }
    }
    return (
        <div>
            <Input.Search
                style={{ width: 300 }}
                placeholder="Nhập tên san phẩm"
                onSearch={(value:any) => {
                    setSearch(value)
                }}
                onChange={(e:any)=>{
                    setSearch(e.target.value)
                }}
            />
            <Table  columns={columns} dataSource={data} pagination={{ pageSize: 5, showQuickJumper: true }} />
            <a href="/admin/add"><button className='btn border'>Thêm sản phẩm</button></a>
        </div>
    )
}

export default dashboarh