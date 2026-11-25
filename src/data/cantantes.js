/**
 * Para cambiar el cantante mostrado en toda la aplicación, modifica únicamente
 * la exportación `cantanteActivo` al final de este archivo.
 */

export const cantantes = {
  alejandro: {
    nombre: "Alejandro Sanz",
    album: "- Más -",
    imagen: "/alejandro-sanz.jpg",
    textoBusqueda: "Alejandro Sanz",
    emojis: ["😷", "😄", "🤠", "😈", "🤖"]
  },
  pablo: {
    nombre: "Pablo Alborán",
    album: "- Prometo -",
    imagen: "/pablo-alboran.jpg",
    textoBusqueda: "Pablo Alborán",
    emojis: ["🪐", "💃", "❤️", "🎹", "🎤"]
  },
  badbunny: {
    nombre: "Bad Bunny",
    album: "- DeBÍ TiRAR MáS FOToS -",
    imagen: "/bad-bunny.jpg",
    textoBusqueda: "Bad Bunny",
    emojis: ["🐰", "🌴", "🐸", "☀️", "📸"]
  },
  theweeknd: {
    nombre: "The Weeknd",
    album: "- After Hours -",
    imagen: "/the-weekend.jpg",
    textoBusqueda: "The Weeknd",
    emojis: ["🕶️", "🩸", "🌃", "✨", "🎲"]
  }

};

// CAMBIA ESTA LÍNEA PARA CAMBIAR DE ARTISTA (cantantes.alejandro / cantantes.pablo / cantantes.badbunny / cantantes.theweekend)
export const cantanteActivo = cantantes.alejandro;