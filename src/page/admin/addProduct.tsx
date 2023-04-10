import { Button, Form, Input, InputNumber, Upload } from 'antd'
import { useNavigate } from 'react-router-dom'
const AddProduct = (props:any) => {
    const naviga = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values);
        naviga('/admin')
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
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input type='text' placeholder='Nhập hình ảnh' />
                </Form.Item>
                <Form.Item
                    label="Product description"
                    name="desc"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product categoryId"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your categoryId!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        App Item
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProduct