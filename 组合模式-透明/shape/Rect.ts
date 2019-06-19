import IShape from "../IShape";

class Rect extends IShape {
  public draw(): void {
    console.log(' draw rect')
  }
}

export default Rect