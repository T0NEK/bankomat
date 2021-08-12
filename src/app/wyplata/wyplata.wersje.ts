interface teksty
{
  dyspozycja: string;
  zl: string;
  gr: string
  kwota: string;
  mg: string;
  wlasciciel: string;
  konto: string;
  odmowa: string;
  wykonanie: string
  problem: string;
  errormg: string;
  wtoku: string;
  srodkibrak: string
}

export const wersja_jezyk: Array<teksty> = 
[
  {dyspozycja: 'Dyspozycja wypłaty z konta', zl: 'Wartość zł', gr: 'Wartość gr', kwota: 'Kwota Wypłaty', mg: '(Wymagane zatwierdzenie przez MG)', wlasciciel: 'właściciel konta', konto: 'numer konta bankowego', odmowa: 'Transakcja nie może zostać zrealizowana', wykonanie: 'Wykonano wypłatę na kwotę', problem: 'Problem z połączeniem - sprawdź w historii', errormg: 'Błędny kod - odmowa', wtoku: 'Realizuję dyspozycję, czekaj', srodkibrak: 'Niewystarczające środki'},
  {dyspozycja: 'Account withdrawal instruction', zl: 'Value PLN', gr: 'Value of gr', kwota: 'Withdrawal Amount', mg: '(Game Master approval required)', wlasciciel: 'Account owner', konto: 'Bank account number', odmowa: 'The transaction cannot be completed', wykonanie: 'A payment was made for the amount of', problem: 'Connection problem - check history', errormg: 'Wrong code - refusal', wtoku: 'I execute the instruction, wait', srodkibrak: 'Insufficient funds'},
  {dyspozycja: 'Anweisung zur Kontoauszahlung', zl: 'Wert PLN', gr: 'Wert von gr', kwota: 'Auszahlungsbetrag', mg: '(Zustimmung des Game Masters erforderlich)', wlasciciel: 'Kontoinhaber', konto: 'Kontonummer', odmowa: 'Die Transaktion kann nicht abgeschlossen werden', wykonanie: 'Es wurde eine Zahlung in Höhe von', problem: 'Verbindungsproblem - Verlauf überprüfen', errormg: 'Falscher Code - Ablehnung', wtoku: 'Ich führe die Anweisung aus, warte', srodkibrak: 'Unzureichende Mittel'},
  {dyspozycja: 'Instruction de retrait de compte', zl: 'Valeur PLN', gr: 'Valeur de gr', kwota: 'Montant de retrait', mg: '(Approbation du maître de jeu requise)', wlasciciel: 'Propriétaire du compte', konto: 'numéro de compte bancaire', odmowa: 'La transaction ne peut pas être complétée', wykonanie: 'Un paiement a été effectué pour le montant de', problem: "Problème de connexion - vérifier l'historique", errormg: 'Code erroné - refus', wtoku: "J'exécute l'instruction, attends", srodkibrak: 'Fonds insuffisants'}
]