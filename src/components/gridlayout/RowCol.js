import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

export default class RowCol extends Component {
    render() {
        return(
            <div className="RowCol">
                <Row>
                    <Col sm="3">This is COL 1</Col>
                    <Col sm="3">This is COL 2</Col>
                    <Col sm="6">This is COL 3</Col>
                </Row>
            </div>
        );
    }
}