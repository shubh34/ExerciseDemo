import { useState, useEffect } from 'react';

export const getMiddleList = (defaultArray, middleIndex, defaultElementSizing) => {
	const actualArrayLength = defaultArray.length;
	const lastIndex = middleIndex + defaultElementSizing;
	const actualLastIndex = lastIndex % actualArrayLength;
	if (lastIndex >= actualArrayLength) {
		const middleArray = defaultArray.slice(middleIndex);
		return [...middleArray, ...defaultArray.slice(0, actualLastIndex)];
	}

	return defaultArray.slice(middleIndex, lastIndex);
};

export const getLastList = (defaultArray, middleIndex, defaultElementSizing) => {
	const actualArrayLength = defaultArray.length;
	const lastIndex = middleIndex + defaultElementSizing;
	const actualLastIndex = lastIndex % actualArrayLength;
	const lastArray = defaultArray.slice(actualLastIndex, actualLastIndex + defaultElementSizing);
	if (actualLastIndex + defaultElementSizing >= actualArrayLength) {
		return [...lastArray, ...defaultArray.slice(0, (actualLastIndex + defaultElementSizing + 1) % actualArrayLength)];
	}
	return lastArray;
};
export const getFirstList = (defaultArray, middleIndex, defaultElementSizing) => {
	const actualArrayLength = defaultArray.length;
	const firstIndex = middleIndex - defaultElementSizing;
	const actualFirstIndex = firstIndex >= 0 ? firstIndex : actualArrayLength - Math.abs(firstIndex);
	const firstElementIndex = actualFirstIndex === 0 ? actualArrayLength - 1 : actualFirstIndex - 1;
	const firstElement = defaultArray[firstElementIndex];
	if (actualFirstIndex + defaultElementSizing >= defaultArray.length) {
		const firstArray = defaultArray.slice(actualFirstIndex);
		return [firstElement, ...firstArray, ...defaultArray.slice(0, (actualFirstIndex + defaultElementSizing) % actualArrayLength)];
	}
	return [firstElement, ...defaultArray.slice(actualFirstIndex, (actualFirstIndex + defaultElementSizing) % actualArrayLength)];
};

export const getSliderElement = (defaultArray, middleIndex, defaultElementSizing) => {
	const firstList = getFirstList(defaultArray, middleIndex, defaultElementSizing);
	const middleList = getMiddleList(defaultArray, middleIndex, defaultElementSizing);
	const lastList = getLastList(defaultArray, middleIndex, defaultElementSizing);
	return [...firstList, middleList, lastList];
};

export const useSlider = (sliderRef, actualSliderItems, defaultElementSizing = 7) => {
	const [sliderItems, setSliderItems] = useState(actualSliderItems);
	const [transition, setSliderTransition] = useState(true);
	const [activeSliderIndex, setActiveSliderItemIndex] = useState(0);
	const [translate, setSliderTranslate] = useState(0);
	const handlePrevious = () => {
		const calculatedActiveIndex = activeSliderIndex - defaultElementSizing;
		const actualActiveIndex = (calculatedActiveIndex >= 0 ? calculatedActiveIndex : defaultElementSizing - Math.abs(calculatedActiveIndex)) % actualSliderItems.length;
		setSliderTranslate(translate + 1.13);
		setSliderTransition(true);
		setTimeout(() => {
			setSliderItems(getSliderElement(actualSliderItems, actualActiveIndex, defaultElementSizing));
			setActiveSliderItemIndex(actualActiveIndex);
			setSliderTranslate(-1.13);
		}, 100);
	};
	const handleNext = () => {
		const calculatedActiveIndex = activeSliderIndex + defaultElementSizing;
		const actualActiveIndex = calculatedActiveIndex % actualSliderItems.length;
		setSliderTranslate(translate - 1.1425);
		setSliderTransition(true);
		setTimeout(() => {
			setSliderItems(getSliderElement(actualSliderItems, actualActiveIndex, defaultElementSizing));
			setActiveSliderItemIndex(actualActiveIndex);
			setSliderTransition(false);
			setSliderTranslate(-1.145);
		}, 300);
	};
	useEffect(() => {
		setSliderItems(actualSliderItems);
	}, [actualSliderItems]);
	return { transition, translate, sliderItems, handlePrevious, handleNext };
};
