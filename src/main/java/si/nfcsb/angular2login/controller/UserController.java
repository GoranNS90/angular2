package si.nfcsb.angular2login.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
    private static final String LOGOUT_URL = "/logout";

    @RequestMapping(GET_USER_URL)
    public ResponseEntity<?> getUser(Principal user) {
        Map<String, String> map = new HashMap<String, String>();
        if (user != null) {
            map.put("username", user.getName());
        }
        return new ResponseEntity(map, HttpStatus.OK);
    }

    @RequestMapping(value = LOGOUT_URL, method = RequestMethod.POST)
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

}
