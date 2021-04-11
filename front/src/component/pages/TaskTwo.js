import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Button, Tooltip, Typography } from 'antd';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SearchOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Form, Input, PageHeader } from 'antd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const { Title } = Typography;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const TaskTwo = () => {
    const history = useHistory();
    const [result, setResult] = useState("");
    const [term, setTerm] = useState("");
    useEffect(() => {

    }, []);


    const handleSubmit = () => {
        if (!term) return;
        axios.get(`http://localhost:8080/api/task/two`,
            { params: { 'numbers': term } })
            .then(res => {
                console.log(res)
                setResult(res.data.toString())
                debugger
            })
            .catch(err => console.warn(err));
    }
    function handleChange(e) {
        console.log(term)
        setTerm(e.target.value);
    }
    return (

        <div>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Task 2"
                subTitle="Second task"
            />,
            <Row gutter={[40, 0]}>
                <Col span={10}>
                    <Input placeholder="Enter the numbers. Ex: '3215412354'" onChange={handleChange} />
                </Col>

                <Col span={2}>

                    <Button type="primary" htmlType="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Col>

            </Row>
            <br />
            <Row>
                <Col span={12} offset={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Title level={2}>Results</Title>
                            <Title level={5}>{result}</Title>
                        </CardContent>
                    </Card>
                </Col>

            </Row>

        </div>
    );
}

export default TaskTwo;
