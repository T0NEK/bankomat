interface teksty
{
  logowanie: string;
  blad: string;
  czas: string;
}

export const wersja_jezyk: Array<teksty> = 
[
  { logowanie:'Czekaj - sprawdzam dane', blad: 'Logowanie nieudane, sprawdź dane', czas: 'Brak odpowiedzi banku' },
  { logowanie:"Wait - I'm checking the data", blad: 'Login failed, check data', czas: 'No response from the bank'},
  { logowanie:'Warte - ich überprüfe die Daten', blad: 'Anmeldung fehlgeschlagen, Daten prüfen', czas: 'Keine Antwort von der Bank'},
  { logowanie:'Attendez - je vérifie les données', blad: 'Échec de la connexion, vérifiez les données', czas: 'Aucune réponse de la banque'}
]
