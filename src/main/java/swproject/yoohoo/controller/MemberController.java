package swproject.yoohoo.controller;


import lombok.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import swproject.yoohoo.domain.Alarm;
import swproject.yoohoo.domain.Member;
import swproject.yoohoo.domain.ResultVO;
import swproject.yoohoo.domain.SessionConst;
import swproject.yoohoo.login.Login;
import swproject.yoohoo.service.AlarmService;
import swproject.yoohoo.service.MemberService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final AlarmService alarmService;

    @PostMapping("/members")
    public ResultVO create(@RequestBody JoinForm form){
        Member member = new Member();
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setCompany(form.getCompany());
        member.setAddress(form.getAddress());
        member.setContact(form.getContact());
        member.setPhoto_dir("");
        memberService.join(member);

        Alarm alarm = new Alarm();
        alarm.setMember(member);
        alarm.setTitle("반갑습니다!");
        alarm.setContent("회원님의 다양한 자원을 공유해보세요");
        alarm.setAlarmDate(LocalDateTime.now());
        alarmService.save(alarm);

        return new ResultVO(201,"가입 생성",null);
    }

    @GetMapping("/login")
    public ResultVO login(){
        return new ResultVO(200,"로그인 리다이렉트 성공",null);
    }


    @PostMapping("/login")
    public ResultVO login(@RequestBody LoginForm form, HttpServletRequest request){//검증 생략
        Member loginMember= memberService.login(form.getEmail(),form.getPassword());
        if(loginMember==null) throw new IllegalArgumentException("아이디와 비밀번호가 일치하지 않습니다");
        //로그인 성공

        HttpSession session=request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER,loginMember);
        //세션 생성, 세션에 회원 정보 보관

        return new ResultVO(200,"로그인 성공",null);
    }


    @PostMapping("/logout")
    public ResultVO logout(HttpServletRequest request, @Login Member loginMember){
        HttpSession session=request.getSession(false);
        if(session!=null) session.invalidate();

        return new ResultVO(200,"로그아웃 성공",null);
    }

    @GetMapping("/member/edit")
    public ResultVO editForm(@Login Member loginMember){
        return new ResultVO(200,null,new EditDTO(loginMember));
    }

    @PutMapping("/members")
    public ResultVO edit(EditForm form, @Login Member loginMember, HttpServletRequest request) throws IOException {
        Member member=memberService.findOne(memberService.updateMember(loginMember.getId(), form));
        EditDTO newform= new EditDTO(member);

        HttpSession session = request.getSession(false);
        session.setAttribute(SessionConst.LOGIN_MEMBER,member);
        return new ResultVO(200,null, newform);
    }

    @GetMapping("/admin/members") //관리자 용이라 dto따로 사용X
    public ResultVO list(){
        List<Member> members = memberService.findMembers();
        return new ResultVO(200,null,members);
    }

    @Getter
    static class EditDTO {

        private String email; //이메일
        private String password; //비밀번호
        private String company; //회사 이름
        private String address; //회사 주소
        private String contact; //회사 연락처
        private String photo_dir; //프로필 사진 경로

        public EditDTO(Member member) {
            this.email = member.getEmail();
            this.password = member.getPassword();
            this.company = member.getCompany();
            this.address = member.getAddress();
            this.contact = member.getContact();
            this.photo_dir = member.getPhoto_dir();
        }
    }
}
