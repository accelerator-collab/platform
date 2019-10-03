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
		backgroundImage: `url(${image.img})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};
	return (
		<div className="slide" style={styles}>
			<div className={`slide__bodywrapper ${image.theme === 'dark' ? 'slide--dark' : 'slide--light'}`}>
				<div className="slide__title">{image.title}</div>
				<div className="slide__subtitle">{image.subtitle}</div>
				<div className="slide_button">{image.button}</div>
			</div>
		</div>
	);
};

const Thumb = ({ image }) => {
	const style = {
		backgroundImage: `url(${image.img})`
	};
	const overlayStyle = {
		width: image.title ? '100%' : '0%',
		height: image.title ? '100%' : '0%'
	};
	return (
		<div className="thumbnail">
			<div className="thumbnail__image" style={style}>
				<div className="thumbnail__overlay" style={overlayStyle} />
				<div className={`thumbnail__bodywrapper ${image.theme === 'dark' ? 'slide--dark' : 'slide--light'}`}>
					<div className="thumbnail__title">{image.title}</div>
					<div className="thumbnail__subtitle">{image.subtitle}</div>
					<div className="thumbnail_button">{image.button}</div>
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
		const { images, thumbnails } = this.props;
		return (
			<div className="slider">
				<div
					className="slider__wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}
				>
					{thumbnails ? (
						images.map((image, i) => {
							return <Thumb key={i} image={image} />;
						})
					) : (
						images.map((image, i) => {
							return <Slide key={i} image={image} />;
						})
					)}
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
