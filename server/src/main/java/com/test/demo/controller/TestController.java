package com.test.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.test.demo.service.TaskService;

@RestController
 
@RequestMapping(value = "api/task/")
@CrossOrigin(origins = "*")
public class TestController {
	@Autowired
    private TaskService taskService;
	
	@RequestMapping(method=RequestMethod.GET)
    public ResponseEntity<String> get() throws IOException {
    		return  ResponseEntity.ok("application running");
    }
	@RequestMapping(method=RequestMethod.GET, path = "one")
    public ResponseEntity<Double> taskOne(@RequestParam("term") String term) throws IOException {
		Double result=taskService.taskOne(term);	
		return  ResponseEntity.ok(result);
    }
	@RequestMapping(method=RequestMethod.GET, path = "two")
    public ResponseEntity<int[]> taskTwo(@RequestParam("numbers") String numbers) throws IOException {
		int[] result=taskService.taskTwo(numbers);	
		return  ResponseEntity.ok(result);
    }
	@RequestMapping(method=RequestMethod.GET, path = "three")
    public ResponseEntity<List<Double>> taskThree(@RequestParam("term") String term) throws IOException {
		List<Double> result=taskService.taskThree(term);	
		return  ResponseEntity.ok(result);
    }
}

	
	