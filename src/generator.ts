interface MainInterface {
    gora: number,
    lewa: number,
    path: string[];
    stat: string
}

export class Generator implements MainInterface {
    public readonly rozmiar: number;
    private readonly ile: number;
    private readonly lpnowe: number;
    public iksy: string[];
    private readonly colors: string[];
    public kuleczka: string;
    public punkty: string[];
    public siatka: string[][];
    public droga: string[];
    public nastepne: HTMLElement[];
    public pola: string[];
    public gora: number;
    public lewa: number;
    public path: string[];
    public stat: string;

    constructor() {
        this.rozmiar = 9;  //Rozmiar planszy
        this.ile = 10;      //Liczba kul na start
        this.lpnowe = 3;
        this.iksy = [];     //Tablica z pozycjami kul
        this.colors = ["#d6080b", "#d9e004", "#0239e0", "#02d605", "#cc00c8", "#a0a0a0", "#02e0ca"]; //Tablica z kolorami kul
        this.kuleczka = ""; //String z HTMLem wybranej kulki
        this.punkty = [];    //Tablica z startem i metą
        this.siatka = [];   //Tablica do sprawdzania ścieżki
        this.droga = [];    //Tablica na wyznaczoną ścieżkę
        this.nastepne = []; //Previev Kul
        this.pola = [];
        this.plansza();     //Plansza HTML  
        this.losowanie();   //Rozlosowanie kul i dodanie do planszy
    }

    plansza(): void {
        var that = this;
        //Div na planszę
        var main: HTMLDivElement = document.createElement("div");
        main.id = "main";
        var root: HTMLElement = document.getElementById("root");
        //Utworzenie pól planszy
        for (let x = 0; x < this.rozmiar; x++) {
            let wiersz: HTMLDivElement = document.createElement('div');
            wiersz.setAttribute('class', 'wiersz');
            for (let y = 0; y < this.rozmiar; y++) {
                let pole: HTMLDivElement = document.createElement('div');
                pole.classList.add('pole');
                pole.id = x + '_' + y;
                pole.addEventListener("click", function klik(): void {
                    that.wytyczne(this);
                })
                this.pola.push(pole.id);
                wiersz.appendChild(pole);
            }
            main.appendChild(wiersz);
        }
        root.appendChild(main);
    };

    losowanie(): void {
        //Rozlosowanie pozycji kul
        for (let k = 0; k < this.ile; k++) {
            let x: number = Math.floor(Math.random() * this.rozmiar);
            let y: number = Math.floor(Math.random() * this.rozmiar);
            let wsp: string = x + '_' + y;
            var czy: boolean = false;
            //Sprawdzanie czy w danej pozycji jest już Kula
            for (let l = 0; l < this.iksy.length; l++) {
                //Już jest
                if (wsp == this.iksy[l]) {
                    czy = true;
                    k--;
                }
            }
            //Nie ma
            if (czy == false) {
                this.iksy.push(wsp);
            }
        }
        //Dodanie kul do HTMLa
        for (let i = 0; i < this.iksy.length; i++) {
            //Losowanie koloru kuli
            var l: number = Math.floor(Math.random() * this.colors.length);
            var color: string = this.colors[l];
            var kulka: HTMLDivElement = document.createElement("div");
            kulka.classList.add("kulki");
            kulka.style.background = color;
            document.getElementById(this.iksy[i]).append(kulka);
            document.getElementById(this.iksy[i]).setAttribute("status", "Kula");
        }
        this.nowe();
    };

    wytyczne(ten: HTMLElement): void {
        var status: string = ten.getAttribute("status");
        //Kula
        if (this.punkty.length <= 1) {
            if (status == "Kula") {
                if (ten.id == this.punkty[0]) {
                    document.getElementById(this.punkty[0]).style.background = "#222222";
                    this.punkty[0] = undefined;
                    this.kuleczka = "";
                }
                else {
                    if (this.punkty[0] == undefined) {
                        this.punkty[0] = ten.id;
                        this.kuleczka = ten.innerHTML;
                        document.getElementById(ten.id).style.background = "white";
                    }
                    else {
                        document.getElementById(this.punkty[0]).style.background = "#222222";
                        this.punkty[0] = ten.id;
                        this.kuleczka = ten.innerHTML;
                        document.getElementById(ten.id).style.background = "white";
                    }
                }
            }
        }
        //Pole
        if (this.punkty.length == 1) {
            if (status != "Kula") {
                this.punkty.push(ten.id);
            }
        }
        //Start szukania trasy
        if (this.punkty.length == 2) {
            this.trasa(this.punkty[0], this.punkty[1]);
        }
    };

