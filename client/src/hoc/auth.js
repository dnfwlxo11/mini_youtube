import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/user_action'

export default function (ComposedClass, option, adminRoute = null) {
	// option
	// null -> 아무나
	// true -> 로그인 유저만
	// false -> 로그인을 하지 않은 유저

	function AuthenticationCheck(props) {
		const dispatch = useDispatch();

		useEffect(() => {
			dispatch(authUser())
			.then(res => {
				// 로그인하지 않은 상태
				if (!res.payload.isAuth) {
					if (option) {
						props.history.push('/login')
					}
				} else {
					// 로그인한 상태
					if (adminRoute && !res.payload.isAdmin) {
						props.history.push('/')
					} else {
						if (option === false) {
							props.history.push('/')
						}
					}
				}
			})
		}, [])

		return (
			<ComposedClass {...props} />
		)
	}

	return AuthenticationCheck
} 