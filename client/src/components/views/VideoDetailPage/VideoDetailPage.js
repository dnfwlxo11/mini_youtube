import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Row, Col, List, Avatar } from 'antd'

function VideoDetailPage(props) {

    const videoId = props.match.params.videoId;
    const VideoVariable = { videoId: videoId };

    const [Video, setVideo] = useState([])

    useEffect(() => {
        Axios.post('/api/video/getVideo', VideoVariable)
            .then((res) => {
                if (res.data.success) {
                    setVideo(res.data.video);
                    console.log('state 업데이트 완료')
                } else {
                    alert('비디오 정보 로딩 실패');
                }
            })
    }, []);

    if (Video.writer) {
        return (
            <Row gutter={[16, 16]}>
                <Col lg={18} xs={24}>
                    <div style={{ width: '100%', padding: '3rem 4em' }}>
                        <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls></video>
                        <List.Item
                        // actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')}  />, <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={Video.writer && Video.writer.image} />}
                                title={<a href="https://ant.design">{Video.title}</a>}
                                description={Video.description}
                            />
                            <div></div>
                        </List.Item>

                        {/* <Comments CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} /> */}

                    </div>
                </Col>
                <Col lg={6} xs={24}>
                    side video
                        {/* <SideVideo /> */}

                </Col>
            </Row>
        )
    } else {
        console.log(Video, '후후')
        return <div>
            Loading... ??
        </div>
    }
}

export default VideoDetailPage
