Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.


Creo un bottone ed una sezione dove inserire le caselle nel dom.
Do le grandezze alla sezione. Do le grandezze alle celle che dovrò inserire per creare la griglia
Creo una funzione per il click sul bottone per far generare le celle nella sezione tramite un ciclo
Pulisco in caso ci fosse una griglia già presente.
Creo un ciclo for per creare ed inserire le celle nella sezione.
Dentro il ciclo for includo anche l'indice della cella ed inoltre una funzione per l'aggiunta di una classe quando la determinata cella viene cliccata
Creo una classe nel css per come deve essere visualizzata la cella quando cliccata.
Quando la cella viene cliccata faccio un console.log del suo index