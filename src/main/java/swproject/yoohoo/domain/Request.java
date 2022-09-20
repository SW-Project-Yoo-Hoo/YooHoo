package swproject.yoohoo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class Request {
    @Id @GeneratedValue
    @Column(name = "request_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private LocalDate startDate;
    private LocalDate returnDate;
    private int rental_period;
    private int rental_quantity;
    private String contact;
    private LocalDateTime requestDate;

    //==연관관계 메서드==//
    public void setPost(Post post){
        this.post=post;
        post.getRequests().add(this);
    }

    public void setMember(Member member){
        this.member=member;
        member.getRequests().add(this);
    }

}
