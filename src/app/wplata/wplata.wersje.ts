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
  wykonanie: string;
  problem: string;
  errormg: string;
  wtoku: string
}

export const wersja_jezyk: Array<teksty> = 
[
  {dyspozycja: 'Dyspozycja wpłaty na konto', zl: 'Wartość zł', gr: 'Wartość gr', kwota: 'Kwota Wpłaty', mg: '(Wymagane zatwierdzenie przez MG)', wlasciciel: 'właściciel konta', konto: 'numer konta bankowego', odmowa: 'Transakcja nie może zostać zrealizowana', wykonanie: 'Wykonano wpłatę na kwotę', problem: 'Problem z połączeniem - sprawdź w historii', errormg: 'Błędny kod - odmowa', wtoku: 'Realizuję dyspozycję, czekaj'},
  {dyspozycja: 'Instruction for payment to the account', zl: 'Value PLN', gr: 'Value of gr', kwota: 'Deposit Amount', mg: '(Game Master approval required)', wlasciciel: 'Account owner', konto: 'Bank account number', odmowa: 'The transaction cannot be completed', wykonanie: 'A payment has been made for the amount', problem: 'Connection problem - check history', errormg: 'Wrong code - refusal', wtoku: 'I execute the instruction, wait'},
  {dyspozycja: 'Anweisung zur Zahlung auf das Konto', zl: 'Wert PLN', gr: 'Wert von gr', kwota: 'Einzahlungsbetrag', mg: '(Zustimmung des Game Masters erforderlich)', wlasciciel: 'Kontoinhaber', konto: 'Kontonummer', odmowa: 'Die Transaktion kann nicht abgeschlossen werden', wykonanie: 'Der Betrag wurde bezahlt', problem: 'Verbindungsproblem - Verlauf überprüfen', errormg: 'Falscher Code - Ablehnung', wtoku: 'Ich führe die Anweisung aus, warte'},
  {dyspozycja: 'Instruction de paiement sur le compte', zl: 'Valeur PLN', gr: 'Valeur de gr', kwota: 'Montant du dépôt', mg: '(Approbation du maître de jeu requise)', wlasciciel: 'Propriétaire du compte', konto: 'numéro de compte bancaire', odmowa: 'La transaction ne peut pas être complétée', wykonanie: 'Un paiement a été effectué pour le montant', problem: "Problème de connexion - vérifier l'historique", errormg: 'Code erroné - refus', wtoku: "J'exécute l'instruction, attends"}
]