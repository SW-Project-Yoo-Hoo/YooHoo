package swproject.yoohoo.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import swproject.yoohoo.domain.Member;
import swproject.yoohoo.domain.Request;
import swproject.yoohoo.domain.RequestStatus;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RequestRepository {
    private final EntityManager em;

    public void save(Request request){
        if(request.getId()==null){
            em.persist(request);
        }else{
            em.merge(request);
        }
    }

    public Request findOne(Long id){
        return em.find(Request.class,id);
    }

    public List<Request> findAll(){
        return em.createQuery("select r from Request r",Request.class).getResultList();
    }

    public List<Request> findByRequester(Member member, RequestStatus status){//요청자
        return em.createQuery("select a from Request a where a.member = :member and a.status=:status",
                        Request.class)
                .setParameter("member",member)
                .setParameter("status",status)
                .getResultList();
    }

    public List<Request> findByProvider(Member member,RequestStatus status){//게시글 작성자
        return em.createQuery("select a from Request a where a.post.member = :member and a.status=:status",
                        Request.class)
                .setParameter("member",member)
                .setParameter("status",status)
                .getResultList();
    }

}
