 class TwoBubbleSort {
    public static void main (String args[])  {
        int array[] = {10, 2, 9, 1, 6, 7};

        for (int i = 0; i < array.length - 1; i++){ // array.length - 1 = 6 -1 = 5 loops  
            for (int j =0; j < array.length - i - 1; j++) {  // -i because in the first loop of execution biggest number is placed at the end {2,9,1,6,7,10}, for the sencond loop 2nd biggest number is placed second last {2,1,6,7,9,10} - To have optization improved performace for int j we reduce number of loops
                if (array[j] > array[j+1]) {
                    int temp = array[j];
                    array[j] = array [j+1];
                    array[j+1] = temp;
                }
            }
        }
        for (int i : array) {
            System.out.print(i + " ");
        }
    }
 }