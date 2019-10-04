import React, { Component } from 'react';

import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import Dropdown from '../components/Dropdown/Dropdown';
import BasicModal from '../components/BasicModal/BasicModal';
import Graph from '../components/Graph/Graph';
import Button from '../components/Button/Button';
import InputBox from '../components/Input/InputBox';
import Pagination from '../components/Pagination/Pagination';
import Checkbox from '../components/Checkbox/Checkbox';
import RadioButton from '../components/RadioButton/RadioButton';
import RangeSlider from '../components/RangeSlider/RangeSlider';
import CheckBoxTwo from '../components/Checkbox/CheckBox2';
import styles from '../styles/_checkbox.scss';
import styles2 from '../styles/_rangeSlider.scss';
import style3 from '../styles/_radiobutton.scss';
import Carousel from '../components/Carousel/Carousel';
import { Link } from 'react-router-dom';

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

		const btnTypes = ['default', 'danger', 'primary', 'success'];
		const btnSizes = ['xs', 'sm', 'md', 'lg'];

		const radioButtonOptns = [
			{
				value: 'option1',
				name: 'option1',
				label: 'Option 1'
			},
			{
				value: 'option2',
				name: 'option2',
				label: 'Option 2'
			},
			{
				value: 'option3',
				name: 'option3',
				label: 'Option 3'
			}
		];

		const testImgs = [
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7be318f2be9/lg_shutterstock_405027658.eps.png',
				title: 'Design Workspace',
				subtitle: 'New Courses and activities to learn',
				action: 'button md',
				action_label: 'More Details',
				action_props: {
					onClick: () => window.alert('TEST')
				},
				theme: 'dark'
			},
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7be318f2be9/lg_shutterstock_338049497.jpg.jpg',
				title: 'Test Text',
				subtitle: 'Testing this text with a',
				action: 'a',
				action_label: 'Click for details',
				action_props: {
					href: '#'
				},
				theme: 'dark'
			},
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7be318f2be9/lg_shutterstock_416885032.jpg.jpg'
			},
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7bde24d9c9a/lg_shutterstock_487144453.jpg.jpg',
				title: 'Test Text',
				subtitle: 'Testing this text with link',
				action: Link,
				action_label: 'Click for details',
				action_props: {
					to: '#'
				},
				theme: 'dark'
			},
			{
				img: 'https://brandspace.deloitte.com/downloads/5d782a39f09bd/lg_shutterstock_59642665.jpg.jpg'
			}
		];

		return (
			<React.Fragment>
				<Layout>
					<Carousel images={testImgs} />
				</Layout>
				<Layout>
					<Carousel thumbnails images={testImgs} />
				</Layout>
				<Layout>
					{btnTypes.map((type) => {
						return <Button type={type} text={type} size="sm" />;
					})}
				</Layout>
				<Layout>
					{btnSizes.map((size) => {
						return <Button type="primary" text="primary" size={size} />;
					})}
					<Button type="primary" text="disabled" disabled />
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

				<Card>
					<Layout>
						<InputBox />
					</Layout>
				</Card>

				{/* <Layout>
                    <Card>
                        <Pagination></Pagination>
                    </Card>
                </Layout> */}

				<Layout>
					<Card>
						<RadioButton
							radioButtonStyle={'radio-custom'}
							radioButtonStyleLabel={'radio-custom-label'}
							defaultOption={radioButtonOptns[0].value}
							radioButtonOptns={radioButtonOptns}
						/>
					</Card>
				</Layout>

				<Layout>
					<Card>
						<h1>Default RangeSlider</h1>
						<RangeSlider value={500} min={300} max={4000} />
						<h1>Colored RangeSlider</h1>
						<RangeSlider rangeSliderStyle={'vertical'} value={500} min={300} max={4000} />
						<RangeSlider
							rangeSliderStyle={'rangeSlider rangeSlider--bgcolorGreen'}
							value={500}
							min={300}
							max={4000}
						/>
						<RangeSlider
							rangeSliderStyle={'rangeSlider rangeSlider--bgcolorRed'}
							value={500}
							min={300}
							max={4000}
						/>
						<RangeSlider
							rangeSliderStyle={'rangeSlider rangeSlider--bgcolorBlue'}
							value={500}
							min={300}
							max={4000}
						/>
					</Card>
				</Layout>

				<Layout>
					<Card>
						<h1>Default Check Box</h1>
						<Checkbox
							containerCheckBoxStyle={'default'}
							labelCheckBoxStyle={'default'}
							spanStyle={'default'}
							value="Checked"
							selected={true}
							disabled={false}
						/>
						<Checkbox value="Unchecked" selected={false} disabled={true} />
						<Checkbox value="Disabled" selected={true} disabled={true} />

						<h1>Container Check Box</h1>

						<Checkbox
							containerCheckBoxStyle={'containerCheckBox'}
							labelCheckBoxStyle={'labelCheckBoxStyle'}
							spanStyle={'checkmark'}
							value="Option 1"
							selected={false}
							disabled={false}
						/>

						<Checkbox
							containerCheckBoxStyle={'containerCheckBox'}
							labelCheckBoxStyle={'labelCheckBoxStyle'}
							spanStyle={'checkmark'}
							value="Option 2"
							selected={false}
							disabled={false}
						/>

						<Checkbox
							containerCheckBoxStyle={'containerCheckBox'}
							labelCheckBoxStyle={'labelCheckBoxStyle'}
							spanStyle={'checkmark'}
							value="Option 3"
							selected={false}
							disabled={false}
						/>
					</Card>

					<Card>
						<h1>Check Box Slider</h1>

						<CheckBoxTwo
							checkBoxStyle={'checkboxOne'}
							checked={false}
							disabled={false}
							value="CheckBox Slider"
							id="1"
						/>

						<CheckBoxTwo
							checkBoxStyle={'checkboxTwo'}
							checked={false}
							disabled={false}
							value="CheckBox Slider Big"
							id="2"
						/>

						<CheckBoxTwo
							checkBoxStyle={'checkboxThree'}
							checked={false}
							disabled={false}
							value="CheckBox Slider On"
							id="3"
						/>

						<CheckBoxTwo
							checkBoxStyle={'checkboxFour'}
							checked={false}
							disabled={false}
							value="CheckBox Small Check"
							id="4"
						/>
					</Card>
				</Layout>
			</React.Fragment>
		);
	}
}

export default LayoutPage;
