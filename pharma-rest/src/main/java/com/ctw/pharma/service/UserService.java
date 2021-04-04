package com.ctw.pharma.service;

import com.ctw.pharma.model.User;

import java.util.List;

public interface UserService {

    User createUser(User user);

    List<User> loadAllActiveUsers();
}
