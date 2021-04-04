package com.ctw.pharma.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_code")
    private String productCode; // Ministry of Health Medicine Code

    @Column(name = "category")
    @NotEmpty(message = "*Can't be blank")
    private String category;

    @OneToMany(mappedBy = "product")
    Set<PharmacyProduct> products;
}