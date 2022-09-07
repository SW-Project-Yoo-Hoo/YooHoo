package swproject.yoohoo.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;
import swproject.yoohoo.domain.Member;
import swproject.yoohoo.domain.SessionConst;
import swproject.yoohoo.service.MemberService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;


    @PostMapping("/members/joinForm")
    public ResponseEntity<?> create(MemberForm form){
        Member member = new Member();
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setCompany(form.getCompany());
        member.setAddress(form.getAddress());
        member.setContact(form.getContact());
        member.setPhoto_dir("");

        memberService.join(member);

        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostMapping("/members/loginForm")
    public ResponseEntity<?> login(LoginForm form, HttpServletRequest request){//검증 생략
        Member loginMember= memberService.login(form.getEmail(),form.getPassword());
        if(loginMember==null) return ResponseEntity.status(HttpStatus.OK).body(false);
        //로그인 성공

        HttpSession session=request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER,loginMember.getId());
        //세션 생성, 세션에 회원 정보 보관

        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request){
        HttpSession session=request.getSession(false);
        if(session!=null) session.invalidate();

        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @GetMapping("/member/edit")
    public Member editForm(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
                           Long loginId){
        return memberService.findOne(loginId);
    }

    @PostMapping("/member/edit")
    public Member edit(MemberForm form, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
                            Long loginId){
        memberService.updateMember(loginId, form);
        return memberService.findOne(loginId);
    }

    @GetMapping("/members")
    public List<Member> list(){
        List<Member> members = memberService.findMembers();
        return members;
    }
}
