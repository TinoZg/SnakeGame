//class to pick location on the grid
class Position{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return Grid.snapToGrid(this.x);
      }
    
    getY() {
        return Grid.snapToGrid(this.y);
      }
    
}