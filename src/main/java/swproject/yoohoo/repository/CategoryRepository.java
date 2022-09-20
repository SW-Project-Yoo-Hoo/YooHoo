package swproject.yoohoo.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import swproject.yoohoo.domain.Category;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class CategoryRepository {
    private final EntityManager em;

    public void save(Category category){
        if(category.getId()==null){
            em.persist(category);
        }else{
            em.merge(category);
        }
    }

    public Category findOne(Long id){
        return em.find(Category.class,id);
    }

    public List<Category> findAll(){
        return em.createQuery("select c from Category c",Category.class).getResultList();
    }
}
