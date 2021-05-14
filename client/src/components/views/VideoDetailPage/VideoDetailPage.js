import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';
import SideVideo from './Sections/SideVideo';
import Subscribe from './Sections/Subscribe';
import Comment from './Sections/Comment';

function VideoDetailPage(props) {
    const user = useSelector(state => state.user)

    const videoId_param = props.match.params.videoId;
    const VideoVariable = { videoId: videoId_param };

    const [Video, setVideo] = useState([]);
    const [Comments, setComments] = useState([]);

    useEffect(() => {
        axios.post('/api/video/getVideo', VideoVariable)
            .then(res => {
                if (res.data.success) {
                    setVideo(res.data.video);
                } else {
                    alert('비디오 정보 로딩 실패');
                }
            });

        axios.post('/api/comment/getComments', VideoVariable)
            .then(res => {
                if (res.data.success) {
                    setComments(res.data.comments);
                } else {
                    alert('비디오 댓글 정보 로딩 실패');
                }
            });
    }, []);

    const updateComment = (newComment) => {
        setComments(Comments.concat(newComment))
    }

    if (Video.writer) {

        const subscribeButton = Video.writer._id !== user.userData._id && <Subscribe userTo={Video.writer._id} userFrom={user.userData._id} />

        return (
            <Row gutter>
                <Col lg={18} xs={24}>
                    <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>

                        <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls />
                        <List.Item
                            actions={[subscribeButton]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={Video.writer.image} />}
                                title={Video.writer.name}
                                description={Video.description}
                            />
                            <div></div>
                        </List.Item>

                        <Comment CommentLists={Comments} postId={videoId_param} refreshFunction={updateComment} />
                    </div>
                </Col>
                <Col lg={6} xs={24}>
                    <SideVideo />
                </Col>
            </Row>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default VideoDetailPage

