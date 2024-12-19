const datiPagina = {
    navbar: [
        { name: "Home", link: "index.html", active: false },
        { name: "Socket", link: "socket.html", active: false },
        { name: "Informatica", link: "informatica.html", active: true },
        { name: "Sistemi", link: "sistemi.html", active: false },
        { name: "Glossario", link: "glossario.html", active: false }
    ],
    header: {
        title: "MySQL e PHP",
        subtitle: "Esplora come MySQL e PHP sono utilizzati nel mondo dello sviluppo web."
    },
    "sections": [
        {
            "id": "mysql",
            "title": "Cosa è MySQL?",
            "content": [
                {
                    "type": "text",
                    "value": "<strong>MySQL</strong> è un sistema di gestione di database relazionali (RDBMS) molto utilizzato nel mondo dello sviluppo web. È open-source, il che significa che chiunque può usarlo, modificarlo e distribuirlo liberamente."
                },
                {
                    "type": "text",
                    "value": "MySQL è utilizzato per memorizzare i dati in applicazioni che necessitano di grandi quantità di informazioni. Gli sviluppatori lo utilizzano per creare, leggere, aggiornare ed eliminare dati, operazioni note come CRUD (Create, Read, Update, Delete)."
                },
                {
                    "type": "dropdown",
                    "label": "Visualizza l'immagine",
                    "image": "img/mysql.png",
                    "alt": "MySQL Logo"
                }
            ]
        },
        {
            "id": "php",
            "title": "Cosa è PHP?",
            "content": [
                {
                    "type": "text",
                    "value": "<strong>PHP</strong> (Hypertext Preprocessor) è un linguaggio di programmazione server-side utilizzato per creare pagine web dinamiche. Viene eseguito sul server web e genera contenuti dinamici che vengono poi inviati al browser dell'utente."
                },
                {
                    "type": "text",
                    "value": "PHP è usato per interagire con il server, elaborare i dati provenienti dagli utenti (come quelli inviati tramite form), generare contenuti dinamici e gestire sessioni o cookie. È utilizzato in combinazione con MySQL per memorizzare e recuperare i dati da un database."
                },
                {
                    "type": "dropdown",
                    "label": "Visualizza l'immagine",
                    "image": "img/php.png",
                    "alt": "PHP Logo"
                }
            ]
        },
        {
            "id": "php-mysql",
            "title": "PHP e MySQL: Come lavorano insieme",
            "content": [
                {
                    "type": "text",
                    "value": "PHP e MySQL lavorano insieme per creare applicazioni web dinamiche che richiedono l'interazione con i dati. PHP agisce come linguaggio di programmazione server-side, generando contenuti che possono essere visualizzati su un sito web. MySQL, d'altra parte, gestisce il database dove vengono memorizzati tutti i dati dell'applicazione."
                },
                {
                    "type": "text",
                    "value": "Ad esempio, se un utente si registra su un sito web, PHP può raccogliere i dati del form e salvarli nel database MySQL. In seguito, PHP può essere usato per recuperare questi dati e visualizzarli in modo dinamico, come nel caso di un profilo utente."
                },
                {
                    "type": "dropdown",
                    "label": "Visualizza l'immagine",
                    "image": "img/esempiomysqlphp.png",
                    "alt": "PHP MySQL"
                }
            ]
        }
    ],
    footer: {
        text: "Copyright © Creato da Moise Roland, Classe 5E."
    }
};
