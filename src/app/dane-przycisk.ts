interface Przycisk
{
    kolejny: number;
    jezyk: number;
    tekst: Array<string>;
    dostep: string;
    dzialanie: string; 
}

const anuluj = ['Anuluj','Cancel','Stornieren','Annuler'];
const cofnij = ['Cofnij','Return','Rückkehr','Revenir'];
const wyloguj = ['Wyloguj','Log out','Ausloggen','Se déconnecter'];
const wykonaj = ['Wykonaj','Execute','Ausführen','Effectuer'];

const Jezyki: Przycisk[] = [
    {kolejny: 1, jezyk: 1, tekst: ['Polski'], dostep:  '', dzialanie: 'konto'},
    {kolejny: 1, jezyk: 2, tekst: ['English'], dostep: '', dzialanie: 'konto'},
    {kolejny: 1, jezyk: 3, tekst: ['Deutsche'], dostep: '', dzialanie: 'konto'},
    {kolejny: 1, jezyk: 4, tekst: ['Français'], dostep: '', dzialanie: 'konto'},
    {kolejny: 0, jezyk: 1, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 1, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 14, jezyk: 1, tekst: ['Service'], dostep: '', dzialanie: 'logowanie-mg'}
]

const Zaloguj: Przycisk[] = [
    {kolejny: 2, jezyk: 0, tekst: ['Logowanie','Login','Anmeldung','Connexion'], dostep:  '', dzialanie: 'logowanie'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: anuluj, dostep: '', dzialanie: 'jezyki'}
]

const Logowanie: Przycisk[] = [
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 1, jezyk: 0, tekst: cofnij, dostep: '', dzialanie: 'konto'},
    {kolejny: 0, jezyk: 0, tekst: anuluj, dostep: '', dzialanie: 'jezyki'}
]


const Dyspozycje: Przycisk[] = [
    {kolejny: 4, jezyk: 0, tekst: ['Wypłata','Cash withdrawal','Bargeldabhebung',"Retrait d'argent"], dostep: '', dzialanie: 'wyplata'},
    {kolejny: 6, jezyk: 0, tekst: ['Wpłata','Cash deposit','Bareinzahlung','Dépôt en espèces'], dostep: '', dzialanie: 'wplata'},
    {kolejny: 8, jezyk: 0, tekst: ['Stan Konta','Account','Konto','Compte'], dostep:  '', dzialanie: 'stan-konta'},
    {kolejny: 9, jezyk: 0, tekst: ['Historia','History','Geschichte',"l'histoire"], dostep:  '', dzialanie: 'historia'},
    {kolejny: 10, jezyk: 0, tekst: ['Przelew','Transfer','Banküberweisung','virement'], dostep:  '', dzialanie: 'przelew'},
    {kolejny: 1, jezyk: 0, tekst: cofnij, dostep: '', dzialanie: 'konto'},
    {kolejny: 0, jezyk: 0, tekst: wyloguj, dostep: '', dzialanie: 'jezyki'}
]

const Wyplata: Przycisk[] = [
    {kolejny: 5, jezyk: 0, tekst: wykonaj, dostep: '', dzialanie: 'wyplata-mg'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 3, jezyk: 0, tekst: cofnij, dostep: '', dzialanie: 'dyspozycje'},
    {kolejny: 0, jezyk: 0, tekst: wyloguj, dostep: '', dzialanie: 'jezyki'}
]

const WyplataMg: Przycisk[] = [
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 4, jezyk: 0, tekst: anuluj, dostep: '', dzialanie: 'wyplata'}
]

const Wplata: Przycisk[] = [
    {kolejny: 7, jezyk: 0, tekst: wykonaj, dostep: '', dzialanie: 'wplata-mg'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 3, jezyk: 0, tekst: cofnij, dostep: '', dzialanie: 'dyspozycje'},
    {kolejny: 0, jezyk: 0, tekst: wyloguj, dostep: '', dzialanie: 'jezyki'}
]

const WplataMg: Przycisk[] = [
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 6, jezyk: 0, tekst: anuluj, dostep: '', dzialanie: 'wplata'}
]

const StanKonta: Przycisk[] = [
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 3, jezyk: 0, tekst: cofnij, dostep: '', dzialanie: 'dyspozycje'},
    {kolejny: 0, jezyk: 0, tekst: wyloguj, dostep: '', dzialanie: 'jezyki'}
]

const Przelew: Przycisk[] = [
    {kolejny: 11, jezyk: 0, tekst: wykonaj, dostep: '', dzialanie: 'przelew-mg'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 3, jezyk: 0, tekst: cofnij, dostep: '', dzialanie: 'dyspozycje'},
    {kolejny: 0, jezyk: 0, tekst: wyloguj, dostep: '', dzialanie: 'jezyki'}
]

const PrzelewMg: Przycisk[] = [
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 10, jezyk: 0, tekst: anuluj, dostep: '', dzialanie: 'przelew'}
]

const Puste: Przycisk[] = [
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
]

const Start: Przycisk[] = [
    {kolejny: 0, jezyk: 1, tekst: ['Start'], dostep:  '', dzialanie: 'jezyki'},
    {kolejny: 13, jezyk: 1, tekst: ['Konta'], dostep: '', dzialanie: 'konta-mg'},
    {kolejny: 13, jezyk: 1, tekst: ['Dodaj konto'], dostep: '', dzialanie: 'konta-new-mg'},
    {kolejny: 0, jezyk: 1, tekst: ['Przelew'], dostep: '', dzialanie: 'przelew-all-mg'},
    {kolejny: 0, jezyk: 1, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 1, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 1, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'}
]

const LogowanieMg: Przycisk[] = [
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: [''], dostep: 'disabled', dzialanie: 'jezyki'},
    {kolejny: 0, jezyk: 0, tekst: anuluj, dostep: '', dzialanie: 'jezyki'}
]


export const Przyciski: Array<any> = [
    Jezyki, //0
    Zaloguj, //1
    Logowanie, //2
    Dyspozycje, //3
    Wyplata, //4
    WyplataMg, //5
    Wplata, //6
    WplataMg, //7
    StanKonta, //8
    StanKonta, //9 - Historia
    Przelew,  //10
    PrzelewMg, //11
    Puste,  //12
    Start, //13
    LogowanieMg, //14
]


