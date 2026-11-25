/**
 * Componente EmojiCarousel
 * Carrusel horizontal de 5 iconos/emojis donde el elemento central aparece ampliado y enmarcado.
 * @param {Array<string>} emojis - Lista de 5 emojis a mostrar (por defecto: ["😷", "😄", "🤠", "😈", "🤖"])
 */
function EmojiCarousel({
  emojis = ["😷", "😄", "🤠", "😈", "🤖"]
}) {
  return (
    <section className="emoji-carousel">
      {emojis.map((emoji, index) => {
        const esCentral = index === 2;
        return (
          <div
            key={index}
            className={esCentral ? "emoji-item emoji-featured" : "emoji-item emoji-side"}
          >
            {emoji}
          </div>
        );
      })}
    </section>
  );
}

export default EmojiCarousel;