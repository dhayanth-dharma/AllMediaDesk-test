import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    SolutionOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';

const SideNav = (props) => {
    const history = useHistory();
    // const [collapse, setCollapse] = useState([false]);

    const handleUserClick = (task) => {

        if (task === 1)
            history.push('/task1');
        if (task === 2)
            history.push('/task2');
        if (task === 3)
            history.push('/task3');
    }

    const handleVideosClick = () => {

        history.push('/videos');

    }

    const handleFileClick = () => {
        console.log(process.env.PUBLIC_URL)
        history.push('/files');
    }

    return (
        <div>
            <div style={{ height: "55px", margin: "8px" }}>
                {
                    props.collapse
                        ? <h2 style={{ marginTop: '1rem', height: "11rem", color: 'white' }} >AMD</h2>
                        : <h2 style={{ marginTop: '1rem', height: "11rem", color: 'white' }} >AllMediaDesk</h2>
                }

            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                <Menu.Item key="1" onClick={() => handleUserClick(1)}>
                    <UploadOutlined />
                    <span> Task 1</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={() => handleUserClick(2)}>
                    <SolutionOutlined />
                    <span> Task 2</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={() => handleUserClick(3)}>
                    <SolutionOutlined />
                    <span> Task 3</span>
                </Menu.Item>
            </Menu>
        </div >
    );
}

export default SideNav;
