const sistemiData = {
    "navbar": [
        { "name": "Home", "link": "index.html", "active": false },
        { "name": "Socket", "link": "socket.html", "active": false },
        { "name": "Informatica", "link": "informatica.html", "active": false },
        { "name": "Sistemi", "link": "sistemi.html", "active": true },
        { "name": "Glossario", "link": "glossario.html", "active": false }
    ],
    "header": {
        "title": "Modello OSI e Livello di Trasporto",
        "subtitle": "Una panoramica sul modello OSI e sull'importanza del livello di trasporto nelle comunicazioni di rete."
    },
    "sections": [
        {
            "id": "cos-e-il-modello-osi",
            "title": "Cos'è il Modello OSI?",
            "content": [
                { "type": "text", "value": "Il Modello OSI (Open Systems Interconnection) è un modello teorico che descrive come i dati viaggiano attraverso una rete di computer. È composto da sette livelli, ognuno dei quali ha una funzione specifica nel processo di trasmissione dei dati." }
            ]
        },
        {
            "id": "sette-livelli-osi",
            "title": "I Sette Livelli del Modello OSI",
            "accordion": [
                { "title": "Livello 1: Fisico", "content": "Si occupa della trasmissione fisica dei dati attraverso il mezzo di comunicazione (es. cavi, fibre ottiche, onde radio)." },
                { "title": "Livello 2: Data Link", "content": "Gestisce la comunicazione tra due dispositivi nella stessa rete fisica, controllando errori e flusso." },
                { "title": "Livello 3: Rete", "content": "Si occupa dell'instradamento dei pacchetti di dati attraverso la rete, determinando il percorso più efficiente." },
                { "title": "Livello 4: Trasporto", "content": "Gestisce il trasferimento di dati tra i dispositivi di rete, assicurando che i dati siano ricevuti in modo completo e corretto." },
                { "title": "Livello 5: Sessione", "content": "Gestisce le sessioni di comunicazione, stabilendo, mantenendo e terminando le connessioni." },
                { "title": "Livello 6: Presentazione", "content": "Si occupa della codifica e della decodifica dei dati, assicurando che siano compatibili tra le applicazioni." },
                { "title": "Livello 7: Applicazione", "content": "Fornisce i servizi necessari per l'interazione diretta con l'utente, come il protocollo HTTP per la navigazione web." }
            ]
        },
        {
            "id": "livello-di-trasporto",
            "title": "Il Livello di Trasporto",
            "cards": [
                {
                    "title": "Protocollo TCP",
                    "description": "Il TCP (Transmission Control Protocol) è un protocollo di connessione orientata, che garantisce che i pacchetti di dati vengano ricevuti correttamente, ritrasmettendo quelli persi.",
                    "image": "img/EN-tcp.png"
                },
                {
                    "title": "Protocollo UDP",
                    "description": "L'UDP (User Datagram Protocol) è un protocollo senza connessione, che non garantisce l'affidabilità, ma è più veloce del TCP. È utilizzato in applicazioni dove la velocità è cruciale.",
                    "image": "img/udp.jpg"
                }
            ]
        }
    ],
    "footer": {
        "text": "Copyright &copy; Creato da Moise Roland, Classe 5E."
    }
};
