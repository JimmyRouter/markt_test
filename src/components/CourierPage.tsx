import {Button, Form, Input} from "antd"
import {LockOutlined, UserOutlined} from "@ant-design/icons";


export function CourierPage(){

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            {/*<Form.Item>*/}
            {/*    <Flex justify="space-between" align="center">*/}
            {/*        <Form.Item name="remember" valuePropName="checked" noStyle>*/}
            {/*            <Checkbox>Remember me</Checkbox>*/}
            {/*        </Form.Item>*/}
            {/*        <a href="">Forgot password</a>*/}
            {/*    </Flex>*/}
            {/*</Form.Item>*/}

            <Form.Item>
                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className={"text-blue-950"}

                >
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );

}