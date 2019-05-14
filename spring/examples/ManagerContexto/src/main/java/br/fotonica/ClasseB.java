package br.fotonica;

import org.springframework.beans.factory.annotation.Autowired;

public class ClasseB {
	
	private ClasseA a;
	private String b;
	
	public ClasseA getA() {
		return a;
	}
	public void setA(ClasseA a) {
		this.a = a;
	}
	public String getB() {
		return b;
	}
	public void setB(String b) {
		this.b = b;
	}
	@Override
	public String toString() {
		return "ClasseB [a=" + a + ", b=" + b + "]";
	}
	
	
	
}
