package com.ctw.pharma.controller;

import com.ctw.pharma.model.Role;
import com.ctw.pharma.service.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @PostMapping( value = "/create")
    public ResponseEntity<?> createRole(@RequestBody Role role){
        LOGGER.info("RoleController :create: " + role);
        Map<String, Object> map = new HashMap<>();
        role = roleService.createRole(role);
        map.put("role", role);
        map.put("isSuccess", true);
        return ResponseEntity.ok(map);
    }

    @DeleteMapping( value = "/delete/{roleId}")
    public ResponseEntity<?> deleteRoleById(@PathVariable("roleId") long roleId){
        LOGGER.info("RoleController :delete: " + roleId);
        Map<String, Object> map = new HashMap<>();
        boolean isDeleted = roleService.deleteRoleById(roleId);
        map.put("isDeleted", isDeleted);
        return ResponseEntity.ok(map);
    }
}
