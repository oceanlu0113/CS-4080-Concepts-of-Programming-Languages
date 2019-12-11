package cs4080.pkg02.assignment6;

import java.util.Random;

public class CS408002Assignment6 {

    public static void main(String[] args) {
        //Part 1
        ADT test = new ADT();
        Integer[][] arr = {{1, 2, 4, 4}, {5, 5, 4, 2}, {3, 1, 1, 5}};
        test.find_max(arr);
        String[][] ar = {{"David", "Kelin", "Peter", "Zag", "Diana"}, {"Elin", "Adam", "Young", "Peter", "Zag"}};
        test.find_max(ar);

        //Part 2
        final int size = 1000000;
        Rectangle[] objects = new Rectangle[size];
        Random random = new Random();
        //rectangle
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < size; i++) {
            int r = random.nextInt(100);
            objects[i] = new Rectangle(r, r);
            objects[i].area();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("Time taken for static binding: " + (endTime - startTime) + " ms");
        // square
        startTime = System.currentTimeMillis();
        for (int i = 0; i < size; i++) {
            int r = random.nextInt(100);
            objects[i] = new Square(r);
            objects[i].area();
        }
        endTime = System.currentTimeMillis();
        System.out.println("Time taken for dynamic binding: " + (endTime - startTime) + " ms");
    }

    /*Timing Analysis
    static binding is a compile time operation
    dynamic binding is a runtime operation
    static binding is faster because no time is wasted to find correct method (defined with static, private and final methods and variables) during runtime
     */
}
