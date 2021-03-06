import React, { useState, useEffect } from 'react'
import { host } from './ServerAddress'
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'
import Notice from '../CustomerServiceComponents/Notice'
import Axios from 'axios'

function NoticePage(props) {
    const [articleList, setArticleList] = useState(null)
    const query = queryString.parse(props.location.search)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    console.log(query)
    console.log(props.history)
    const getAxiosData = (uri) => {
        Axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setArticleList(res.data)

            })
    }
    console.log(query.page)
    useEffect(() => {

        if (!query.page) {
            props.history.push(`/customer/notice?page=${page}`)
        }
        if (query.page !== page) {
            setPage(parseInt(query.page));
            console.log(page)
        }
        if (!articleList) {
            // ajax 요청
            getAxiosData('api/notice/nlist')
            // setArticleList([
            //     {
            //         notice_id: 1,
            //         notice_subject: "[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)",
            //         notice_regdate: "2020-03-27",
            //         notice_hit: 3,
            //     },
            //     {
            //         notice_id: 2,
            //         notice_subject: "[가격인하공지]돼지국밥",
            //         notice_regdate: "2020-03-26",
            //         notice_hit: 22,
            //     },
            //     {
            //         notice_id: 3,
            //         notice_subject: "[가격인하공지]선지국밥",
            //         notice_regdate: "2020-03-25",
            //         notice_hit: 33,
            //     },
            //     {
            //         notice_id: 4,
            //         notice_subject: "[가격인하공지]냉채 족발",
            //         notice_regdate: "2020-03-24",
            //         notice_hit: 44,
            //     },
            //     {
            //         notice_id: 5,
            //         notice_subject: "[가격인하공지]스타벅스 커피",
            //         notice_regdate: "2020-03-23",
            //         notice_hit: 55,
            //     },
            //     {
            //         notice_id: 6,
            //         notice_subject: "[가격인하공지] 엽떡",
            //         notice_regdate: "2020-03-22",
            //         notice_hit: 66,
            //     },
            //     {
            //         notice_id: 7,
            //         notice_subject: "[가격인하공지] 순대 곱창",
            //         notice_regdate: "2020-03-21",
            //         notice_hit: 83,
            //     },
            //     {
            //         notice_id: 8,
            //         notice_subject: "[가격인하공지]장충동 족발",
            //         notice_regdate: "2020-03-20",
            //         notice_hit: 99,
            //     },
            //     {
            //         notice_id: 9,
            //         notice_subject: "[가격인하공지]광장시장 녹두전",
            //         notice_regdate: "2020-03-19",
            //         notice_hit: 123,
            //     },
            //     {
            //         notice_id: 10,
            //         notice_subject: "[가격인하공지]공주 밤 막걸리",
            //         notice_regdate: "2020-03-18",
            //         notice_hit: 234,
            //     },
            //     {
            //         notice_id: 11,
            //         notice_subject: "[가격인하공지]샐러리",
            //         notice_regdate: "2020-03-17",
            //         notice_hit: 3,
            //     },
            //     {
            //         notice_id: 12,
            //         notice_subject: "[가격인하공지]사과",
            //         notice_regdate: "2020-03-16",
            //         notice_hit: 334,
            //     },
            // ])

        }
    }, [query.page, page, articleList, props.history])
    return (
        <>
            {articleList && <Notice articleList={articleList} page={page} history={props.history} size={size} />}
        </>
    )
}


export default withRouter(NoticePage)