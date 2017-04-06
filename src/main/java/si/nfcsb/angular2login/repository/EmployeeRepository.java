package si.nfcsb.angular2login.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import si.nfcsb.angular2login.model.Employee;

/**
 * Created by Goran on 4/3/2017.
 */
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {

    public Employee findByFname(String fname);

}
