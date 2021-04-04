package com.ctw.pharma.controller;

import com.ctw.pharma.model.User;
import com.ctw.pharma.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserProfileController {

    @Autowired
    private UserService userService;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

    @PostMapping( value = "/create")
    public ResponseEntity<?> createUserProfile(@RequestBody User user){
        LOGGER.info("UserProfileController:create: " + user);
        Map<String, Object> map = new HashMap<>();
        user = userService.createUser(user);
        map.put("user", user);
        map.put("isSuccess", true);
        return ResponseEntity.ok(map);
    }

    @GetMapping( value = "/userslisting")
    public ResponseEntity<?> listingAllActiveUsers(){
        LOGGER.info("UserProfileController:listingAllActiveUsers");
        Map<String, Object> map = new HashMap<>();
        List<User> activeUsers = userService.loadAllActiveUsers();
        map.put("activeUsers", activeUsers);
        return ResponseEntity.ok(map);
    }
}
