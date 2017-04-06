package si.nfcsb.angular2login.service;

import org.springframework.http.ResponseEntity;
import si.nfcsb.angular2login.dto.EmployeeDTO;

/**
 * Created by Goran on 4/3/2017.
 */
public interface EmployeeService {

    public ResponseEntity<?> getAll();

    public ResponseEntity<?> add(EmployeeDTO employeeDTO);

}
