const partidos = [
  { 
    juego :1,
    equipo1: "Argentina", 
    equipo2: "Brasil",
    goles1: 3,
    goles2: 2 
  },
  { 
    juego :2,
    equipo1: "Chile", 
    equipo2: "Perú", 
    goles1: 1, 
    goles2: 1 
  },
  {
    juego :3,
    equipo1: "Colombia", 
    equipo2: "Uruguay", 
    goles1: 0, 
    goles2: 2
  },
  {
    juego :4,
    equipo1: "Ecuador", 
    equipo2: "Venezuela", 
    goles1: 4, 
    goles2: 3
  },
  { 
    juego :5,
    equipo1: "Paraguay", 
    equipo2: "Bolivia", 
    goles1: 2, 
    goles2: 2
  },
  {
    juego :6,
    equipo1: "Argentina", 
    equipo2: "Chile", 
    goles1: 1, 
    goles2: 0
  },
  {
    juego :7,
    equipo1: "Brasil", 
    equipo2: "Colombia",
    goles1: 2, 
    goles2: 1 
  }
];


const numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++) {
  const p = partidos.shift();
  console.log(`Resultado del primer partido: ${p.equipo1} ${p.goles1} - ${p.goles2} ${p.equipo2}`);
}

console.log("Partidos",partidos);