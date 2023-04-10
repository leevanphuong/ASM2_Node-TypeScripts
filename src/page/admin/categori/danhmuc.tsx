
import { Button, Space, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

const Danhmuc = (props) => {
    const naviga= useNavigate()
    interface DataType {
        key: string;
        name: string;
    }
    const delelecate =(id:Number|String)=>{
        const check = confirm("Bạn có muốn xóa sản phẩm")
        if(check){
            props.onRemove(id )
            naviga('/admin/danhmuc')
        }
        if(check==true){
            alert("Xóa sản phẩm thành công")
        }
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record)
                <Space size="middle">
                    <Button style={{ backgroundColor: 'red' }} onClick={()=>{delelecate(record.key)}} type="primary">Remove</Button>
                    <Button style={{ backgroundColor: 'skyblue' }}  type="primary"><a href={"/admin/danhmuc/"+record._id}>Update</a></Button>
                </Space>
            ),
        },
    ];
    const data = props.cate.map((item)=>{
        return {
            key: item._id,
            ...item
        }
    })
  return (
    <div>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5, showQuickJumper: true }} />
        <a href="/admin/addcate"><button className='btn border'>Thêm danh muc</button></a>
    </div>
  )
}

export default Danhmuc