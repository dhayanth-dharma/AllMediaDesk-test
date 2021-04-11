package com.test.demo.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
 
@RequestMapping(value = "api/test")
@CrossOrigin(origins = "*")
public class TestController {
	@RequestMapping(method=RequestMethod.GET)
    public ResponseEntity<String> get() throws IOException {
    		return  ResponseEntity.ok("application running");
    }
}

	
	