import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import Dropdown from '../components/Dropdown/Dropdown';
import Graph from '../components/Graph/Graph';
import Modal from '../components/Modal/Modal';

class LayoutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleModal: false,
        }
    }
    _handleModal = () => {
        this.setState({ toggleModal: !this.state.toggleModal });
    }

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Card>
                        This is the Card 1.
                    </Card>
                    <Card>
                        <ul>
                            <li>1. Modal</li>
                        </ul>
                        <button onClick={this._handleModal}>
                            Toggle Modal
                        </button>
                        {this.state.toggleModal && (
                            <Modal 
                                handleModal={this._handleModal}
                            />
                        )}
                    </Card>
                    <Card>
                        This is the Card 3.
                    </Card>
                </Layout>
                <Layout>
                    <Card>
                        <ul>
                            <li>1. Default dropdown is close</li>
                            <li>2. If you want to default to default to open. Set the default propTypes 'toggleList = open'</li>
                        </ul>
                        <Dropdown 
                            title='Dropdown Close'
                            toggleList={true} />
                    </Card>
                    <Card>
                        <ul>
                            <li>1. Open dropdown - To open you need to click to the dropdown</li>
                        </ul>
                        <Dropdown 
                            title='Dropdown Open'
                            toggleList={false} />
                    </Card>
                </Layout>
                <Layout>
                    <Card>
                        <ul>
                            <li>1. Bar Horizontal</li>
                            <li>2. Bar Column</li>
                        </ul>
                        <Graph graphType='bar' barClass='bar-horizontal' />
                        <Graph graphType='bar' />
                    </Card>
                    <Card>
                        <ul>
                            <li>1. Donut Graph</li>
                        </ul>
                        <Graph graphType='donut' />
                    </Card>
                </Layout>
            </React.Fragment>
        );
    }
}

export default LayoutPage;