import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import { Layout } from 'antd';



function Element(props) {
  return (
    <Col span={24}>
      <Row>
        <Col span={8}>
          <img className={props.obj.className} src={props.obj.pic}></img>
        </Col>
        <Col span={16}>
          <Checkbox value={props.obj.checkBoxNumber} onChange={() => props.setCheckedItems}>{props.obj.name}</Checkbox>
        </Col>
      </Row>
    </Col>
  )
}
export default Element;
