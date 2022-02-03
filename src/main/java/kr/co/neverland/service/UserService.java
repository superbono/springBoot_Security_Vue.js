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
    public boolean isDuplicateId(String username) {
        boolean result = repository.existsByUsername(username);
        System.out.println(result);
        return result;
    }

    @Transactional
    public boolean isDuplicateNick(String nickname) {
        boolean result = repository.existsByNickname(nickname);
        System.out.println(result);
        return result;
    }
}
