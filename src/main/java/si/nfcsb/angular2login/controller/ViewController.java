package si.nfcsb.angular2login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Goran on 4/11/2017.
 */
@Controller
public class ViewController {

    @RequestMapping({ "/home", "/" })
    public String index() {
        return "forward:/index.html";
    }

}
