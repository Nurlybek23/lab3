import java.util.*;

public class Fish{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];
        for(int i = 0;i<n;i++){
            a[i] = input.nextInt();
        }

        for(int i = 0;i<n;i++){
            b[i] = input.nextInt();
        }
        int count = 0;
        Stack<Integer> stack = new Stack<>();
        for(int i = 0;i<n;i++){
            if(b[i] == 1){
                stack.push(a[i]);
            }

            else{
                int c = a[i];
                int index = stack.size()-1;
                while(!stack.isEmpty()){
                    if(stack.get(index) > c){
                        count++;
                        break;
                    }
                    else{
                        stack.pop();
                        count++;
                    }
                    index--;
                }
            }
        }

        System.out.println(n-count);
    }
}