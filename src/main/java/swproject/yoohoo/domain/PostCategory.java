package swproject.yoohoo.domain;

import javax.persistence.*;

@Entity
@Table(name="post_category")
public class PostCategory {

    @Id @GeneratedValue
    @Column(name = "post_category_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;


}
