package com.ctw.pharma.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "user_order")
public class UserOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "submitted")
    private boolean submitted; // yes or no

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "order_date")
    private Date orderDate;

    @Column(name = "order_status")
    private String orderStatus;

    @Column(name = "order_total")
    private BigDecimal orderTotal;

    @Column(name = "shipping_date")
    private Date shippingDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "pharmacy_id")
    private Pharmacy pharmacy;

    // Fetch Lazy, because of reference an unknown target entity property
    // Ref: https://stackoverflow.com/questions/4011472/mappedby-reference-an-unknown-target-entity-property
    @OneToMany(mappedBy = "userOrder", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderItem> orderItems;

    @Column(name = "prescription_code")
    private String prescriptionCode;

    @Column(name = "prescription_status")
    private String prescriptionStatus;

    @Column(name = "active", nullable = false)
    private boolean active = false;
}