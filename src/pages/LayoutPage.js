import React, { Component } from 'react';
import { Card, Layout, Dropdown, BasicModal, Graph } from 'accelerator-lib';
import Button from '../components/Button/Button';

class LayoutPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleModal: false
		};
	}
	_handleModal = () => {
		this.setState({ toggleModal: !this.state.toggleModal });
	};

	render() {
		const toggleItems = [
			{ label: 'Test 1', url: 'http://testing.com' },
			{ label: 'Test 2', url: 'http://testing.com' },
			{ label: 'Test 3', url: 'http://testing.com' }
		];

		const barData = [
			{ name: 'Page A', uv: 4000, pv: 2400, amt: 1300000 },
			{ name: 'Page B', uv: 3000, pv: 1398, amt: 250000 },
			{ name: 'Page C', uv: 2000, pv: 9800, amt: 40000 },
			{ name: 'Page D', uv: 2780, pv: 3908, amt: 370000 },
			{ name: 'Page E', uv: 1890, pv: 4800, amt: 900000 }
		];

		const donutData = [
			{ name: 'name1', total: 12, count: 1, value: 1000, amount: 1300000, color: 'rgba(0,0,0,0.1)' },
			{ name: 'name2', total: 34, count: 2, value: 1002, amount: 250000, color: 'rgba(0,0,0,0.5)' },
			{ name: 'name3', total: 54, count: 3, value: 1003, amount: 800000, color: 'rgba(0,0,0,0.6)' },
			{ name: 'name4', total: 11, count: 4, value: 1004, amount: 150000, color: 'rgba(0,0,0,0.2)' },
			{ name: 'name5', total: 76, count: 5, value: 1005, amount: 175000, color: 'rgba(0,0,0,0.3)' },
			{ name: 'name6', total: 55, count: 6, value: 1006, amount: 100000, color: 'rgba(0,0,0,0.4)' },
			{ name: 'name7', total: 53, count: 7, value: 1007, amount: 500000, color: 'rgba(0,0,0,0.7)' },
			{ name: 'name8', total: 31, count: 8, value: 1008, amount: 40000, color: 'rgba(0,0,0,0.2)' },
			{ name: 'name9', total: 62, count: 9, value: 1009, amount: 375000, color: 'rgba(0,0,0,0.3)' },
			{ name: 'name10', total: 69, count: 10, value: 1023, amount: 60000, color: 'rgba(0,0,0,0.4)' }
		];

		const btnTypes = [ 'default', 'danger', 'primary', 'success' ];
		const btnSizes = [ 'xs', 'sm', 'md', 'lg' ];

		return (
			<React.Fragment>
				<Layout>
					{btnTypes.map((type) => {
						return <Button type={type} text={type} size="sm" />;
					})}
				</Layout>
				<Layout>
					{btnSizes.map((size) => {
						return <Button type="primary" text="primary" size={size} />;
					})}
				</Layout>
				<Layout>
					<Card>This is the Card 1.</Card>
					<Card>
						<ul>
							<li>1. Modal</li>
						</ul>
						<button onClick={this._handleModal}>Toggle Modal</button>
						{this.state.toggleModal && <BasicModal handleModal={this._handleModal} hideClose={false} />}
					</Card>
					<Card>This is the Card 3.</Card>
				</Layout>
				<Layout>
					<Card>
						<ul>
							<li>1. Default dropdown is close</li>
							<li>
								2. If you want to default to default to open. Set the default propTypes 'toggleList =
								open'
							</li>
						</ul>
						<Dropdown title="Dropdown Close" toggleList={true} toggleItems={toggleItems} />
					</Card>
					<Card>
						<ul>
							<li>1. Open dropdown - To open you need to click to the dropdown</li>
						</ul>
						<Dropdown title="Dropdown Open" toggleList={false} toggleItems={toggleItems} />
					</Card>
				</Layout>
				<Layout>
					<Card>
						<ul>
							<li>1. Bar Horizontal</li>
							<li>2. Bar Column</li>
						</ul>
						<Graph graphType="bar" barClass="bar-horizontal" barData={barData} />
						<Graph graphType="bar" barData={barData} />
					</Card>
					<Card>
						<ul>
							<li>1. Donut Graph</li>
						</ul>
						<Graph graphType="donut" donutData={donutData} />
					</Card>
				</Layout>
			</React.Fragment>
		);
	}
}

export default LayoutPage;
