/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
type Odber = {
    cas: number, //čas je v sekundách
    spotreba: number //spotřeba ve watech za hodinu = Wh
}
const cena: number = 6.70; // Kč / kWh
let prumnernaSpotreba: number = 0
let celkovaCena: number = 0
let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 },
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 },
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 },
]

for (const peceme of data){
    prumnernaSpotreba += peceme.spotreba / 1000 // kWh
}

celkovaCena = prumnernaSpotreba * cena
prumnernaSpotreba = Math.round(prumnernaSpotreba / data.length * 100) / 100

console.log("Celková cena je: " + celkovaCena + " Kč")
console.log("Průměrná spotřeba je: " + prumnernaSpotreba + " kWh")