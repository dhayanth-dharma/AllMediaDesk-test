import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Files from "../component/pages/Files";
import SideNav from "../component/layouts/Sidebar";
import { Input, Space, PageHeader, Layout, Menu, Dropdown, Button, Tag, Typography, Row, Col } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import UploadFile from '../component/pages/Upload';
import TaskOne from '../component/pages/TaskOne';
import TaskTwo from '../component/pages/TaskTwo';
import TaskThree from '../component/pages/TaskThree';

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

                        </Row>


                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
                        <Switch>
                            <Route path="/task1" component={TaskOne} />
                            <Route path="/task3" component={TaskThree} />
                            <Route path="/task2" component={TaskTwo} />
                            <Redirect to="/task1" from="/" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
}

export default Routes;