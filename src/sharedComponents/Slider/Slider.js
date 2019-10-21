/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';
import SliderWrapper from './SliderWrapper/SliderWrapper';
import SlideButton from './SlideButton/SlideButton';

class Slider extends Component {
	constructor(props) {
		super(props);
		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.state = {
			distance: 0,
			hasNext: true,
			hasPrev: false
		};
	}

	handlePrevious() {
		const { distance } = this.state;
		this.setState(
			{
				distance: distance + this.silder.clientWidth
			},
			() => {
				const { distance } = this.state;
				this.setState({
					hasNext: this.silder.scrollWidth - Math.abs(distance) > 0,
					hasPrev: distance < 0
				});
			}
		);
	}

	handleNext() {
		const { distance } = this.state;
		this.setState(
			{
				distance: distance - this.silder.clientWidth
			},
			() => {
				const { distance } = this.state;
				this.setState({
					hasNext: this.silder.scrollWidth - Math.abs(distance) > this.silder.clientWidth,
					hasPrev: distance < 0
				});
			}
		);
	}

	render() {
		const { distance, hasPrev, hasNext } = this.state;
		const { children } = this.props;
		const slideStyle = {
			transform: `translate3d(${distance}px, 0, 0)`
		};
		return (
			<SliderWrapper>
				<div className='slider'>
					<div ref={ref => (this.silder = ref)} style={slideStyle} className='slider__container'>
						{children}
					</div>
				</div>
				{hasPrev && <SlideButton type='prev' onClick={this.handlePrevious} />}
				{hasNext && <SlideButton type='next' onClick={this.handleNext} />}
			</SliderWrapper>
		);
	}
}

Slider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default React.memo(Slider);
