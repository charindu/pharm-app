package com.ctw.pharma.service;

import com.ctw.pharma.model.Role;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RoleService {

    Role createRole(Role role);

    Role loadRoleById(long id);

    List<Role> loadAllRoles();
}
