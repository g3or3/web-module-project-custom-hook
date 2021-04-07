import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const value = window.localStorage.getItem(key);
		if (value) return JSON.parse(value);
		return initialValue;
	});

	const setValue = (value) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};

export default useLocalStorage;
