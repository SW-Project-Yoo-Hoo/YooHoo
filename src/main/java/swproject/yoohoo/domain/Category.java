package swproject.yoohoo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Category {
    @Id @GeneratedValue
    @Column(name="category_id")
    private Long id;

    @OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
    List<PostCategory> posts=new ArrayList<>();

    private String name;

    //==연관관계 메서드==//
    public void addPost(PostCategory postCategory){
        posts.add(postCategory);
        postCategory.setCategory(this);
    }


}
