interface teksty
{
  dyspozycja: string;
  zl: string;
  gr: string
  kwota: string;
  wlasciciel: string;
  konto: string;
  odmowa: string;
  wykonanie: string
  problem: string;
  wtoku: string;
  srodkibrak: string;
  odbiorcakonto: string;
  odbiorca: string;
  tytul: string;
  swoje: string;
  brak: string
}

export const wersja_jezyk: Array<teksty> = 
[
  {dyspozycja: 'Dyspozycja przelewu', zl: 'Wartość zł', gr: 'Wartość gr', kwota: 'Kwota Przelewu', wlasciciel: 'właściciel konta', konto: 'numer konta bankowego', odmowa: 'Nie można przelać', wykonanie: 'Wykonano przelew na kwotę', problem: 'Problem z połączeniem - sprawdź w historii', wtoku: 'Realizuję dyspozycję, czekaj', srodkibrak: 'Niewystarczające środki', odbiorcakonto: 'numer konta bankowego odbiorcy', odbiorca: 'Numer konta bankowego odbiorcy', tytul: 'Tytuł przelewu', swoje: 'Nie możesz wykonać przelewu na swoje konto', brak: 'Brak rachunku bankowego'},
  {dyspozycja: 'Instruction for payment to the account', zl: 'Value PLN', gr: 'Value of gr', kwota: 'Deposit Amount', wlasciciel: 'Account owner', konto: 'Bank account number', odmowa: 'Could not deposit', wykonanie: 'A payment has been made for the amount', problem: 'Connection problem - check history', wtoku: 'I execute the instruction, wait', srodkibrak: 'Insufficient funds', odbiorcakonto: "recipient's bank account number", odbiorca: "Recipient's bank account number", tytul: 'Transfer title', swoje: 'You cannot make a transfer to your account', brak: "Receiver's bank account missing"},
  {dyspozycja: 'Anweisung zur Zahlung auf das Konto', zl: 'Wert PLN', gr: 'Wert von gr', kwota: 'Einzahlungsbetrag',  wlasciciel: 'Kontoinhaber', konto: 'Kontonummer', odmowa: 'Konnte nicht einzahlen', wykonanie: 'Der Betrag wurde bezahlt', problem: 'Verbindungsproblem - Verlauf überprüfen',  wtoku: 'Ich führe die Anweisung aus, warte', srodkibrak: 'Unzureichende Mittel', odbiorcakonto: 'Bankkontonummer des Empfängers', odbiorca: 'Bankkontonummer des Empfängers', tytul: 'Titel übertragen', swoje: 'Sie können keine Überweisung auf Ihr Konto vornehmen', brak: 'Bankkonto des Empfängers fehlt'},
  {dyspozycja: 'Instruction de paiement sur le compte', zl: 'Valeur PLN', gr: 'Valeur de gr', kwota: 'Montant du dépôt', wlasciciel: 'Propriétaire du compte', konto: 'numéro de compte bancaire', odmowa: 'Impossible de déposer', wykonanie: 'Un paiement a été effectué pour le montant', problem: "Problème de connexion - vérifier l'historique", wtoku: "J'exécute l'instruction, attends", srodkibrak: 'Fonds insuffisants', odbiorcakonto: 'numéro de compte bancaire du destinataire', odbiorca: 'Numéro de compte bancaire du destinataire', tytul: 'Transférer le titre', swoje: 'Vous ne pouvez pas effectuer de virement sur votre compte', brak: 'Compte bancaire du destinataire manquant'}
]