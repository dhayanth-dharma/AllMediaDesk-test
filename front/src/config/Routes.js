import React, { useState, useEffect } from 'react';
// BrowserRouter
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import List from "../components/pages/list";
import Files from "../component/pages/Files";
import SideNav from "../component/layouts/Sidebar";
import { Input, Space, PageHeader, Layout, Menu, Dropdown, Button, Tag, Typography, Row, Col } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import UploadFile from '../component/pages/Upload';

const { Header, Sider, Content } = Layout;


const Routes = () => {
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
    }, []);

    const handleToggle = (event) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }
    const onSearch = (value) => {
        console.log(value);
    }
    return (
        <Router>
            <Layout>

                <Sider trigger={null} collapsible collapsed={collapse}>
                    <SideNav collapse={collapse} />
                </Sider>
                <Layout>
                    {/* #001529*/}
                    <Header className="siteLayoutBackground" style={{ padding: 0, background: "rgb(6 2 61 / 95%)" }}>
                        <Row>
                            <Col span={1}>

                                {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: handleToggle,
                                    style: { color: "#fff" }
                                    // position: "relative", marginLeft: "-81.6rem" 
                                })}
                            </Col>
                            <Col span={4} offset={17}>
                                <Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200, marginTop: 17 }} />
                            </Col>
                            <Col> <Button key="3">Operation</Button>
                            </Col>

                        </Row>


                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
                        <Switch>
                            {/* <Route path="/list" component={List} /> */}
                            {/* <Route path="/form" component={Form} /> */}
                            <Route path="/files" component={Files} />
                            <Route path="/Upload" component={UploadFile} />
                            {/* <Route path="/videos" component={Videos} /> */}
                            <Redirect to="/Upload" from="/" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
}

export default Routes;