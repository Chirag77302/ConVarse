"use client";
import React,{useEffect, useState} from "react";
import {Row,Col,Carousel,} from "antd";
import Loading from "@/components/Loading";
import PostsGrid from "@/components/PostGrid";
import QueueAnim from "rc-queue-anim";

type PostSchema = {
  id:string;
  title:string;
  images:string[];
  description:string;
  created_at:Date,
  university_name:string
}

const Dashboard = () => {
    
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const [posts, setPosts] = useState<PostSchema[]>([]);
  const [loading,setLoading] = useState(true);
  // const { userId} = useAuth();

  const fetchPosts = async() => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    console.log(data);
    setPosts(data);
    setLoading(false);
  }


  useEffect(() => {
    fetchPosts();
    console.log("posts are : ",posts);
  }, []);

  const onChange = (currentSlide: number) => {
    
  };


  if(loading){
    return (<Loading />)
  }else {
  return (  
            <>
                  <QueueAnim type={['right', 'left']} delay={700} duration={1200} className="demo-content">
                       {[<div key={'a'}>
                            <Row>
                                <Col span={24}>
                                    <Carousel afterChange={onChange} autoplay={true}>
                                          <div key={"https://cdn.dribbble.com/users/11799014/screenshots/19050137/media/4751e8f4385427c401b01af2590d4b69.png"} style={contentStyle}>
                                            <img src={"https://cdn.dribbble.com/users/11799014/screenshots/19050137/media/4751e8f4385427c401b01af2590d4b69.png"} alt="" style={{height:'400px',width:'100%'}}></img>
                                          </div>
                                          <div key={"https://cdn.dribbble.com/users/6811591/screenshots/16393798/media/0046a4de5a8e2bf3cbe950c60d88a779.jpg?"} style={contentStyle}>
                                            <img src={"https://cdn.dribbble.com/users/6811591/screenshots/16393798/media/0046a4de5a8e2bf3cbe950c60d88a779.jpg?"} alt="" style={{height:'400px',width:'100%'}}></img>
                                          </div>
                                          <div key={"https://cdn.dribbble.com/users/6811591/screenshots/16506195/media/0df89b3f6ffe1073f5debf07b463af64.jpg"} style={contentStyle}>
                                            <img src={"https://cdn.dribbble.com/users/6811591/screenshots/16506195/media/0df89b3f6ffe1073f5debf07b463af64.jpg"} alt="" style={{height:'400px',width:'100%'}}></img>
                                          </div>
                                          <div key={"https://cdn.dribbble.com/userupload/3958942/file/original-a2dab8666374cea99a4ae32886a326be.png"} style={contentStyle}>
                                            <img src={"https://cdn.dribbble.com/userupload/3958942/file/original-a2dab8666374cea99a4ae32886a326be.png"} alt="" style={{height:'400px',width:'100%'}}></img>
                                          </div>
                                    </Carousel> 
                                </Col>
                            </Row>
                      </div>,
                      <div key="all_posts_list">
                        <PostsGrid posts={posts}/>  
                      </div>]}
                  </QueueAnim>
            </>
        );
  }
}

export default Dashboard;
