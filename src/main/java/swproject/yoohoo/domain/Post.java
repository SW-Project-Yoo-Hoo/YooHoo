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
}
