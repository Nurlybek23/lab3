public class Task2{
    public static void main(String[] args) {
          int[] array = {2,3,1,5};
        System.out.println(solution(array));
    }
         public static int solution(int[] A) {
             double n = A.length + 1;
             double totalSum = (double) ((n * (n + 1)) / 2);

             for (int i = 0; i < A.length; i++) {
                 totalSum -= A[i];
             }

             return (int) (totalSum == 0 ? A.length + 1 : totalSum);
         }

}