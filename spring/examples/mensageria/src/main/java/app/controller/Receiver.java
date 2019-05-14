package app.controller;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import app.model.Email;

@Component
public class Receiver {

	@JmsListener(destination="mailbox", containerFactory="myFactory")
	public void receiveMessage(Email email) {
		System.out.println("Received <" + email + ">");
	}
	
}
