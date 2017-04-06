package si.nfcsb.angular2login.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Goran on 3/29/2017.
 */
@RestController
@RequestMapping(UserController.BASE_URL)
public class UserController {

    public static final String BASE_URL = "/user";
    private static final String GET_USER_URL = "/getUser";

    @RequestMapping(GET_USER_URL)
    public ResponseEntity<?> getUser(Principal user) {
        Map<String, String> map = new HashMap<String, String>();
        if (user != null) {
            map.put("username", user.getName());
        }
        return new ResponseEntity(map, HttpStatus.OK);
    }

}
