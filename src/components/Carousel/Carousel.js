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

const Slide = ({ image, thumbnails }) => {
	const type = thumbnails ? 'thumbnail' : 'slide';
	const styles = {
		backgroundImage: `url(${image.img})`
	};
	const overlayStyle = {
		width: image.title ? '100%' : '0%',
		height: image.title ? '100%' : '0%'
	};
	const Tag = image.action ? image.action : 'div';
	return (
		<div className={`${type}`}>
			<div className={`${type}__image`} style={styles}>
				<div className={`${type}__overlay`} style={overlayStyle} />
				<div className={`${type}__bodywrapper ${image.theme === 'dark' ? 'slide--dark' : 'slide--light'}`}>
					<div className={`${type}__title`}>{image.title}</div>
					<div className={`${type}__subtitle`}>{image.subtitle}</div>
					<div className={`${type}__action`}>
						<Tag className={`${type}__${image.action}`} {...image.action_props}>
							{image.action_label}
						</Tag>
					</div>
				</div>
			</div>
		</div>
	);
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
		if (this.state.currentIndex === 2 && this.props.thumbnails) return;

		if (!this.props.thumbnails) {
			this.setState((prevState) => ({
				currentIndex: prevState.currentIndex - 1,
				translateValue: prevState.translateValue + this.slideWidth()
			}));
		} else {
			this.setState((prevState) => ({
				currentIndex: prevState.currentIndex - 1,
				translateValue: prevState.translateValue + this.slideWidth() / 3
			}));
		}
	};

	goToNextSlide = () => {
		if (this.state.currentIndex === this.props.images.length - 1) {
			return this.setState({
				currentIndex: 0,
				translateValue: 0
			});
		}

		if (!this.props.thumbnails) {
			this.setState((prevState) => ({
				currentIndex: prevState.currentIndex + 1,
				translateValue: prevState.translateValue + -this.slideWidth()
			}));
		} else {
			this.setState((prevState) => ({
				currentIndex: prevState.currentIndex === 0 ? 3 : prevState.currentIndex + 1,
				translateValue: prevState.translateValue + -(this.slideWidth() / 3)
			}));
		}
	};

	slideWidth = () => {
		return document.querySelector('.slide').clientWidth;
	};

	render() {
		const { images, thumbnails, action } = this.props;
		return (
			<div className="slider">
				<div
					className="slider__wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}
				>
					{images.map((image, i) => <Slide key={i} image={image} thumbnails={thumbnails} />)}
				</div>

				<LeftArrow goToPrevSlide={this.goToPrevSlide} />

				<RightArrow goToNextSlide={this.goToNextSlide} />
			</div>
		);
	}
}

Carousel.propTypes = {
	images: PropTypes.array.isRequired,
	thumbnails: PropTypes.bool.isRequired
};

Carousel.defaultProps = {
	images: [],
	thumbnails: false
};

export default Carousel;
