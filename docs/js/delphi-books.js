function AfficheFiltres() {
	livres = $('span.livre');
	annees = [];
	for (var i = 0; i<livres.length; i++) {
		annee=$(livres[i]).data('annee');
		if (-1 == annees.indexOf(annee)) {
			annees[annees.length]=annee;
		}
	}
	if (annees.length>0) {
		annees.sort();
		filtre='';
		for (var i = 0; i<annees.length; i++) {
			filtre=filtre+' [<a href="#" data-annee="'+annees[i]+'" class="AnneeSelectionnee">'+annees[i]+'</a>]';
		}
		$('#LivresParAnnee').append(filtre);
		$('.AnneeSelectionnee').click(function() {
			annee=$(this).data('annee');
			livres = $('span.livre');
			livres.filter('.a'+annee).show();
			livres.not('.a'+annee).hide();
		});
	}
	$('#AnnuleFiltreAnnee').click(function() {
		$('span.livre').show();
	});
}