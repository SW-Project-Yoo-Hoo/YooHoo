package swproject.yoohoo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Role;
import swproject.yoohoo.controller.MemberForm;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {
    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String email;

    private String password;

    private String company;

    private String address;

    private String contact;

    private String photo_dir;

    @OneToMany(mappedBy = "member",cascade = CascadeType.ALL)
    List<Post> posts=new ArrayList<>();

    @OneToMany(mappedBy = "member",cascade = CascadeType.ALL)
    List<Request> requests=new ArrayList<>();

    @OneToMany(mappedBy = "member",cascade = CascadeType.ALL)
    List<Deal> deals=new ArrayList<>();

    @OneToMany(mappedBy = "member",cascade = CascadeType.ALL)
    List<Alarm> alarms=new ArrayList<>();

    //==비즈니스 로직==//
    /** 회원 수정 **/
    public void edit(MemberForm form){
        this.setEmail(form.getEmail());
        this.setPassword(form.getPassword());
        this.setCompany(form.getCompany());
        this.setAddress(form.getAddress());
        this.setContact(form.getContact());
    }

}
