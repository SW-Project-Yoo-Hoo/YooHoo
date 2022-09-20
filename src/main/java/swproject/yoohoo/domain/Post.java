package swproject.yoohoo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Post {

    @Id @GeneratedValue
    @Column(name="post_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member; //연관관계 주인(외래키 가짐): Post

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<Photo> photos=new ArrayList<>();

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<Request> requests=new ArrayList<>();

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    List<Deal> deals=new ArrayList<>();

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<PostCategory> categories=new ArrayList<>();

    private String title;
    private String rental_unit;
    private int rental_price;
    private int quantity;
    private String explain;
    private LocalDateTime postDate;


    //==연관관계 메서드==//
    public void setMember(Member member){
        this.member=member;
        member.getPosts().add(this);
    }
    public void addPhoto(Photo photo){
        photos.add(photo);
        photo.setPost(this);
    }

    public void addRequest(Request request){
        requests.add(request);
        request.setPost(this);
    }

    public void addDeal(Deal deal){
        deals.add(deal);
        deal.setPost(this);
    }

    public void addPostCategory(PostCategory postCategory){
        categories.add(postCategory);
        postCategory.setPost(this);
    }

    //==생성 메서드==//

    public Post(Member member, String title, String rental_unit, int rental_price, int quantity, String explain) {
        this.member = member;
        this.title = title;
        this.rental_unit = rental_unit;
        this.rental_price = rental_price;
        this.quantity = quantity;
        this.explain = explain;
    }
}
