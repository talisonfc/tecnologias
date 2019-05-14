package app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import app.model.Email;

@Controller
@RequestMapping
public class Index {

	@Autowired
	JmsTemplate jmsTemplate;
	
	@GetMapping
	public ModelAndView index() {
		System.out.println("Enviar email para talison");
		jmsTemplate.convertAndSend("mailbox", new Email("talison@gmail.com", "Ola talison"));
		return new ModelAndView("/index");
	}
	
	@GetMapping("/email")
	public ModelAndView sendEmail() {
		System.out.println("Enviar email para talison");
		jmsTemplate.convertAndSend("mailbox", new Email("talison@gmail.com", "Ola talison"));
		return new ModelAndView("/index");
	}
}
