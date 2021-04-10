package com.ctw.pharma.model;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "code")
    private String code;

    @Column(name = "role_name")
    private String roleName;

    @ManyToMany( mappedBy = "roles")
    private Set<User> users;
}
