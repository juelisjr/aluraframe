class DateHelper {
	
	constructor() {
		throw new Error('This class can\' be instantiated');
	}

	static textToDate(text) {
		if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
			throw new Error('Need to be in the format: yyyy-mm-dd');
		}

		return new Date(...text.split('-').map((item, index) => item - index % 2));
	}

	static dateToText(date) {
		return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
	}
}