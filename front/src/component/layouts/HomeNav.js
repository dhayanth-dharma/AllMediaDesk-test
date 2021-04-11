import React from 'react';
import TweenOne from 'rc-tween-one';
import { getChildrenToRender } from './utils';
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Col } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Item, SubMenu } = Menu;

class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: undefined,
        };
    }

    phoneClick = () => {
        const phoneOpen = !this.state.phoneOpen;
        this.setState({
            phoneOpen,
        });
    };

    Search = Input;

    onSearch = value => console.log(value);

    render() {
        return (
            <TweenOne>
                <Row>
                    <Col span={24}>

                        <PageHeader
                            title="Title"
                            className="site-page-header"
                            subTitle="This is a subtitle"
                            tags={<Tag color="blue">Running</Tag>}
                            extra={[
                                <Space direction="vertical">
                                    <Input.Search placeholder="input search text" onSearch={this.onSearch} style={{ width: 200 }} />
                                </Space>,
                                <Button key="3">Operation</Button>,
                                <Button key="2">Operation</Button>,
                                <Button key="1" type="primary">
                                    Primary
                                </Button>,
                            ]}
                            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}

                        ></PageHeader>

                    </Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </TweenOne>
        );
    }
}

export default HomeNav;
