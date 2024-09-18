const btnAdd = document.getElementById('addElement');

btnAdd.addEventListener('click', function(){
	const container = document.getElementById('box');
	const inputs = container.querySelectorAll('input');
	const x = inputs.length - 4;
	if (inputs[x].value == ""){
			alert("Primero debes agregar un producto");
		}else if (inputs[x + 1].value <= 0 && inputs[x + 2].value <= 0 && inputs[x +	 3 ].value <= 0) {
				alert("No pueden estar todos los campos vacíos")
		}else{
			inputs[x+1].value == "" ? inputs[x+1].value = 0: undefined;
			inputs[x+2].value == "" ? inputs[x+2].value = 0: undefined;
			inputs[x+3].value == "" ? inputs[x+3].value = 0: undefined;

			addNode();
			}
});

function eliminate(event){
	const divToDelete = event.target.closest('.count');
	divToDelete.remove();
}

function addNode(){
	let box = document.getElementById('box')
	let div = document.createElement('div');
	let inProduct = document.createElement('input');
	let inN1 = document.createElement('input');
	let inN2 = document.createElement('input');
	let inN3 = document.createElement('input');
	let btnCancel = document.createElement('button');
	let iconCancel = document.createElement('span');

	div.setAttribute('class', 'count');

	inProduct.setAttribute('type', 'text');
	inProduct.setAttribute('name', 'product');
	inProduct.setAttribute('placeholder', 'producto')
	inProduct.setAttribute('autocomplete', 'off')

	inN1.setAttribute('type', 'number');
	inN1.setAttribute('name', 'garcia');
	inN1.setAttribute('placeholder', 'Cantidad')
	inN1.setAttribute('step', '1')
	inN1.setAttribute('min', '0')

	inN2.setAttribute('type', 'number');
	inN2.setAttribute('name', 'zenon');
	inN2.setAttribute('placeholder', 'Cantidad')
	inN1.setAttribute('step', '1')
	inN1.setAttribute('min', '0')

	inN3.setAttribute('type', 'number');
	inN3.setAttribute('name', 'snJuan');
	inN3.setAttribute('placeholder', 'Cantidad')
	inN1.setAttribute('step', '1')
	inN1.setAttribute('min', '0')

	btnCancel.addEventListener('click', eliminate);
	btnCancel.setAttribute('class', 'delete');

	iconCancel.className = 'material-symbols-rounded delete_icon';
	iconCancel.innerText = 'delete_forever';
	btnCancel.appendChild(iconCancel);

	div.appendChild(inProduct);
	div.appendChild(inN1);
	div.appendChild(inN2);
	div.appendChild(inN3);
	div.appendChild(btnCancel)

	box.appendChild(div);
}