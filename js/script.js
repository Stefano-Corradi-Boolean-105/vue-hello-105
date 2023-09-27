
// prendo il metodo createApp dall'oggeto Vue
const { createApp } = Vue;


// l'oggetto contenuto in createApp conterrà TUTTO il codice Vue che dobbiamo scrivere (dati, funzioni, eventi....)
createApp({

  // per impostare i nostri dati (come se fossere le variabili) uso il metodo data
  data(){
    // l'oggetto che retituisce data() ha le nostre "variabili"
    return {
      saluto: 'Ciao Vue da data()',
      nome: 'Ugo',
      cognome: 'De Ughi',
      contatore: 1,
      coloreTesto : 'rosso',
      coloreTestoTemp : '',
      linkHref: 'https://boolean.careers',
      labelLink: 'Vista il sito Boolean',
      modificaTesto: '',
      isActive: true,
      testoHtml: '<strong>testo in grassetto</strong>'
    }
  },

  // methos è una proprità di createApp che de essere un oggetto
  // questo oggetto conterrà le nostre funzioni
  methods: {

    salutoConFunzione(){
      console.log('ciao dalla funzione')
    },

    cambioSaluto(){
      // this è tutto l'oggetto Vue, quindi per accedere a metodi e dati devo prima usare la parola chiave this
      this.saluto = `Ciaooooo ${this.nome} ${this.cognome}`
    },

    clickBtn1(){
      console.log('cliccato bottone 1 ');
    },

    cambioNome(newName){
      this.nome = newName;
    },

    toggleIsActive(){
      this.isActive = !this.isActive;
    },

    tastoRilasciato(){
      this.contatore++;
    },

    handleInvio(){
      console.log('INVIO');
    },

    cambioColoreDaInvio(){
      this.coloreTesto = this.coloreTestoTemp
    }

    

  },

  // mounted è un metodo che viene lacianto quando è montata l'app
  // in mounted (o created) si menttono tutte le attività di inizalizzazione (se occorrono)
  mounted(){
    console.log('APP MONTATA');
    // i metodi presenti in mounted vengono invocati quando l'app viene montata
    this.salutoConFunzione();
    this.cambioSaluto();
  },


  // created è un metodo che viene lacianto quando è creata l'app e viene scatenato prima del mounted
  created(){
    console.log('APP CREATA');
  }

}).mount('#app');