package com.ctw.pharma.service;

import com.ctw.pharma.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    User createUser(User user);

    List<User> loadAllActiveUsers();
}
