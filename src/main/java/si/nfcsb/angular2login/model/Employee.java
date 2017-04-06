package si.nfcsb.angular2login.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Goran on 4/3/2017.
 */
@Data
@Entity
@Table(name = "Employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "email")
    private String email;

}
