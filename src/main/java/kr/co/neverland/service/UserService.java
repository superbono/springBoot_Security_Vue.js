package kr.co.neverland.service;

import kr.co.neverland.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Transactional
    public boolean isDuplicate(String username) {
        boolean result = repository.existsByUsername(username);
        System.out.println(result);
        return result;
    }
}
