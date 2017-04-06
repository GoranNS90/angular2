package si.nfcsb.angular2login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import si.nfcsb.angular2login.dto.EmployeeDTO;
import si.nfcsb.angular2login.service.EmployeeService;

/**
 * Created by Goran on 4/4/2017.
 */
@RestController
@RequestMapping(EmployeeController.BASE_URL)
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    public static final String BASE_URL = "/employee";
    private static final String EMPLOYEE_ADD_URL = "/add";
    private static final String EMPLOYEE_GET_ALL_URL = "/getAll";

    public EmployeeController() {
        super();
    }

    public EmployeeController(EmployeeService employeeService) {
        super();
        this.employeeService = employeeService;
    }


    @RequestMapping(value = EMPLOYEE_ADD_URL, method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody EmployeeDTO employeeDTO) {
        return employeeService.add(employeeDTO);
    }

    @RequestMapping(EMPLOYEE_GET_ALL_URL)
    public ResponseEntity<?> getAll() {
        return employeeService.getAll();
    }

}
