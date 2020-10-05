var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

// On initialise quelques variables :
  var Client = require('coinbase').Client;
  var client = new Client({'apiKey': 'clée_api',
                         'apiSecret': 'clée_secrète_api'}); //Mettre ici la clée id et la clée secrète de l'api coinbase

  var faultcounter = 0
  var goodcounter = 0
  var n = 0
//La fonction sacrifice :
  function sacrifice(){
        client.getAccount('id_du_compte', function(err, account) {
            account.sendMoney({'to': 'adresse denvoi',
                               'amount': '0.00063',
                               'currency': 'BTC',}, function(err, tx) {
              console.log(tx);
            });
          });
  }
//Mettre juste au dessus l'ID du compte (à la place de id_du_compte) qui envoie les BTC et l'adresse à laquelle ils sont envoyés (à la place de adresse denvoi)

//Programmation pour qu'il s'active à une heure précise, modifiable :
var schedule = require('node-schedule');
var j = schedule.scheduleJob({hour: 00, minute: 00}, function(){
console.log('marche!')

$.ajax({
       url: 'https://habitica.com/api/v3/tasks/user?type=dailys',
       type: 'GET',
       dataType: 'json',
       cache: false,
       beforeSend: function(xhr){
         xhr.setRequestHeader('x-client', 'id client habitica (de la forme b0ec58ae-9a63-4b10-8db0-2ba7176809da-HabiticaApitest)');
         xhr.setRequestHeader('x-api-user', 'cle publique API : (de la forme b0ec58ae-9a63-4b10-8db0-2ba7176809da)');
         xhr.setRequestHeader('x-api-key',  'ma clé secrete Habitica');
       },
    //Ecrire au dessus le numéro du compte, l'ID API et la clée secrete API Habitica
    
    success: function(results, statut){
      var resultat = results.data
      var resultat2 = JSON.stringify(resultat)


      for (let pas = 0; pas < 6; pas++) {
        
        var n = resultat2.indexOf("completed", n + 16);
        var cut = resultat2.substring(n, n + 16);
        if (cut == 'completed":false') {sacrifice()}
        else if (cut == 'completed":true,') {goodcounter++}
        else {console.log('error!')}
     }
     //console.log('fautes :', faultcounter)
     //console.log('bien :', goodcounter)
    },

    error : function(resultt, statut, erreur){
      console.log('erreur')
    },
  });
});