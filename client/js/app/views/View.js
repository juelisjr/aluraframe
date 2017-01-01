class View {

	constructor (element) {
		this._element = element;
	}

	template() {
		throw new Error('The method \'template\' need to be implemented.');
	}

	render(model) {
		this._element.innerHTML = this.template(model);
	}
}