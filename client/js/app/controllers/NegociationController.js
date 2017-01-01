class NegociationController {

	constructor() {
		let $          = document.querySelector.bind(document);
		this._date     = $('#data');
		this._quantity = $('#quantidade');
		this._value    = $('#valor');
		
		this._negociationList  = new NegociationList(model => this._negociationsView.render(model));
		this._negociationsView = new NegociationsView($('#negociationsView'));
		this._negociationsView.render(this._negociationList);
		
		this._message     = new Message();
		this._messageView = new MessageView($('#messageView'));
		this._messageView.render(this._message);
	}

	add(event) {
		event.preventDefault();

		this._negociationList.push(this._createNegociation());

		this._message.text = 'Negotiation added successfully.';
		this._messageView.render(this._message);
		this._clearForm();
	}

	_createNegociation() {
		return new Negociation(
			DateHelper.textToDate(this._date.value),
			this._quantity.value,
			this._value.value
		);
	}

	_clearForm() {
		this._date.value     = '';
		this._quantity.value = 1;
		this._value.value    = 0.0;
		this._date.focus();
		
	}

	clearNegociations() {
		this._negociationList.clear();

		this._message.text = 'Negociations removed successfully.';
		this._messageView.render(this._message);
	}

	get date() {
		return this._date;
	}

	get quantity() {
		return this._quantity;
	}

	get value() {
		return this._value;
	}
}