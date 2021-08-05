package myPackage;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

public class Task {
    int capacity = 5;
    // initial list of strings
    ArrayList<String> list = new ArrayList<String>(capacity);
    // reverse list of strings
    ArrayList<String> newReverseList = new ArrayList<String>(capacity);
    // result list
    ArrayList<String> outputList = new ArrayList<String>(capacity);
    int min = 1;
    int max = 8;
    public static void main(String[] args) throws IOException {
	// write your code here




        Task t = new Task();
        t.generateAndFillList();
        t.fillReverseList();
        t.fillResultList();
        t.writeToFile();







    }
// This method  generates numbers in range from 1 to 8, fills array and returns it.
    public char[] generateString(){
        char[] ch = new char[capacity];
        for( int i=0; i< capacity; i++){
            Random random = new Random();
            int a = random.nextInt(max - min + 1) + min;
            String b = Integer.toString(a);
            ch[i] = b.charAt(0);
        }
        return ch;
    }

// This method inverts characters in string and returns new array.
    public char[] invertString(char [] initArr) {
        char[] reverse = new char[initArr.length];
        for (int i=0; i<initArr.length; i++){
            reverse[initArr.length - i - 1] = initArr[i];
        }
        return reverse;
    }
    public ArrayList<String> generateAndFillList(){
        for (int i=0; i<capacity; i++){
            Random size = new Random();
            int length = size.nextInt(max - min + 1) + min;
            char [] array = generateString();
            String initStr = String.copyValueOf(array);
            list.add(initStr);
            System.out.println(list);
        }
        return list;
    }
    public ArrayList<String> fillResultList(){
        for(int i=0; i<capacity-1; i++){
            int num = Integer.parseInt(newReverseList.get(i));
            outputList.add(num+newReverseList.get(i+1));
            System.out.println(outputList.get(i));
        }
        return outputList;
    }
    public ArrayList<String> fillReverseList(){
        for(int i=0; i<capacity; i++){
            char [] temp = list.get(i).toCharArray();
            char [] invertArray = invertString(temp);
            String reverseStr = String.copyValueOf(invertArray);
            newReverseList.add(reverseStr);
            System.out.println(newReverseList);

        }
        return newReverseList;
    }

    public void writeToFile() throws IOException {
        BufferedWriter writer = new BufferedWriter(new FileWriter("src/myPackage/result.txt"));
        for(int i=0; i<capacity-1; i++){
            writer.write(outputList.get(i));
            writer.newLine();
        }
        writer.flush();
        writer.close();
        System.out.println("Finished.");
    }
}