    trasa(start: string, meta: string): void {
        //Współrzędne startu
        var sx: number = parseInt(start.split("_")[0]);
        var sy: number = parseInt(start.split("_")[1]);
        //Współrzędne mety
        var mx: number = parseInt(meta.split("_")[0]);
        var my: number = parseInt(meta.split("_")[1]);
        //Wypełnienie tablicy zerami
        for (let l = 0; l < this.rozmiar; l++) {
            this.siatka.push([]);
            for (let j = 0; j < this.rozmiar; j++) {
                this.siatka[l].push("0");
            }
        }
        this.siatka[mx][my] = "META";
        //Wpisanie iksów do głównej tablicy
        for (let i = 0; i < this.iksy.length; i++) {
            let str: string = this.iksy[i];
            let x: number = parseInt(str.split("_")[0]);
            let y: number = parseInt(str.split("_")[1]);
            this.siatka[x][y] = 'Kula';
        }

        //Talblica z odnalezioną ścieżką
        var droga: any = this.najkrocej([sx, sy]);       
        console.log("DROGA: ", droga);
        if (droga == false) {
            console.log("NIE ZNALEZIONO DROGI");
            document.getElementById(this.punkty[0]).style.background = '#222222';
            this.punkty = [];
            this.siatka = [];
        }
        else {
            //Pomalowanie ścieżki na biało
            for (let i = 0; i < droga.length; i++) {
                document.getElementById(droga[i]).style.background = 'white';
                document.getElementById(this.punkty[1]).style.background = 'white';
            }
            //Odznaczenie startu i mety
            document.getElementById(meta).innerHTML = this.kuleczka;
            document.getElementById(meta).setAttribute("status", "Kula");
            document.getElementById(start).setAttribute("status", "pusty");
            document.getElementById(start).innerHTML = " ";
            //Aktualizacja iksó w tablicy
            let nr: number = this.iksy.indexOf(start);
            this.iksy.splice(nr, 1);
            this.iksy.push(meta);
            // Przemalowanie na szaro
            var siatka: string[][] = this.siatka;
            setTimeout(function (): void {
                for (let i = 0; i < siatka.length; i++) {
                    for (let j = 0; j < siatka.length; j++) {
                        let it: string = i + "_" + j;
                        document.getElementById(it).style.background = "#222222";
                    }
                }
            }, 500);
            //Sprawdzenie czy plansza jest pełna
            var sprawdz = this.sprawdz();
            if (sprawdz == false) {
                var that = this;
                setTimeout(function (): void {
                    that.dodoajnowe();   //Wylosowanie nowych kul do preview
                    that.nowe();    //Dodanie nowych kul na planszę
                }, 1000);
                //Wyczyszczenie tablic 
                this.punkty = [];
                this.siatka = [];
            }
            else {
                for (let i = 0; i < this.pola.length; i++) {
                    document.getElementById(this.pola[i]).removeAttribute('click');
                }
            }
        }
    };

