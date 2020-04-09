import React from 'react';
import './Product.css'
import ImageMapper from 'react-image-mapper';

export default function Product(props) {
    const goodsInfo = props.prdList.product[props.num - 1];
    return (
        <>
            <div>
                <div className="section_view">
                    <div className="thumb">
                        <ImageMapper src={goodsInfo.prd_thumb_img} />
                    </div>
                    <p className="product_name">
                        <strong className="p_name">
                            {goodsInfo.prd_name}
                        </strong>
                        <span className="srtdesc">
                            {goodsInfo.prd_comment} ({goodsInfo.prd_kg}/{goodsInfo.prd_ea})
                        </span>
                    </p>
                    <p className="product_price">
                        <strong className="p_price">
                            {goodsInfo.prd_price}<span className="won">원</span>
                        </strong>
                        <span className="p_price_unlogged">
                            로그인 후, 적립혜택이 제공됩니다.
                        </span>
                    </p>
                    <div className="product_info">
                        <dl class="list fst">
                            <dt class="tit">판매단위</dt>
                            <dd class="desc">{goodsInfo.prd_ea}</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">중량/용량</dt>
                            <dd class="desc">{goodsInfo.prd_kg}</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">원산지</dt>
                            <dd class="desc">{goodsInfo.prd_from}</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">포장타입</dt>
                            <dd class="desc">{goodsInfo.prd_wrap} <br />
                                <strong class="emph">택배배송은 에코포장이 스티로폼으로 대체됩니다.</strong>
                            </dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">알레르기정보</dt>
                            <dd class="desc">- 돼지고기, 쇠고기, 대두 함유
                            <br />- 이 제품은 알류, 우유, 메밀, 땅콩, 밀, 고등어, 게, 새우, 복숭아, 토마토, 아황산류, 호두, 닭고기, 오징어, 조개류, 잣을 사용한 제품과 같은 제조시설에서 제조하고 있습니다.</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">유통기한</dt>
                            <dd class="desc">상품별 별도표기</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">안내사항</dt>
                            <dd class="desc"><span class="txt">{goodsInfo.prd_info}</span></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
