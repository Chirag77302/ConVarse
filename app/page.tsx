'use client'
import React, { useEffect, useState } from "react";
import {Row,Col, Divider,Space} from 'antd';
import { UserAddOutlined, SolutionOutlined,BankFilled } from '@ant-design/icons';
import Link from "next/link";
import QueueAnim from 'rc-queue-anim';
import { UserButton, useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import logo_convarse from '../public/logo_convarse.png';
import Image from "next/image";

const style: React.CSSProperties = { display:'flex', flexDirection:'column',  justifyContent: 'center', alignItems: 'center' };
const backgroundStyle: React.CSSProperties = { 
    width: '100%',
    height: '100%'
};

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { userId,isSignedIn,signOut} = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;
  
  const checkAuth = () => {
    if(userId!==null)redirect('/dashboard');
  }
  checkAuth();

  return (
                <div>
                    <QueueAnim delay={1500} duration={700} className="demo-content">

                            <div key="a" style={{height:'100vh'}}>
                                <Row style={{height:'100%'}} justify="center" align="middle">
                                            <Col xs={{span: 0}} lg={{span: 6}}>
                                            </Col>
                                            <Col xs={{span:24}} lg={{span: 12}} className="flex flex-col justify-center items-center">
                                                    
                                                        {/* <h1 className="font-bold tracking-tight text-gray-900 text-8xl">
                                                             <span className="ml-2">ConVarse</span>
                                                             <br></br>
                                                        </h1> */}
                                                        <Image className="h-32 w-auto" src={logo_convarse} alt="loading" />
                                                    
                                                        <p className="my-6 mx-4 text-lg leading-8 text-gray-600 text-center">
                                                             <span>Unlock global opportunities with our platform,</span> 
                                                             <br></br>
                                                             <span>bridging students to top universities</span>
                                                             <br></br>
                                                             <span>& offering mentorship from seasoned mentors</span>
                                                             <br></br>
                                                             <span>for successful career journeys.</span> 
                                                        </p>

                                                        <Divider plain>
                                                            <p className="text-xl">Enter As</p>
                                                        </Divider>
                                                        <Space direction="vertical" wrap>
                                                            <Button className="w-96 bg-blue-900 hover:bg-blue-600">
                                                                <Link href={"/university"}>University</Link>
                                                            </Button>
                                                            <Button className="w-96 bg-blue-900 hover:bg-blue-600">
                                                                <Link href={"/mentor"}>Mentor</Link>
                                                            </Button>
                                                            <Button className="w-96 bg-blue-900 hover:bg-blue-600">
                                                                <Link href={"/mentee"}>Student</Link>
                                                            </Button>
                                                            <UserButton afterSignOutUrl="/"/>
                                                        </Space>
                                                    
                                            </Col>
                                            <Col xs={{span: 0}} lg={{span: 6}}>
                                            {/* <Select
                                                placeholder="Select a option"
                                                // onChange={onGenderChange}
                                                allowClear
                                            >
                                                {country_list.map((c)=><Option value={c}>{c}</Option>)}
                                            </Select> */}

                                            </Col>
                                </Row>
                            </div>


                    </QueueAnim>
                </div>        
                   
  );
};

export default Home;
