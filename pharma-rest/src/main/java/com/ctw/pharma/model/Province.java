package com.ctw.pharma.model;


import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "province")
public class Province {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "code")
    private String code;

    @Column(name = "province_name")
    private String provinceName;

    /*@ManyToOne
    @JoinColumn
    private Country country;*/

    @OneToMany(mappedBy = "province", cascade = CascadeType.ALL)
    private List<District> districts;

    @OneToMany(mappedBy = "province", cascade = CascadeType.ALL)
    private List<User> users;

    @OneToMany(mappedBy = "province", cascade = CascadeType.ALL)
    private List<Pharmacy> pharmacies;

}
