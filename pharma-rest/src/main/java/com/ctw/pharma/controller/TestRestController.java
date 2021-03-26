package com.ctw.pharma.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( value = "/api")
public class TestRestController {

    @GetMapping(value = "/hello")
    public String sayHello(){
        return "Hello Controller..";
    }
}
