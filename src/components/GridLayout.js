import React, { Component } from "react";

import {Container, Row, Col} from 'reactstrap';

import RowCol from './gridlayout/RowCol';

export default class GridLayout extends Component {
    render() {
        return(
            <div className="GridLayout">
                <Container fluid>
                    <RowCol />
                </Container>
            </div>
        );
    }
}