    najkrocej(wspolrzedne: number[]): (string[] | boolean) {
        var gora: number = wspolrzedne[0];
        var lewa: number = wspolrzedne[1];
        var kolejka: MainInterface[] = [];
        kolejka.push({ gora: gora, lewa: lewa, path: [], stat: 'Start' })
        while (kolejka.length > 0) {
            var aktualny: MainInterface = kolejka.shift();
            //Góra
            var nowy: MainInterface = this.kierunki(aktualny, "G");
            if (nowy.stat === 'Cel') {
                return nowy.path;
            } else if (nowy.stat === 'OK') {
                kolejka.push(nowy);
            }
            //Prawo
            var nowy: MainInterface = this.kierunki(aktualny, "P");
            if (nowy.stat === 'Cel') {
                return nowy.path;
            } else if (nowy.stat === 'OK') {
                kolejka.push(nowy);
            }
            //Dół
            var nowy: MainInterface = this.kierunki(aktualny, "D");
            if (nowy.stat === 'Cel') {
                return nowy.path;
            } else if (nowy.stat === 'OK') {
                kolejka.push(nowy);
            }
            //Lewo
            var nowy: MainInterface = this.kierunki(aktualny, "L");
            if (nowy.stat === 'Cel') {
                return nowy.path;
            } else if (nowy.stat === 'OK') {
                kolejka.push(nowy);
            }
        }
        return false;
    };

    kierunki(aktualny: MainInterface, kierunek: string): MainInterface {
        var newPath: string[] = aktualny.path.slice();
        newPath.push(aktualny.gora + '_' + aktualny.lewa);
        var lt: number = aktualny.gora;
        var ll: number = aktualny.lewa;
        if (kierunek === "G") {
            lt -= 1;
        } else if (kierunek === "P") {
            ll += 1;
        } else if (kierunek === "D") {
            lt += 1;
        } else if (kierunek === "L") {
            ll -= 1;
        }
        var nowy: MainInterface = {
            gora: lt,
            lewa: ll,
            path: newPath,
            stat: 'Brak'
        };
        var wynik: string = this.status(nowy);
        nowy.stat = wynik;
        if (nowy.stat == 'OK') {
            this.siatka[nowy.gora][nowy.lewa] = "Spr";
        }
        return nowy;
    };

    status(lokalizacja: MainInterface): string {
        var siatkarozmiar: number = this.siatka.length;
        var lt: number = lokalizacja.gora;
        var ll: number = lokalizacja.lewa;
        if (lokalizacja.lewa < 0 ||
            lokalizacja.lewa >= siatkarozmiar ||
            lokalizacja.gora < 0 ||
            lokalizacja.gora >= siatkarozmiar) {
            return 'Poza';
        } else if (this.siatka[lt][ll] == 'META') {
            return 'Cel';
        } else if (this.siatka[lt][ll] == 'Kula') {
            return 'Kula';
        } else if (this.siatka[lt][ll] == '0') {
            return 'OK';
        }
    };

    nowe(): void {
        this.nastepne = [];
        //Rozlosowanie pozycji kul
        for (let k = 0; k < this.lpnowe; k++) {
            //Losowanie koloru kuli
            var l: number = Math.floor(Math.random() * this.colors.length);
            var color: string = this.colors[l];
            var kulka: HTMLDivElement = document.createElement("div");
            kulka.classList.add("kulki");
            kulka.style.background = color;
            this.nastepne.push(kulka);

        }
        for (let j = 0; j < this.nastepne.length; j++) {
            document.getElementById("prev").append(this.nastepne[j]);
        }
    };

    dodoajnowe(): void {
        //Dodanie nowych kul z preview
        for (let k = 0; k < this.nastepne.length; k++) {
            let x: number = Math.floor(Math.random() * this.rozmiar);
            let y: number = Math.floor(Math.random() * this.rozmiar);
            let wsp: string = x + '_' + y;
            var czy: boolean = false;
            //Sprawdzanie czy w danej pozycji jest już Kula
            for (let l = 0; l < this.iksy.length; l++) {
                //Już jest
                if (wsp == this.iksy[l]) {
                    czy = true;
                    k--;
                }
            }
            //Nie ma
            if (czy == false) {
                document.getElementById(wsp).append(this.nastepne[k]);
                document.getElementById(wsp).setAttribute("status", "Kula");
                this.iksy.push(wsp);
            }
        }
    };

    sprawdz(): boolean {
        //Sprawdzanie czy plansza wypełniła się kulami
        var dl = (this.rozmiar * this.rozmiar) - this.rozmiar;
        if (this.iksy.length > dl) {
            alert("===== PRZEGRAŁEŚ !!! =====");
            return true;
        }
        else {
            return false;
        }
    };

}