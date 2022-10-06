package swproject.yoohoo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swproject.yoohoo.domain.*;
import swproject.yoohoo.repository.DealRepository;
import swproject.yoohoo.repository.MemberRepository;
import swproject.yoohoo.repository.RequestRepository;

import java.util.List;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class DealService {
    private final RequestRepository requestRepository;
    private final MemberRepository memberRepository;
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

    public List<Deal> findMyPreDeal(Long memberId){
        Member member = memberRepository.findOne(memberId);
        DealStatus status=DealStatus.PRE;
        return dealRepository.findByStatus(member,status);
    }

    public List<Deal> findMyInDeal(Long memberId){
        Member member = memberRepository.findOne(memberId);
        DealStatus status=DealStatus.IN;
        return dealRepository.findByStatus(member,status);
    }

    public List<Deal> findMyPostDeal(Long memberId){
        Member member = memberRepository.findOne(memberId);
        DealStatus status=DealStatus.POST;
        return dealRepository.findByStatus(member,status);
    }

}
