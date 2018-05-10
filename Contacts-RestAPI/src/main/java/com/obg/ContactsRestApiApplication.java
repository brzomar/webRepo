package com.obg;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.obg.dao.ContactRepository;
import com.obg.entities.Contact;

@SpringBootApplication
public class ContactsRestApiApplication implements CommandLineRunner{

	@Autowired
	private ContactRepository contactRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ContactsRestApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		contactRepository.save(new Contact("Berrezoug", "Omar", df.parse("16/04/1984"), "brz.omar@yahoo.fr", 632997916L, "omar.jpg"));
		contactRepository.save(new Contact("Berrezoug", "Fethi", df.parse("06/03/2018"), "brz.fethi@yahoo.fr", 632997920L, "fethi.jpg"));
		contactRepository.save(new Contact("Berrezoug", "Riham", df.parse("14/11/2014"), "brz.riham@yahoo.fr", 632997922L, "riham.jpg"));
		contactRepository.findAll().forEach(c ->{
			System.out.println(c);
		});
	}
}
