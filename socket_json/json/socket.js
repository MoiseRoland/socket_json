// socketData.js
const socketData = {
    "navbar": [
        {"name": "Home", "link": "index.html", "active": false},
        {"name": "Socket", "link": "socket.html", "active": true},
        {"name": "Informatica", "link": "informatica.html", "active": false},
        {"name": "Sistemi", "link": "sistemi.html", "active": false},
        {"name": "Glossario", "link": "glossario.html", "active": false}
    ],
    "hero": {
        "title": "Cos'è una Socket?",
        "text": "Una socket è un punto finale di comunicazione in una rete. Scopri come funziona e quali sono le sue applicazioni.",
        "image": "img/Socket-Programming.png"
    },
    "sections": [
        {
            "id": "cos-e-una-socket",
            "title": "Cos'è una Socket?",
            "content": "Una socket è un'interfaccia di programmazione che consente a due processi di comunicare attraverso una rete.",
        },
        {
            "id": "tipologie-di-socket",
            "title": "Tipologie di Socket",
            "cards": [
                {
                    "title": "Stream Socket (SOCK_STREAM)",
                    "description": "Utilizza TCP, garantendo affidabilità e ordine.",
                    "details": ["Affidabile", "Connessione necessaria", "Applicazioni: web, email, FTP."],
                    "color": "info"
                },
                {
                    "title": "Datagram Socket (SOCK_DGRAM)",
                    "description": "Utilizza UDP, senza connessione.",
                    "details": ["Velocità elevata", "Nessuna garanzia di consegna", "Applicazioni: VoIP, giochi online."],
                    "color": "warning"
                }
            ]
        },
        {
            "id": "considerazioni-aggiuntive",
            "title": "Considerazioni Aggiuntive",
            "points": [
                "Gestire errori come timeout e interruzioni di rete.",
                "Usare protocolli sicuri come TLS/SSL.",
                "Utilizzare multi-threading per gestire più connessioni."
            ]
        }
    ],
    "footer": {
        "text": "Copyright &copy; Creato da Moise Roland, Classe 5E."
    }
};
