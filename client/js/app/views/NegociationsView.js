class NegociationsView extends View {

	template(model) {
		return `<table class="table table-hover table-bordered">
	        <thead>
	            <tr>
	                <th>DATA</th>
	                <th>QUANTIDADE</th>
	                <th>VALOR</th>
	                <th>VOLUME</th>
	            </tr>
	        </thead>
	        
	        <tbody>
	        	${model.negociations.map(negociation => `
        			<tr>
        				<td>${DateHelper.dateToText(negociation.date)}</td>
        				<td>${negociation.quantity}</td>
        				<td>${negociation.value}</td>
        				<td>${negociation.volume}</td>
        			</tr>
	        	`).join('')}
	        </tbody>
	        	<td colspan="3"></td>
	        	<td>
	        		${model.negociations.reduce((total, negociation) => total + negociation.volume, 0.0)}
	        	</td>
	        <tfoot>
	        </tfoot>
	    </table>`;
	}
}