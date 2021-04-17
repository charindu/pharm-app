package com.ctw.pharma.controller;

import com.ctw.pharma.model.District;
import com.ctw.pharma.model.Province;
import com.ctw.pharma.model.Role;
import com.ctw.pharma.service.DistrictService;
import com.ctw.pharma.service.ProvinceService;
import com.ctw.pharma.service.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/configurations")
public class ConfigurationsController {

    @Autowired
    private RoleService roleService;

    @Autowired
    private ProvinceService provinceService;

    @Autowired
    private DistrictService districtService;

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @GetMapping( value = "/loadAll")
    public ResponseEntity<?> loadAllConfigurations(){
        LOGGER.info("ConfigurationsController:loadAllConfigurations:");
        Map<String, Object> map = new HashMap<>();
        List<Role> rolesList = roleService.loadAllRoles();
        List<Province> provincesList = provinceService.loadAllProvinces();
        List<District> districtsList = districtService.loadAllDistricts();

        map.put("rolesList", rolesList);
        map.put("provincesList", provincesList);
        map.put("districtsList", districtsList);
        map.put("isSuccess", true);
        return ResponseEntity.ok(map);
    }
}
