class Solution {
    public int solution(int[] a) {
        // write your code in Java SE 8
        if(a.length == 0){
            return 0;
        }

        int n = a.length;
        sort(a,0,n-1);

        int count = 1;
        int c = a[0];
        for(int i = 1;i<n;i++){
            if(c != a[i]){
                c = a[i];
                count++;
            }
        }

        return count;
    }

    public static void sort(int[] a,int l,int r){
        if(l < r){
            int m = (l+r)/2;
            sort(a,l,m);
            sort(a,m+1,r);

            merge(a,l,m,r);
        }
    }

    public static void merge(int[] a,int l,int m,int r){
        int n1 = m-l+1;
        int n2 = r-m;
        int[] left = new int[n1];
        int[] right = new int[n2];

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