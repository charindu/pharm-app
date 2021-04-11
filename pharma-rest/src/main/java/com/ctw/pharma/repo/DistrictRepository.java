package com.ctw.pharma.repo;

import com.ctw.pharma.model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface DistrictRepository extends JpaRepository<District, Long> {
}
