package kr.co.neverland.controller;

import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@NoArgsConstructor
public class TestController {

    @RequestMapping("/test")
    public String test() {
        return "test";
    }

}
