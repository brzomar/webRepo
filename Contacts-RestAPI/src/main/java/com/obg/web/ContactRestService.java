package com.obg.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.obg.dao.ContactRepository;
import com.obg.entities.Contact;

@RestController
@CrossOrigin("*")
public class ContactRestService {
	
	@Autowired
	private ContactRepository contactRepository;
	
	@RequestMapping(value="/contacts", method=RequestMethod.GET)
	public List<Contact> getAllContacts(){
		return contactRepository.findAll();
	}

	@RequestMapping(value="/contact/{id}", method=RequestMethod.GET)
	public Optional<Contact> getContact(@PathVariable Long id){
		return contactRepository.findById(id);
	}

	@RequestMapping(value="/contact/{id}", method=RequestMethod.PUT)
	public Contact update(@PathVariable Long id, @RequestBody Contact contact){
		contact.setId(id);
		return contactRepository.save(contact);
	}

	@RequestMapping(value="/contact", method=RequestMethod.POST)
	public Contact save(@RequestBody Contact contact){
		return contactRepository.save(contact);
	}

	@RequestMapping(value="/contact/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable Long id){
		contactRepository.deleteById(id);
	}

	@RequestMapping(value="/searchContacts", method=RequestMethod.GET)
	public Page<Contact> searchContacts(@RequestParam(name="keyWord", defaultValue="") String keyWord, 
								@RequestParam(name="page", defaultValue="0") int page, 
								@RequestParam(name="size", defaultValue="5") int size){
		return contactRepository.search("%"+keyWord+"%", PageRequest.of(page, size));
	}
}
