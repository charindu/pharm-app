package com.ctw.pharma.controller;

import com.ctw.pharma.model.Province;
import com.ctw.pharma.service.ProvinceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/province")
public class ProvinceController {

    @Autowired
    private ProvinceService provinceService;

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @PostMapping( value = "/create")
    public ResponseEntity<?> createProvince(@RequestBody Province province){
        LOGGER.info("ProvinceController :create: " + province);
        Map<String, Object> map = new HashMap<>();
        province = provinceService.createProvince(province);
        map.put("province", province);
        map.put("isSuccess", true);
        return ResponseEntity.ok(map);
    }

    @GetMapping(value = "/loadActiveProvinces")
    public ResponseEntity<?> loadAllActiveProvinces(){
        LOGGER.info("ProvinceController :loadAllActiveProvinces: ");
        Map<String, Object> map = new HashMap<>();
        List<Province> provincesList = provinceService.loadAllProvinces();
        map.put("provincesList", provincesList);
        map.put("isSuccess", true);
        return ResponseEntity.ok(map);
    }
}
