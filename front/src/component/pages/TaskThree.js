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
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';


const { Title } = Typography;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const TaskThree = () => {
    const history = useHistory();
    const [resultData, setResultData] = useState([]);
    const [term, setTerm] = useState("");
    useEffect(() => {

    }, []);


    const handleSubmit = () => {
        if (!term) return;
        axios.get(`http://localhost:8080/api/task/three`,
            { params: { 'term': term } })
            .then(res => {
                debugger
                console.log(res)
                let data = [];
                res.data.forEach((element, i) => {
                    data.push({ argument: i, value: element })
                });
                debugger
                setResultData(data)
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
                title="Task 3"
                subTitle="Third task"
            />,
            <Row gutter={[40, 0]}>
                <Col span={10}>
                    <Input placeholder="Enter the term '( 12 - 2 ) * 3 / x'" onChange={handleChange} />
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
                            <Paper>
                                <Chart
                                    data={resultData}
                                >
                                    <ArgumentAxis />
                                    <ValueAxis />

                                    <LineSeries valueField="value" argumentField="argument" />
                                </Chart>
                            </Paper>

                        </CardContent>
                    </Card>
                </Col>

            </Row>

        </div>
    );
}

export default TaskThree;
