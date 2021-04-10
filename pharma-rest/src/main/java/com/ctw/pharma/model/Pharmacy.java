package com.ctw.pharma.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "pharmacy")
public class Pharmacy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "pharmacy_name")
    private String pharmacyName;

    @Column(name = "active", nullable = true)
    private boolean active;

    @ManyToOne
    @JoinColumn(name = "district_id")
    private District district;

    @ManyToOne
    @JoinColumn(name = "province_id")
    private Province province;

    @OneToMany(mappedBy = "pharmacy")
    Set<PharmacyProduct> pharmacies;

    @OneToMany(mappedBy = "pharmacy", cascade = CascadeType.ALL)
    private List<User> users;

    @OneToMany(mappedBy = "pharmacy", cascade = CascadeType.ALL)
    private List<UserOrder> userOrders;

    /*@ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;*/

}
