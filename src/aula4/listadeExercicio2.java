package aula4;

import java.util.Scanner;

public class listadeExercicio2 {
	public static void main(String[] args) {
		exercicio1();
		exercicio2();
		exercicio3();
		exercicio4();
		exercicio5();
		exercicio6();
	}
	static void exercicio1() {
			Scanner sc = new Scanner(System.in);
			
			System.out.print("Digite um número: ");
		    int número = sc.nextInt();
		    
		    if (número % 2 == 0 ) {
		    	System.out.println("O seu número é par ");
		    } else {
		    	System.out.println("O seu número é impar ");
		    }
		}
	
	static void exercicio2()  {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite um primeiro número: ");
		int n1 = sc.nextInt();
		System.out.print("Digite um segundo número: ");
		int n2 = sc.nextInt();
		
		if (n1 > n2) {
		System.out.println("O maior número é: " + n1);
	} else if (n1 < n2) {
		System.out.println("O maior número é: " + n2);
	} else {
		System.out.println("Os dois números são iguais! ");
	}
	}
	
	static void exercicio3() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite um número: ");
		int n1 = sc.nextInt();
		
		if (n1 < 0) {
			System.out.println("O seu número é negativo. ");
		} else if (n1 > 0) {
			System.out.println("O seu número é positivo. ");
		} else {
				System.out.println("Zero ");
		}
	}
	 static void exercicio4() {
		 Scanner sc = new Scanner(System.in);
		 
		 System.out.print("Qual foi sua nota na prova? ");
		 int n1 = sc.nextInt();
		 
		 if (n1 >= 6) { 
			 System.out.println("Parabens! Você foi aprovado. ");
		 } else if (n1 < 6) {
			 System.out.println("Você reprovou! ");
		 }
	 }
	 
	 static void exercicio5() {
		 Scanner sc = new Scanner(System.in);
		 
		 System.out.print("Qual sua idade? ");
		 int n1 = sc.nextInt();
		 
		 if (n1 < 16) {
			 System.out.println("Você não pode votar. ");
		 } else if (n1 < 18) {
			 System.out.println("Voto opcional. ");
		 } else {
			 System.out.println("Voto obrigatório. "); 
		 }
	 }
	  static void exercicio6() {
		  Scanner sc = new Scanner(System.in);
		  
		  System.out.print("Digite um número? ");
		  int n1 = sc.nextInt(); 
		  System.out.print("Digite um segundo número? ");
		  int n2 = sc.nextInt();
		  System.out.print("Digite um terceiro número? ");
		  int n3 = sc.nextInt();
		  
		  if (n1 > n2 && n1 > n3) {
			  System.out.println("O maior número é " + n1);
		  } else if (n2 > n1 && n2 > n3) {
			  System.out.println("O maior número é " + n2);
		  } else { 
			  System.out.println("O maior número é " + n3);
		  }
		  sc.close();
	  }
}
	
	
