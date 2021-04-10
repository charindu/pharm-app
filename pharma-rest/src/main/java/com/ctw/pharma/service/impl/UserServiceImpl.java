package com.ctw.pharma.service.impl;

import com.ctw.pharma.model.*;
import com.ctw.pharma.repo.UserRepository;
import com.ctw.pharma.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        LOGGER.info("UserServiceImpl:createUser:" + user);
        return userRepository.save(user);
    }

    @Override
    public List<User> loadAllActiveUsers() {
        LOGGER.info("UserServiceImpl:loadAllActiveUsers>");
        List<User> userList = userRepository.findAll();
        if(userList ==null){
            userList = new ArrayList<>();
        }
        return userList;
    }
}
