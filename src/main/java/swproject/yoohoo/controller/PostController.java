package swproject.yoohoo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import swproject.yoohoo.domain.Member;
import swproject.yoohoo.domain.PostCreateRequestDto;
import swproject.yoohoo.domain.ResultVO;
import swproject.yoohoo.login.Login;
import swproject.yoohoo.repository.PostRepository;
import swproject.yoohoo.service.MemberService;
import swproject.yoohoo.service.PostService;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
    private final MemberService memberService;

    @PostMapping("/post")
    public ResultVO create(PostForm form,@Login Member loginMember) throws IOException {
        PostCreateRequestDto requestDto=new PostCreateRequestDto(
                form.getTitle(),
                form.getRental_unit(),
                form.getRental_price(),
                form.getQuantity(),
                form.getExplain());
        postService.savePost(loginMember.getId(), requestDto,form.getPhotos(),form.getCategories());
        return new ResultVO(200,"게시물 생성",null);
    }
}
