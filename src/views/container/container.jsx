/**
 * Created by huoban-xia on 2017/7/12.
 */

import React, { Component, PropTypes } from 'react';
import './container.scss';
import ImgList from '../imgLsit/imgList';

export default class Container extends Component {
  render() {
    return (
      <div styleName="container" className="">
        <header styleName="header">
          <img src={require(`../../images/bg.jpg`)} alt="" />
          <div>此处为标题</div>
        </header>
        <div styleName="content">
          <ImgList />
        </div>
      </div>
    );
  }
}
