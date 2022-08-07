export class InputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "s" || //down
          e.key === "w" || // up
          e.key === "a" || // left
          e.key === "d" || //right
          e.key === " ") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      }
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "s" ||
        e.key === "w" ||
        e.key === "a" ||
        e.key === "d" ||
        e.key === " "
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
