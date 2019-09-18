import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LeftArrow = (props) => {
	return (
		<div className="arrow arrow--back" onClick={props.goToPrevSlide}>
			<i className="fas fa-chevron-left" aria-hidden="true" />
		</div>
	);
};

const RightArrow = (props) => {
	return (
		<div className="arrow arrow--next" onClick={props.goToNextSlide}>
			<i className="fas fa-chevron-right" aria-hidden="true" />
		</div>
	);
};

const Slide = ({ image }) => {
	const styles = {
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 60%'
	};
	return <div className="slide" style={styles} />;
};

class Carousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentIndex: 0,
			translateValue: 0
		};
	}

	goToPrevSlide = () => {
		if (this.state.currentIndex === 0) return;

		this.setState((prevState) => ({
			currentIndex: prevState.currentIndex - 1,
			translateValue: prevState.translateValue + this.slideWidth()
		}));
	};

	goToNextSlide = () => {
		if (this.state.currentIndex === this.props.images.length - 1) {
			return this.setState({
				currentIndex: 0,
				translateValue: 0
			});
		}

		this.setState((prevState) => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -this.slideWidth()
		}));
	};

	slideWidth = () => {
		return document.querySelector('.slide').clientWidth;
	};

	render() {
		return (
			<div className="slider">
				<div
					className="slider__wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}
				>
					{this.props.images.map((image, i) => <Slide key={i} image={image} />)}
				</div>

				<LeftArrow goToPrevSlide={this.goToPrevSlide} />

				<RightArrow goToNextSlide={this.goToNextSlide} />
			</div>
		);
	}
}

Carousel.propTypes = {
	images: PropTypes.array.isRequired
};

Carousel.defaultProps = {
	images: []
};

export default Carousel;
