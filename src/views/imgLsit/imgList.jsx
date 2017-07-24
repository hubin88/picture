/**
 * Created by huoban-xia on 2017/7/12.
 */

import React, { Component, PropTypes } from 'react';
import './imgList.scss';

export default class ImgList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: [{
        title: ['图片描述的抢我的期望的去我的确定确定确定确定请问的期望的前雾灯1', '图片的确定请问描述2'],
        imgs: ['img_1.jpg', 'img_2.jpg'],
      }, {
        title: ['图片描述2', '图片的抢我的期望确定确定确定描述2'],
        imgs: ['img_3.jpg'],
      }, {
        title: ['图片描述2', '图片描述2','图片描述的前雾灯确定请问确定2'],
        imgs: ['img_4.jpg', 'img_5.jpg', 'img_6.jpg'],
      }, {
        title: ['图片描述2', '图片描述2'],
        imgs: ['img_7.jpg', 'img_8.jpg', 'img_9.jpg'],
      }],
    };
  }

  renderImgs = (val, i) => (
    <img src={require(`../../images/${val}`)} alt="" key={i} />
  );
  renderTitle = (val, i) => (
    <div key={i}>{val}</div>
  );
  renderList = (item, index) => (
    <li styleName="imgList" key={index}>
      <div styleName="title">{item.title.map((val, i) => this.renderTitle(val, i))}</div>
      <div styleName="img-content">{item.imgs.map((val, i) => this.renderImgs(val, i))}</div>
    </li>
  );

  render() {
    console.log(this.state);
    return (
      <ul className="ss">
        {this.state.imgArr.map((item, index) => this.renderList(item, index))}
      </ul>
    );
  }
}
