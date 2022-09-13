package swproject.yoohoo.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import swproject.yoohoo.domain.Member;
import swproject.yoohoo.domain.ResultVO;
import swproject.yoohoo.domain.SessionConst;
import swproject.yoohoo.service.MemberService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;


    @PostMapping("/sign_up")
    public ResultVO create(@RequestBody MemberForm form){
        Member member = new Member();
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setCompany(form.getCompany());
        member.setAddress(form.getAddress());
        member.setContact(form.getContact());
        member.setPhoto_dir("");

        memberService.join(member);

        return new ResultVO("OK","true");
    }

    @PostMapping("/sign_in")
    public ResultVO login(@RequestBody LoginForm form, HttpServletRequest request){//검증 생략
        Member loginMember= memberService.login(form.getEmail(),form.getPassword());
        if(loginMember==null) return new ResultVO("BAD","아이디와 비밀번호가 일치하지 않습니다.");
        //로그인 성공

        HttpSession session=request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER,loginMember.getId());
        //세션 생성, 세션에 회원 정보 보관

        return new ResultVO("OK","true");
    }

    @PostMapping("/logout")
    public ResultVO logout(HttpServletRequest request){
        HttpSession session=request.getSession(false);
        if(session!=null) session.invalidate();

        return new ResultVO("OK","true");
    }

    @GetMapping("/member/edit")
    public Member editForm(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
                           Long loginId){
        return memberService.findOne(loginId);
    }

    @PostMapping("/member/edit")
    public Member edit(@RequestBody MemberForm form, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
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
