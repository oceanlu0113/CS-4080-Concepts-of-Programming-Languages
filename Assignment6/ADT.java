package cs4080.pkg02.assignment6;

public class ADT {

    public static <T extends Comparable<T>> void find_max(T arr[][]) {
        int rowMax = 0, colMax = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[rowMax][colMax].compareTo(arr[i][j]) < 0) {
                    rowMax = i;
                    colMax = j;
                }
            }
        }
        System.out.println("The first occurrence of the largest element is \"" + arr[rowMax][colMax] + "\" at (" + rowMax + "," + colMax + ").");
    }
}
