interface teksty
{
  naglowek: string;
  pobieranie: string;
  saldo: string;
  wlasciciel: string;
  konto: string;
  odmowa: string
}

export const wersja_jezyk: Array<teksty> = 
[
  {naglowek: 'Stan Konta', pobieranie: 'Pobieram dane',  saldo: 'Saldo', wlasciciel: 'Właściciel konta', konto: 'Numer konta bankowego', odmowa: 'Problem z połączeniem'},
  {naglowek: 'Account balance', pobieranie: '', saldo: 'balance', wlasciciel: 'Account owner', konto: 'Bank account number', odmowa: 'Connection problem'},
  {naglowek: 'Kontostand', pobieranie: '', saldo: 'Kontostand', wlasciciel: 'Kontoinhaber', konto: 'Kontonummer', odmowa: 'Verbindungsproblem'},
  {naglowek: 'Solde du compte', pobieranie: '', saldo: 'Solde', wlasciciel: 'Propriétaire du compte', konto: 'Numéro de compte bancaire', odmowa: 'Problème de connection'}
]