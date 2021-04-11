package com.ctw.pharma.service.impl;

import com.ctw.pharma.model.Province;
import com.ctw.pharma.repo.ProvinceRepository;
import com.ctw.pharma.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceServiceImpl implements ProvinceService {

    @Autowired
    private ProvinceRepository provinceRepository;

    @Override
    public Province createProvince(Province province) {
        return provinceRepository.save(province);
    }

    @Override
    public Province loadProvinceById(long id) {
        return provinceRepository.findById(id).get();
    }

    @Override
    public List<Province> loadAllProvinces() {
        return provinceRepository.findAll();
    }
}
