package com.ctw.pharma.service.impl;

import com.ctw.pharma.model.District;
import com.ctw.pharma.repo.DistrictRepository;
import com.ctw.pharma.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistrictServiceImpl implements DistrictService {

    @Autowired
    private DistrictRepository districtRepository;

    @Override
    public District createDistrict(District district) {
        return districtRepository.save(district);
    }

    @Override
    public District loadDistrictById(long id) {
        return districtRepository.findById(id).get();
    }

    @Override
    public List<District> loadAllDistricts() {
        return districtRepository.findAll();
    }
}
