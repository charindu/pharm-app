package com.ctw.pharma.service.impl;

import com.ctw.pharma.model.Role;
import com.ctw.pharma.repo.RoleRepository;
import com.ctw.pharma.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role createRole(Role role) {
        return roleRepository.save( role);
    }

    @Override
    public Role loadRoleById(long id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public List<Role> loadAllRoles() {
        return roleRepository.findAll();
    }
}
