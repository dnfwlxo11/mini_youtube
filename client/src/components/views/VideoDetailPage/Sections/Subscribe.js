import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Subscribe(props) {

    const [SubscribeNumber, setSubscribeNumber] = useState(0)
    const [Subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        let variable = { userTo: props.userTo }

        axios.post('/api/subscribe/subscribeNumber', variable)
            .then(res => {
                if(res.data.success) {
                    setSubscribeNumber(res.data.subscribeNumber);
                } else {
                    alert('구독자 정보 가져오기 실패')
                }
            })

        let variable2 = { userTo: props.userTo, userFrom: props.userFrom };
        axios.post('/api/subscribe/subscribed', variable2)
            .then(res => {
                if (res.data.success) {
                    setSubscribed(res.data.subscribed);
                } else {
                    alert('구독자 정보 불러오기 실패');
                }
            })
    }, [SubscribeNumber, Subscribed])

    const onSubscribe = () => {
        if (Subscribed) {
            let variable = {
                userTo: props.userTo,
                userFrom: props.userFrom
            }

            axios.post('/api/subscribe/unsubscribe', variable)
                .then(res => {
                    if (res.data.success) {
                        console.log(res.data)
                        setSubscribeNumber(Subscribed - 1);
                        setSubscribed(!Subscribed);
                    } else {
                        alert('구독취소 실패');
                    }
                });
        } else {
            let variable = {
                userTo: props.userTo,
                userFrom: props.userFrom
            }

            axios.post('/api/subscribe/subscribe', variable)
                .then(res => {
                    if (res.data.success) {
                        console.log(res.data)
                        setSubscribeNumber(Subscribed + 1);
                        setSubscribed(!Subscribed);
                    } else {
                        alert('구독하기 실패');
                    }
                });
        }
    }

    return (
        <div>
            <button
                style={{
                    backgroundColor: `${Subscribed ? '#AAAAAA' : '#CC0000'}`,
                    borderRadius: '2px', color: 'white',
                    padding: '10px 16px', fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
                }}
                onClick={onSubscribe}
            >
                {SubscribeNumber} {Subscribed ? 'subscribed' : 'subscribe'}
            </button>
        </div>
    )
}

export default Subscribe
