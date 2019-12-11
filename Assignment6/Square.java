package cs4080.pkg02.assignment6;

public class Square extends Rectangle {

    public Square(double side) {
        super(side, side);
    }

    public double area() {
        return super.getWidth() * super.getHeight();
    }
}
