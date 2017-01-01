class NegociationList {

	constructor(trap) {
		this._negociations = [];
		this._trap         = trap;
	}

	push(negociation) {
		this._negociations.push(negociation);
		this._trap(this);
	}

	get negociations() {
		return [].concat(this._negociations);
	}

	clear() {
		this._negociations = [];
		this._trap(this);
	}
}
