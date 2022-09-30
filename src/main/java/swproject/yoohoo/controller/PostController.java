package swproject.yoohoo.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import swproject.yoohoo.domain.*;
import swproject.yoohoo.login.Login;
import swproject.yoohoo.service.MemberService;
import swproject.yoohoo.service.PostService;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PostController {
    private final PostService postService;
    private final MemberService memberService;


    @PostMapping("/posts")
    public ResultVO create(PostForm form,@Login Member loginMember) throws IOException {
        PostCreateRequestDto requestDto=new PostCreateRequestDto(
                form.getTitle(),
                form.getRental_unit(),
                form.getRental_price(),
                form.getQuantity(),
                form.getExplain());
        postService.savePost(loginMember.getId(), requestDto,form.getPhotos(),form.getCategories());
        return new ResultVO(201,"게시물 생성 성공",null);
    }

    @GetMapping("/posts/{id}")
    public ResultVO detail(@PathVariable Long id) {
        Post post=postService.findOne(id);
        Member member= memberService.findOne(post.getMember().getId());

        PostDTO request=new PostDTO(member,post);
        return new ResultVO(200,"게시물 조회 성공",request);
    }

    @GetMapping("/posts")
    public ResultVO list(){
        List<Post> posts = postService.findPosts();
        List<PostsDTO> postlist=posts.stream()
                .map(m->new PostsDTO(m))
                .collect(Collectors.toList());

        return new ResultVO(200,"게시물 전체 조회 성공",postlist);
    }

    @Getter
    public class PostsDTO{
        private Long post_id;
        private String title; //제목
        private String unit; //대여 단위
        private int price; //대여 가격
        private Image image; //대표 사진

        public PostsDTO(Post post) {
            this.post_id=post.getId();
            this.title = post.getTitle();
            this.unit = post.getRental_unit();
            this.price = post.getRental_price();
            if(post.getPhotos().isEmpty()){
                log.info("post: {}",post);
            }else{
                this.image=new Image(post.getPhotos().get(0));
            }
        }

    }

    @Getter
    @AllArgsConstructor
    public class PostDTO{
        private String company; //작성자 회사이름
        private String address; //작성자 주소
        private String photo_dir; //작성자 프로필 사진 경로

        private String title; //제목
        private String rental_unit; //대여 단위
        private int rental_price; //대여 가격
        private int quantity; //수량
        private String explain; //내용
        private List<Image> photos; //사진 리스트
        private List<CategoryName> categories; //카테고리 리스트

        //카테고리 담기
       public PostDTO (Member member, Post post){//Enity->DTO
           log.info("postDTO생성- member={},post={}",member,post);

           this.company= member.getCompany();
           this.address= member.getAddress();
           this.photo_dir= member.getPhoto_dir();

           this.title=post.getTitle();
           this.rental_unit=post.getRental_unit();
           this.quantity= post.getQuantity();
           this.explain=post.getContent();
           this.photos=post.getPhotos().stream()
                   .map(m->new Image(m))
                   .collect(Collectors.toList());

          this.categories=post.getPostCategories().stream()
                  .map(m->new CategoryName(m.getCategory().getName()))
                  .collect(Collectors.toList());

           log.info("postDTO 생성: {}",this);
        }
    }

    @Getter
    public static class CategoryName{ //카테고리
        private String name; //카테고리 이름
        public CategoryName(String name) {
            this.name = name;
        }
    }

    @Getter
    public static class Image{//사진DTO
        private String name; //사진 저장 이름
        private String dir; //사진 경로

        public Image(Photo photo) {
            this.name = photo.getFileName();
            this.dir = photo.getFilePath();
        }

    }
}
