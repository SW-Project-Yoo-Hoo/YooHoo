package swproject.yoohoo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swproject.yoohoo.domain.Deal;
import swproject.yoohoo.domain.Post;
import swproject.yoohoo.domain.Request;
import swproject.yoohoo.repository.DealRepository;
import swproject.yoohoo.repository.RequestRepository;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class DealService {
    private final RequestRepository requestRepository;
    private final DealRepository dealRepository;

    @Transactional
    public void save(Long requestId){

        Request request=requestRepository.findOne(requestId);
        Post post=request.getPost();

        Deal deal=Deal.builder()
                .post(post)
                .request(request)
                .build();

        dealRepository.save(deal);
    }

    public Deal findOne(Long dealId){
        return dealRepository.findOne(dealId);
    }
}
