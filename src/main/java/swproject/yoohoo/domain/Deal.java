package swproject.yoohoo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter @Setter
public class Deal {
    @Id @GeneratedValue
    @JoinColumn(name = "deal_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Member member;

    @Enumerated(EnumType.STRING)
    private DealStatus status; //거래상태 [PRE,IN,POST]

    private LocalDate startDate;
    private LocalDate returnDate;
    private int return_period;
    private int return_quantity;
    private String contact;

    private boolean returnP;
    private boolean returnU;
    private boolean early_returnP;
    private boolean early_returnU;

    //==연관관계 메서드==//
    public void setPost(Post post){
        this.post=post;
        post.getDeals().add(this);
    }
    public void setMember(Member member){
        this.member=member;
        member.getDeals().add(this);
    }

}
