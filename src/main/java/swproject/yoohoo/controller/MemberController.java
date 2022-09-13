package swproject.yoohoo.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import swproject.yoohoo.domain.Member;
import swproject.yoohoo.domain.ResultVO;
import swproject.yoohoo.domain.SessionConst;
import swproject.yoohoo.login.Login;
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

    @PostMapping("/login")
    public ResultVO login(@RequestBody LoginForm form, HttpServletRequest request){//검증 생략
        Member loginMember= memberService.login(form.getEmail(),form.getPassword());
        if(loginMember==null) return new ResultVO("BAD","아이디와 비밀번호가 일치하지 않습니다.");
        //로그인 성공

        HttpSession session=request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER,loginMember);
        //세션 생성, 세션에 회원 정보 보관

        return new ResultVO("OK","true");
    }

    @PostMapping("/logout")
    public ResultVO logout(HttpServletRequest request, @Login Member loginMember){
        HttpSession session=request.getSession(false);
        if(session!=null) session.invalidate();

        return new ResultVO("OK","true");
    }

    @GetMapping("/user/edit")
    public Member editForm(@Login Member loginMember){
        return loginMember;
    }

    @PostMapping("/user/edit")
    public Member edit(@RequestBody MemberForm form, @Login Member loginMember,HttpServletRequest request){
        Member member=memberService.findOne(memberService.updateMember(loginMember.getId(), form));

        HttpSession session = request.getSession(false);
        session.setAttribute(SessionConst.LOGIN_MEMBER,member);
        return member;
    }

    @GetMapping("/admin/members")
    public List<Member> list(){
        List<Member> members = memberService.findMembers();
        return members;
    }
}
