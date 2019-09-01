import React, { Component } from 'react';
import cx from 'classnames';
import './Slider.scss';
import { tsImportEqualsDeclaration } from '@babel/types';
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
			hasPrev: false,
		};
	}

	handlePrevious() {
		this.setState({
			distance: this.state.distance + this.refs.test.clientWidth,
		}, (() => {
			this.setState({
				hasNext: this.refs.test.scrollWidth - Math.abs(this.state.distance) > 0,
				hasPrev: this.state.distance < 0,
			});
		}));
	}

	handleNext() {
		this.setState({
			distance: this.state.distance - this.refs.test.clientWidth,
		}, (() => {
			this.setState({
				hasNext: this.refs.test.scrollWidth - Math.abs(this.state.distance) > this.refs.test.clientWidth,
				hasPrev: this.state.distance < 0,
			});
		}));
	}

	render() {
		const { distance, hasPrev, hasNext } = this.state;
		const slideStyle = {
			transform: `translate3d(${distance}px, 0, 0)`,
		};
		return (
			<SliderWrapper>
				<div
					className={cx('slider')}
				>
					<div ref="test" style={slideStyle} className="slider__container">{this.props.children}</div>
				</div>
				{hasPrev && <SlideButton type="prev" onClick={this.handlePrevious} />}
				{hasNext && <SlideButton type="next" onClick={this.handleNext} />}
			</SliderWrapper>
		);
	}
}

export default Slider;
