package com.example.controllers;

import com.example.models.Timezone;
import com.example.services.TimezoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/timezones")
public class TimezoneController {

    @Autowired
    private TimezoneService timezoneService;

    @GetMapping
    public List<Timezone> getAllTimezones() {
        return timezoneService.getAllTimezones();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Timezone> getTimezoneById(@PathVariable Long id) {
        Timezone timezone = timezoneService.getTimezoneById(id);
        if (timezone != null) {
            return ResponseEntity.ok(timezone);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/search")
    public List<Timezone> searchTimezonesByCountry(@RequestParam String country) {
        return timezoneService.searchTimezonesByCountry(country);
    }

    @PostMapping
    public ResponseEntity<Timezone> createTimezone(@RequestBody Timezone timezone) {
        Timezone createdTimezone = timezoneService.createTimezone(timezone);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTimezone);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Timezone> updateTimezone(@PathVariable Long id, @RequestBody Timezone timezone) {
        Timezone updatedTimezone = timezoneService.updateTimezone(id, timezone);
        if (updatedTimezone != null) {
            return ResponseEntity.ok(updatedTimezone);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTimezone(@PathVariable Long id) {
        boolean deleted = timezoneService.deleteTimezone(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}