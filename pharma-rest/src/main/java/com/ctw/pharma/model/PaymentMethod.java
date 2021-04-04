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
@Table(name = "payment_method")
public class PaymentMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "card_owner")
    private String cardOwner;

    @Column(name = "expiration_month")
    private Integer expirationMonth;

    @Column(name = "expiration_year")
    private Integer expirationYear;

    @Column(name = "credit_card_number")
    private String creditCardNumber;

    @Column(name = "card_security_code")
    private Integer cardSecurityCode;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
