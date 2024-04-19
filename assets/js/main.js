
$( document ).ready(function() {
    var proxEventi = [];

    function elencaEventi(proxEventi) {
        
        var template = $('#handlebars-evento').html();
        var templateScript = Handlebars.compile(template);
        proxEventi.forEach(function(item) {
            var html = templateScript(item);
            
            $('#proxEventi').append(html);
        });
    }

    
    $.getJSON( "/events.json", function( data ) {
        if (data) {
            var startDate = new Date();
            var risultati = data.filter(function (item) {
                var hitDate = item.date;
                hitDate = new Date(hitDate);
                hitDateMatchExists = hitDate > startDate ? true : false;
                if (hitDateMatchExists) {
                    proxEventi.push(item);
                }
            });
            elencaEventi(proxEventi);
        } else {
            $('#proxEventi').remove();
        }
    });

});