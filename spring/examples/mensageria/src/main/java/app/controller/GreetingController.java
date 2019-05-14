package app.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import app.model.Greeting;
import app.model.Message;

@Controller
public class GreetingController {

	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public Greeting greeting(Message msg) throws InterruptedException {
		System.err.println(msg);
		Thread.sleep(0);
		return new Greeting("Hello, "+HtmlUtils.htmlEscape(msg.getNome()));
	}
}
