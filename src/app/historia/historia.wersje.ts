export interface kierunki_int
{
  in: string;
  out: string;
  payIn: string;
  payOut: string
}

const kierunki: Array<kierunki_int> = 
[
  {in: 'przelew', out: 'przelew', payIn: 'gotówka', payOut: 'gotówka'},
  {in: 'transfer', out: 'transfer', payIn: 'cash', payOut: 'cash'},
  {in: 'Überweisung', out: 'Überweisung', payIn: 'Kasse', payOut: 'Kasse'},
  {in: 'transfert', out: 'transfert', payIn: 'espèces', payOut: 'espèces'}
]

interface teksty
{
  naglowek: string;
  pobieranie: string;
  gr: string
  wlasciciel: string;
  konto: string;
  odmowa: string;
  wykonanie: string;
  kierunek: kierunki_int;
  tytul: string;
  nadawca: string;
  odbiorca: string;
  operacja: string;
  dyspozycja: string;
  kwota: string;
  saldo: string;
}


export const wersja_jezyk: Array<teksty> = 
[
  {naglowek: 'Historia operacji', pobieranie: 'Pobieram dane', gr: 'Wartość gr', wlasciciel: 'właściciel konta', konto: 'numer konta bankowego', odmowa: 'Problem z połączeniem', wykonanie: 'Wykonano wpłatę na kwotę', kierunek: kierunki[0], tytul: 'Tytuł przelewu', nadawca: 'nadawca', odbiorca: 'odbiorca', operacja: 'operacja', dyspozycja: 'opis dyspozycji', kwota: 'kwota', saldo: 'saldo' },
  {naglowek: 'Operation history', pobieranie: 'Downloading data', gr: 'Value of gr', wlasciciel: 'Account owner', konto: 'Bank account number', odmowa: 'Connection problem', wykonanie: 'A payment has been made for the amount', kierunek: kierunki[1], tytul: 'Transfer title', nadawca: 'sender', odbiorca: 'recipient', operacja: 'process', dyspozycja: 'description of the disposition', kwota: 'amount', saldo: 'balance'},
  {naglowek: 'Der Betrieb Geschichte', pobieranie: 'Herunterladen von Daten', gr: 'Wert von gr', wlasciciel: 'Kontoinhaber', konto: 'Kontonummer', odmowa: 'Verbindungsproblem', wykonanie: 'Der Betrag wurde bezahlt', kierunek: kierunki[2], tytul: 'Titel übertragen', nadawca: 'Absender', odbiorca: 'Empfänger', operacja: 'Aktion', dyspozycja: 'Beschreibung der Disposition', kwota: 'Quote', saldo: 'Balance'},
  {naglowek: 'Historique des opérations', pobieranie: 'Le téléchargement de données', gr: 'Valeur de gr', wlasciciel: 'Propriétaire du compte', konto: 'numéro de compte bancaire', odmowa: 'Problème de connection', wykonanie: 'Un paiement a été effectué pour le montant', kierunek: kierunki[3], tytul: 'Transférer le titre', nadawca: 'expéditeur', odbiorca: 'destinataire', operacja: 'opération', dyspozycja: 'description de la disposition', kwota: 'somme', saldo: 'reliquat'}
]