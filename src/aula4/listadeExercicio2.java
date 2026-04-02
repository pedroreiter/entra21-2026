package aula4;

import java.util.Scanner;

public class listadeExercicio2 {
	public static void main(String[] args) {
		exercicio1();
	}
	static void exercicio1() {
			Scanner sc = new Scanner(System.in);
			
			System.out.print("Digite um número: ");
		    int número = sc.nextInt();
		    
		    if (número % 2 == 0 ) {
		    	System.out.println("Par ");
		    } else {
		    	System.out.println("Impar ");
		    }
		    sc.close();
		} 
}
	
