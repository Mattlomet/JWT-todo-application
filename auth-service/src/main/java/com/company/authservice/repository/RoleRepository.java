package com.company.authservice.repository;

import java.util.Optional;

import com.company.authservice.models.ERole;
import com.company.authservice.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
