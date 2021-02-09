// Inizializzazione Vue
var app = new Vue ({
  el: '#app',
  data:{
    album: []  // Array degli album
  },

// Funzione chiamata axios
  mounted: function () {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => {

      this.album = risposta.data.response;
    });

    // console.log(album); non posso fare il log dell'array dato che la chiamata è asincrona
  }

});
