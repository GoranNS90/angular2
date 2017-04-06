package si.nfcsb.angular2login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import si.nfcsb.angular2login.dto.EmployeeDTO;
import si.nfcsb.angular2login.model.Employee;
import si.nfcsb.angular2login.repository.EmployeeRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Goran on 4/4/2017.
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl() {
        super();
    }

    public EmployeeServiceImpl (EmployeeRepository employeeRepository) {
        super();
        this.employeeRepository = employeeRepository;
    }

    @Override
    public ResponseEntity<?> getAll() {
        List<EmployeeDTO> employees = new ArrayList<EmployeeDTO>();
        for (Employee employee :  employeeRepository.findAll()) {
            EmployeeDTO employeeDTO = new EmployeeDTO();
            employeeDTO.setFname(employee.getFname());
            employeeDTO.setLname(employee.getLname());
            employeeDTO.setEmail(employee.getEmail());
            employees.add(employeeDTO);
        }
        return new ResponseEntity(employees, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> add(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setFname(employeeDTO.getFname());
        employee.setLname(employeeDTO.getLname());
        employee.setEmail(employeeDTO.getEmail());

        employeeRepository.save(employee);

        return new ResponseEntity(HttpStatus.OK);
    }
}
