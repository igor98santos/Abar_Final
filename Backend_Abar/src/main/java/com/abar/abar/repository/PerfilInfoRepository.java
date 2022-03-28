
package com.abar.abar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abar.abar.model.PerfilInfo;


@Repository
public interface PerfilInfoRepository extends JpaRepository<PerfilInfo, Long>{

}
