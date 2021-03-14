import java.util.*;

public class Brackets{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        String s = input.next();
        Stack<Character> stack = new Stack<>();
        Set<Character> set = new HashSet<>();
        set.add(')');
        set.add('}');
        set.add(']');
        if(set.contains(s.charAt(0))){
            System.out.println(0);
        }
        else{
            int ans = 1;
            stack.push(s.charAt(0));
            for(int i = 1;i<n;i++){
                char c = s.charAt(i);
                if(set.contains(c)){
                    if(stack.isEmpty()){
                        ans = 0;
                        break;
                    }
                    int x = c+stack.get(stack.size()-1);
                    if(x == ('('+')') || x == ('{'+'}') || x == ('['+']')){
                        stack.pop();
                    }
                    else{
                        ans = 0;
                        break;
                    }
                }
                else{
                    stack.push(c);
                }
            }
            if(!stack.isEmpty()){
                System.out.println(0);
            }
            else{
                System.out.println(ans);
            }

        }

    }
}