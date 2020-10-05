/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';
import SliderWrapper from './SliderWrapper/SliderWrapper';
import SlideButton from './SlideButton/SlideButton';
import { useSlider } from './useSlider';

const SliderWithHook = ({ children }) => {
	const sliderRef = useRef();
	const { transition, translate, handlePrevious, handleNext, sliderItems } = useSlider(sliderRef, children);
	const slideStyle = {
		transform: `translate3d(${translate * 100}%, 0, 0)`,
		transition: transition ? 'transform .5s ease 0s' : 'none'
	};
	return (
		<SliderWrapper>
			<div className='slider'>
				<div ref={sliderRef} style={slideStyle} className='slider__container'>
					{sliderItems}
				</div>
			</div>
			<SlideButton type='prev' onClick={handlePrevious} />
			<SlideButton type='next' onClick={handleNext} />
		</SliderWrapper>
	);
};

SliderWithHook.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default SliderWithHook;
