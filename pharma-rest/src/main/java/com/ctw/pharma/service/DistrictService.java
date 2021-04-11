package com.ctw.pharma.service;

import com.ctw.pharma.model.District;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DistrictService {

    District createDistrict(District district);

    District loadDistrictById(long id);

    List<District> loadAllDistricts();
}
