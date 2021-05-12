import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';

function VideoDetailPage() {
    
    // const videoId_param = props.match.params.videoId;
    // const VideoVariable = { videoId: videoId_param };

    // const [Video, setVideo] = useState([]);

    // useEffect(() => {
    //     let mounted = true;

    //     axios.post('/api/video/getVideo', VideoVariable)
    //         .then(res => {
    //             if (res.data.success) {
    //                 setVideo(res.data.video);
    //             } else {
    //                 alert('비디오 정보 로딩 실패');
    //             }
    //         });

    //     return () => (mounted = false);
    // }, []);

    // if (Video.writer) {
    //     console.log('들어왔어요')
    //     return (
    //         <Row gutter>
    //             <Col lg={18} xs={24}>
    //             <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
    //                     <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls />
    //                     <List.Item
                            
    //                     // actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')}  />, <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />]}
    //                     >
    //                         <List.Item.Meta
    //                             avatar={<Avatar src={Video.writer && Video.writer.image} />}
    //                             title={Video.writer.name}
    //                             description={Video.description}
    //                         />
    //                         <div></div>
    //                     </List.Item>

    //                     {/* <Comments CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} /> */}

    //                 </div>
    //             </Col>
    //             <Col lg={6} xs={24}>
    //                 {/* side video */}
    //                 {/* <SideVideo /> */}
    //             </Col>
    //         </Row>
    //     )
    // } else {
        return (
            <Row gutter>
                <Col lg={18} xs={24}>
                <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
                        <video style={{ width: '100%' }} controls />
                        {/* <List.Item
                            
                            actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')}  />, <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar />}
                                title='test'
                                description='test'
                            />
                            <div></div>
                        </List.Item> */}

                        {/* <Comments CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} /> */}

                    </div>
                </Col>
                <Col lg={6} xs={24}>
                    {/* side video */}
                    {/* <SideVideo /> */}
                </Col>
            </Row>
        )
    // }
}

export default VideoDetailPage
