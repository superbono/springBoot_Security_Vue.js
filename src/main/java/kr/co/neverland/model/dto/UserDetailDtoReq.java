package kr.co.neverland.model.dto;

import lombok.Data;

@Data
public class UserDetailDtoReq {
    private String username;
    private String password;
    private String nickname;
}
