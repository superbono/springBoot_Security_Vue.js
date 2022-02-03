package kr.co.neverland.repository;

import kr.co.neverland.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUsername (String username);
    boolean existsByUsername (String username);
    boolean existsByNickname (String nickname);
}
