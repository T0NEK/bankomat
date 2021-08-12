interface teksty
{
  naglowek: string;
  konto: string;
  pin: string
}

export const wersja_jezyk: Array<teksty> = 
[
  { naglowek : 'Wpisz nr konta i pin', konto: 'Numer rachunku:', pin: 'kod PIN:'},
  { naglowek : 'Enter the account number and pin', konto: 'Account number:', pin: 'PIN code:'},
  { naglowek : 'Geben Sie die Kontonummer und PIN ein', konto: 'Kontonummer:', pin: 'PIN-Code:'},
  { naglowek : 'Entrez le numéro de compte et le code PIN', konto: 'Effacer:', pin: 'code PIN:'}
]