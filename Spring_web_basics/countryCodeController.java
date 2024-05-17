package com.example.controllers;

import com.example.models.CountryCode;
import com.example.services.CountryCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/countryCodes")
public class CountryCodeController {

    @Autowired
    private CountryCodeService countryCodeService;

    @GetMapping
    public List<CountryCode> getAllCountryCodes() {
        return countryCodeService.getAllCountryCodes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CountryCode> getCountryCodeById(@PathVariable Long id) {
        CountryCode countryCode = countryCodeService.getCountryCodeById(id);
        if (countryCode != null) {
            return ResponseEntity.ok(countryCode);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/search")
    public List<CountryCode> searchCountryCodesByCountry(@RequestParam String country) {
        return countryCodeService.searchCountryCodesByCountry(country);
    }

    @PostMapping
    public ResponseEntity<CountryCode> createCountryCode(@RequestBody CountryCode countryCode) {
        CountryCode createdCountryCode = countryCodeService.createCountryCode(countryCode);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCountryCode);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CountryCode> updateCountryCode(@PathVariable Long id, @RequestBody CountryCode countryCode) {
        CountryCode updatedCountryCode = countryCodeService.updateCountryCode(id, countryCode);
        if (updatedCountryCode != null) {
            return ResponseEntity.ok(updatedCountryCode);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCountryCode(@PathVariable Long id) {
        boolean deleted = countryCodeService.deleteCountryCode(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}