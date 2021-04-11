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

    const handleUserClick = () => {
        history.push('/upload');
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
                <Menu.Item key="1" onClick={handleUserClick}>
                    <UploadOutlined />
                    <span> Upload</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleFileClick}>
                    <SolutionOutlined />
                    <span> Results</span>
                </Menu.Item>
            </Menu>
        </div >
    );
}

export default SideNav;
