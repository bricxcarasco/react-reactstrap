import React, { Component } from 'react';
import { Card, CardTitle, Button, CardText, Row, Col } from 'reactstrap';

export default class PeopleCard extends Component {
    render() {
        return(
            <div className="PeopleCard">
                <Row>
                    <Col>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Button</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card body inverse color="primary">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="secondary">Button</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card body inverse color="success">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="secondary">Button</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}