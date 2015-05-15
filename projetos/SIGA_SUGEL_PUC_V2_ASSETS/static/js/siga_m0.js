// $(window).on('ready', function () {
$(document).ready(sigaFunction);
$(window).on('resize', sigaFunction);

/* Funcção para selecionar todos os checkboxes de uma tabela */

function selecionarTodos(checkboxMaster, className){
	className = '.' + className;
	if(checkboxMaster.checked){
		$(className).prop('checked', 'checked');
	} else {
		$(className).prop('checked', '');
	}
}



