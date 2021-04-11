package com.ctw.pharma.repo;

import com.ctw.pharma.model.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface ProvinceRepository extends JpaRepository<Province, Long> {
}
