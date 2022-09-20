package swproject.yoohoo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import swproject.yoohoo.controller.PostForm;
import swproject.yoohoo.domain.*;
import swproject.yoohoo.fileupload.FileStore;
import swproject.yoohoo.repository.CategoryRepository;
import swproject.yoohoo.repository.MemberRepository;
import swproject.yoohoo.repository.PhotoRepository;
import swproject.yoohoo.repository.PostRepository;

import java.io.IOException;
import java.util.List;

import static swproject.yoohoo.domain.PostCategory.createPostCategory;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final MemberRepository memberRepository;
    private final CategoryRepository categoryRepository;
    private final PhotoRepository photoRepository;
    private final FileStore fileStore;

    @Transactional
    public Long savePost(Long memberId, PostCreateRequestDto requestDto,List<MultipartFile> files,List<Long> categoryIds) throws IOException {
        //엔티티 조회
        Member member = memberRepository.findOne(memberId);

        Post post = new Post(
                member,
                requestDto.getTitle(),
                requestDto.getRental_unit(),
                requestDto.getRental_price(),
                requestDto.getQuantity(),
                requestDto.getExplain()
        );

        List<Photo> photoList=fileStore.storeFiles(files);
        if(!photoList.isEmpty()){
            for (Photo photo : photoList) {
                photoRepository.save(photo);
                post.addPhoto(photoRepository.findOne(photo.getId()));
            }
        }

        for (Long categoryId : categoryIds) {
            PostCategory postCategory=PostCategory.createPostCategory(categoryRepository.findOne(categoryId));
            post.addPostCategory(postCategory);
        }

        postRepository.save(post);
        return post.getId();
    }

    public List<Post> findPosts(){
        return postRepository.findAll();
    }

    public Post findOne(Long postId){
        return postRepository.findOne(postId);
    }
}
