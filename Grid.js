//class to return location on the grid
class Grid{
    static snapToGrid(x){
        return Math.round(x / 10) * 10;
    }
}