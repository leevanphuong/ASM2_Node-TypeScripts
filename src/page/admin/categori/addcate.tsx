import { Button, Form, Input} from 'antd'
import { useNavigate } from 'react-router-dom'
interface Iprops{
  onAdd:Function
}
const AddCategory = (props:Iprops) => {
    const naviga = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values); // push dữ liệu 
        naviga('/admin/danhmuc')
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, margin:'auto', marginTop: '50px' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        App cate
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCategory