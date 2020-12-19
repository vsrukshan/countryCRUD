package com.vsrukshan.countryCRUD.controller;

import com.vsrukshan.countryCRUD.dao.CountryDao;
import com.vsrukshan.countryCRUD.entity.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path="/rest/v2")
public class CountryController {

    @Autowired
    private CountryDao countryDao;

    @GetMapping
    public List<Country> getAll() {
        return countryDao.findAll();
    }

    @GetMapping(path = "/{id}")
    public Country get(@PathVariable Integer id) {

        Optional<Country> optionalCountry = countryDao.findById(id);

        if(optionalCountry.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Country not found");
        }

        return optionalCountry.get();
    }

    @PostMapping
    public Country add(@RequestBody Country country) {
        countryDao.save(country);
        return country;
    }

    @PutMapping(path = "{id}")
    public Country update(@PathVariable Integer id, @RequestBody Country country) {
        country.setId(id);
        return countryDao.save(country);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable Integer id) {
        countryDao.deleteById(id);
    }

}
