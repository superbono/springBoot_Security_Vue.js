package kr.co.neverland.controller;

import kr.co.neverland.model.User;
import kr.co.neverland.repository.UserRepository;
import kr.co.neverland.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository repository;
    private final UserService service;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/join")
    public String join(@RequestBody User user) {
        user.setProviderId("nvl");
        user.setProvider("NEVERLAND");
        user.setRoles("ROLE_USER");
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        repository.save(user);
        return "회원가입완료";
    }

    @ResponseBody
    @GetMapping("/idChk")
    public ResponseEntity<?> idChk(String username) {
        boolean result = service.isDuplicateId((username));
        System.out.println(result);
        if(!result) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @ResponseBody
    @GetMapping("/nickChk")
    public ResponseEntity<?> nickChk(String nickname) {
        boolean result = service.isDuplicateNick((nickname));
        System.out.println(result);
        if(!result) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

}
