function SetCheck(element, state) {
	if (element.checked && !state) {
		element.click()
	} else if (!element.checked && state) {
		element.click()
	}
}