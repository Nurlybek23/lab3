import java.util.*;

public class Bottomup{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char[] a = input.next().toCharArray();
        sort(a);

        for(int i = 0;i<a.length;i++){
            System.out.print(a[i] + "");
        }
        System.out.println();
    }

    public static void sort(char[] a){
        int n = a.length;
        for(int sz = 1;sz<n;sz+= sz){
            for(int lo = 0;lo<n-sz;lo+= sz+sz){
                merge(a,lo,lo+sz-1,Math.min(lo+sz+sz-1,n-1));
            }
        }
    }

    public static void merge(char[] a,int l,int m,int r){
        int n1 = m-l+1;
        int n2 = r-m;
        char[] left = new char[n1];
        char[] right = new char[n2];

        for(int i = 0;i<n1;i++){
            left[i] = a[l+i];
        }
        for(int i = 0;i<n2;i++){
            right[i] = a[m+1+i];
        }

        int i = 0, j = 0;
        int k = l;
        while(i < n1 && j < n2){
            if(left[i] <= right[j]){
                a[k] = left[i];
                i++;
            }
            else{
                a[k] = right[j];
                j++;
            }

            k++;
        }

        while(i < n1){
            a[k] = left[i];
            i++;
            k++;
        }


        while(j < n2){
            a[k] = right[j];
            j++;
            k++;
        }
    }
}