'use client';
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'

interface FormState {
  name: string;
  email: string;
  password: string;
}

const inivals: FormState = {
  name:"",
  email:"",
  password:""
}

function SLogin(){
    const formItemLayout = {
        labelCol: {
          xs: {span: 24,},
          sm: {span: 8,},
        },
        wrapperCol: {
          xs: {span: 24,},
          sm: {span: 16,},
        },
    };
    let [formstate,setformstate] = useState<FormState>(inivals);
    const router = useRouter();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const loginHandler = async() =>{
      console.log(formstate);
      const res = await fetch('/api/v1/student/login', {
          method: 'POST',
          body: JSON.stringify({
            email: formstate.email ,
            password:formstate.password,
            name:formstate.name
          }),
          headers: {
          'Content-Type': 'application/json',
          },
      });
      const data = await res.json();
      // dispatch(setuniversityvalue({email:formstate.email,name:formstate.name}));
      router.push("/dashboard");
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = evt.target;
        // console.log(name + "  " + value);
        setformstate({...formstate,[name]: value});
    }
    const onFinish = (values: FormState) => {
        console.log('Received values of form: ', values);
        setformstate(values);
        loginHandler();
    };
    return (
        <>
            <Form {...formItemLayout} name="normal_login" className="login-form"
                onFinish={onFinish}
                >
                <Form.Item name="name"
                    rules={[
                      {
                          required: true,
                          message: 'Please input your Username!',
                      },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} name="name" placeholder="Name" onChange={handleChange} />
                </Form.Item>
                <Form.Item name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                          required: true,
                          message: 'Please input your Email ID!',
                      },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} name="email" placeholder="Email ID" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default SLogin;


