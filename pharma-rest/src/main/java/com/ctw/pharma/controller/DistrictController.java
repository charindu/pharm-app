package com.ctw.pharma.controller;

import com.ctw.pharma.model.District;
import com.ctw.pharma.model.Role;
import com.ctw.pharma.service.DistrictService;
import com.ctw.pharma.service.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/district")
public class DistrictController {

    @Autowired
    private DistrictService districtService;

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @PostMapping( value = "/create")
    public ResponseEntity<?> createDistrict(@RequestBody District district){
        LOGGER.info("DistrictController :create: " + district);
        Map<String, Object> map = new HashMap<>();
        district = districtService.createDistrict(district);
        map.put("district", district);
        map.put("isSuccess", true);
        return ResponseEntity.ok(map);
    }
}
