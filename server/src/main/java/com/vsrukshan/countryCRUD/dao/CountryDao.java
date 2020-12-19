package com.vsrukshan.countryCRUD.dao;

import com.vsrukshan.countryCRUD.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryDao extends JpaRepository<Country, Integer> {
}
