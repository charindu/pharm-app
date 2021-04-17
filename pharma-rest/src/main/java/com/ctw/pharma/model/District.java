package com.ctw.pharma.model;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

//@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "district")
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "code")
    @NotEmpty(message = "*Can't be blank")
    private String code;

    @Column(name = "district_name")
    @NotEmpty(message = "*Can't be blank")
    private String districtName;

    @ManyToOne
    @JoinColumn(name = "province_id")
    private Province province;

    @OneToMany(mappedBy = "district", cascade = CascadeType.ALL)
    private List<User> users;

    @OneToMany(mappedBy = "district", cascade = CascadeType.ALL)
    private List<Pharmacy> pharmacies;

}
