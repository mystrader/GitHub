// $(window).on('ready', function () {
  $( document ).ready(sigaFunction);
  $( window ).on('resize', sigaFunction);


function sigaFunction() {

// Pega largura do #panel
var widthPanel = $("#panels").width();
// Define porcentagem limite
var widthLimit =  0.75 * widthPanel;

 // Largura de todas as div class, dividindo os resultados:
 var totalWidth = 0;
 $('.resultado').each(function(index) {totalWidth += parseInt($(this).width(), 10);});
// Se a soma do resultado for MENOR que 80% da largura do panel
if (totalWidth < widthLimit) {};
// Se a soma do resultado for MAIOR que 80% da largura do panel
if (totalWidth > widthLimit) {
  var totalOcult = 0;
// Tratamento dos elementos (validação)
$('.resultado').each(function() {
  totalOcult += parseInt($(this).width(), 10);
    // Abaixo do limite
    if (totalOcult < widthLimit )  {}
    // Acima do limite
  if (totalOcult > widthLimit ) {
      // Transferindo os botões no popoverHiddenContent, exceto botaoMais e botaoVoltar
      $(this).not(".botaoMais, .botaoVoltar").appendTo("#popoverHiddenContent");
    }
  });
};

// Caso popoverHiddenContent estiver vazio, esconder botaoVoltar
if ($('#popoverHiddenContent').is(':empty')){
  $(".botaoVoltar").hide();
}
}


