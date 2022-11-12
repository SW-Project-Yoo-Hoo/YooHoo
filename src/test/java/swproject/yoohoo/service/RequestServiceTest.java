package swproject.yoohoo.service;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import swproject.yoohoo.domain.Post;
import swproject.yoohoo.domain.Request;
import swproject.yoohoo.repository.RequestRepository;

import javax.persistence.EntityManager;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class RequestServiceTest {
    @Autowired RequestService requestService;
    @Autowired EntityManager em;

    @Test
    void recommendRequests() {
        Post post=em.find(Post.class,33L);
        LocalDate s=LocalDate.parse("2022-11-01", DateTimeFormatter.ISO_DATE);
        LocalDate e=LocalDate.parse("2023-03-08", DateTimeFormatter.ISO_DATE);


//        List<Request> recommended=requestService.recommendRequests(post,s,e);
//        for (Request request : recommended) {
//            System.out.println("추천: "+request);
//        }
    }
}