package com.ctw.pharma.service;

import com.ctw.pharma.model.Province;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProvinceService {

    Province createProvince(Province province);

    Province loadProvinceById(long id);

    List<Province> loadAllProvinces();
}
