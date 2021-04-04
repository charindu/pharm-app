package com.ctw.pharma.model;

import lombok.*;

import javax.persistence.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "price")
    private Double price;

    @Column(name = "medicine_name")
    private String medicineName;

    @Column(name = "medicine_code")
    private String medicineCode;

    @ManyToOne
    @JoinColumn(name = "user_order_id")
    private UserOrder userOrder;

    @Column(name = "include", nullable = false)
    private boolean include = false;

    @Column(name = "submitted", nullable = false)
    private boolean submitted = false;

}
