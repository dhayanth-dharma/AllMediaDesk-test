package com.test.demo.service;

import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Scanner;

public class task1 {

	public static void main(String[] args) {
		task2();
	}
	
	/**
	 * Task 1 Calculator term method
	 * @Input: term: ( 12 - 2 ) * 3 / 3
	 * return : double 
	 */
	public static double task1() {
		Scanner scanner = new Scanner(new InputStreamReader(System.in));
		System.out.println("Please enter your input term: ");
		System.out.println("Rule: ! Give space between each operand and value");
		System.out.println("<value><space>(operand)<space><value>");
		System.out.println("Example: ( 12 - 2 ) * 3 / 3 ");
		System.out.println("Enter the term : ");
        String input = scanner.nextLine();
  
        boolean isOpenBracket=false;
        double leftValue=0;
        double rightVale=0;
        double innerBracketLeftValue=0;
        double innerBracketRightValue=0;
        double total=0;
        String operand="";
        String[] inputArr=input.split(" ");
        for (int i = 0;i < inputArr.length; i++){
        	if(inputArr[i].equals(" ")){
    			continue;
    		}
        	if(inputArr[i].equals("(")) {
        		isOpenBracket=true;
        		continue;
        	}
        	else if(inputArr[i].equals(")")) {
        		isOpenBracket=false;
        		leftValue+=innerBracketLeftValue;
        		continue;
        	}
        	else if(isOpenBracket) {
        		if(inputArr[i].chars().allMatch( Character::isDigit )){
        			if(innerBracketLeftValue==0)
        				innerBracketLeftValue=Double.valueOf(inputArr[i]) ;
        			else {
        				if(operand.equals("*")){
        					innerBracketLeftValue = innerBracketLeftValue*Double.valueOf(inputArr[i]);
    					} else if(operand.equals("/")){
    						innerBracketLeftValue = innerBracketLeftValue / Double.valueOf(inputArr[i]);
    					} else if(operand.equals("+")){
    						innerBracketLeftValue = innerBracketLeftValue+Double.valueOf(inputArr[i]);
    					} else if(operand.equals("-")){
    						innerBracketLeftValue = innerBracketLeftValue-Double.valueOf(inputArr[i]);
    					}
        			}	
        		}
        		else if("+ / - *".contains(inputArr[i])){
        			operand=inputArr[i];
        		} 
        	}
        	else if("+ / - *".contains(inputArr[i])){
    			operand=inputArr[i];
    		}
        	else if(inputArr[i].chars().allMatch( Character::isDigit )){
        		if(leftValue==0)
        			leftValue=Double.valueOf(inputArr[i]) ;
        		else {
    				if(operand.equals("*")){
    					leftValue = leftValue*Double.valueOf(inputArr[i]);
					} else if(operand.equals("/")){
						leftValue = leftValue/Double.valueOf(inputArr[i]);
					} else if(operand.equals("+")){
						leftValue = leftValue+Double.valueOf(inputArr[i]);
					} else if(operand.equals("-")){
						leftValue = leftValue - Double.valueOf(inputArr[i]);
					}
    			}
        	}
        }            
    	System.out.println(leftValue);
    	return leftValue;
	}
	
	/**
	 * Task 2 Number sorting method. 
	 * @Input: numbers: Ex: 321212154
	 * return : int[]_sorted
	 */
	public static int[] task2() {
		
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the numbers:");
	    String input = scanner.nextLine();
	    String[] inputArr=input.split("");
	    int numbersArr[] = new int[inputArr.length];
	    for(int k=0; k< inputArr.length;k++) {
	    	numbersArr[k] = Integer.valueOf(inputArr[k]);
	    }
	    int length=numbersArr.length-1;
	    int temp=0;
		for (int i = 0; i < length  ; i++) {
		  for (int j = 0; j < length - i ; j++) {
		    if (numbersArr[j] > numbersArr[j+1]){
		       temp = numbersArr[j];
		       numbersArr[j] = numbersArr[j+1];
		       numbersArr[j+1] = temp;
		    }
		  }
		}
		System.out.println(Arrays.toString(numbersArr));
		return numbersArr;
	}
	
	
}
