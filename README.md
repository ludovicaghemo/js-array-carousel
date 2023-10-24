# CAROSELLO

## CONSEGNA

Dato un array contenente una lista di cinque immagini, creare un carosello

**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

## SOLUZIONE

1. Inserire dinamicamente le immagini
2. Al click sulla freccia in basso: mostrare immagine successiva;
    Al click sulla freccia in alto: mostrare immagine precedente

### Dati 
Array con le immagini

### Logica del programma
Ciclo for: 
    per ogni elemento dell'array: creare Elemento Immagine

Mostrare immagine: inizialmente mostrare la prima immagine, cui viene data la classe "active"

**Al click sulla freccia in basso:**
- Se indice ‹ (lunghezza dell'array - 1)
    - Togliere la classe dall'elemento corrente
    - Incrementare l'indice
    - Aggiungere la classe active al nuovo indice corrente

**Al click sulla freccia in alto**
- Se indice > 0
    - Togliere la classe dall'elemento corrente
    - Decrementare l'indice
    - Aggiungere la classe active al nuovo indice corrente


