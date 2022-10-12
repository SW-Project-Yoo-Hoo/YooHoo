package swproject.yoohoo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swproject.yoohoo.domain.*;
import swproject.yoohoo.repository.AlarmRepository;
import swproject.yoohoo.repository.DealRepository;
import swproject.yoohoo.repository.MemberRepository;
import swproject.yoohoo.repository.RequestRepository;

import java.time.LocalDate;
import java.util.List;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
@EnableAsync
public class DealService {
    private final RequestRepository requestRepository;
    private final MemberRepository memberRepository;
    private final DealRepository dealRepository;
    private final AlarmRepository alarmRepository;

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

    @Transactional
    public void agree(Long DealId,Long loginId) {
        Deal deal = dealRepository.findOne(DealId);
        Member user=deal.getMember();
        Member provider=deal.getPost().getMember();

        String alarmContent="거래가 완료되었습니다! ("+deal.getStartDate().toString()+" - "+ LocalDate.now().toString()+")";

        if(deal.getMember().getId()==loginId){//요청자가 동의
            deal.agreeU();
            if(deal.isReturnP()){//거래완료
                dealComplete(deal, user, provider, alarmContent);
            }
            else{
                if(deal.getReturnDate().isAfter(LocalDate.now())) preRequestAlarm(deal, provider);
                else RequestAlarm(deal, provider);
            }
        }
        else{//제공자가 동의
            deal.agreeP();
            if(deal.isReturnU()) dealComplete(deal,provider,user,alarmContent);
            else{
                if(deal.getReturnDate().isAfter(LocalDate.now())) preRequestAlarm(deal, user);
                else RequestAlarm(deal,user);
            }
        }

    }

    private void RequestAlarm(Deal deal, Member provider) {
        Alarm alarm=Alarm.builder()
                .member(provider)
                .title("반납 요청")
                .content("반납 요청이 들어왔어요. 반납 버튼을 눌러주세요!")
                .photo_dir(deal.getPost().getPhotos().get(0).getFilePath())
                .build();
        alarmRepository.save(alarm);
    }

    private void preRequestAlarm(Deal deal, Member provider) {
        Alarm alarm=Alarm.builder()
                .member(provider)
                .title("조기 반납 요청")
                .content("조기 반납 요청이 들어왔어요. 수락 하시겠습니까?")
                .photo_dir(deal.getPost().getPhotos().get(0).getFilePath())
                .build();
        alarmRepository.save(alarm);
    }

    private void dealComplete(Deal deal, Member user, Member provider, String alarmContent) {
        deal.setStatus(DealStatus.POST);
        DealCompleteAlarm(deal, user, provider, alarmContent);
    }

    private void DealCompleteAlarm(Deal deal, Member user, Member provider, String alarmContent) {
        Alarm alarm1=Alarm.builder()
                .member(user)
                .title("거래 완료")
                .content(alarmContent)
                .photo_dir(deal.getPost().getPhotos().get(0).getFilePath())
                .build();
        alarmRepository.save(alarm1);
        Alarm alarm2=Alarm.builder()
                .member(provider)
                .title("거래 완료")
                .content(alarmContent)
                .photo_dir(deal.getPost().getPhotos().get(0).getFilePath())
                .build();
        alarmRepository.save(alarm2);
    }

    public Deal findOne(Long dealId){
        return dealRepository.findOne(dealId);
    }

    public List<Deal> findMyPreDeal(Long memberId){
        Member member = memberRepository.findOne(memberId);
        DealStatus status=DealStatus.PRE;
        return dealRepository.findByMemberStatus(member,status);
    }

    public List<Deal> findMyInDeal(Long memberId){
        Member member = memberRepository.findOne(memberId);
        DealStatus status=DealStatus.IN;
        return dealRepository.findByMemberStatus(member,status);
    }

    public List<Deal> findMyPostDeal(Long memberId){
        Member member = memberRepository.findOne(memberId);
        DealStatus status=DealStatus.POST;
        return dealRepository.findByMemberStatus(member,status);
    }


    @Transactional
    public void PREtoIN(){
        log.info("스케줄링 서비스 실행");

        LocalDate now = LocalDate.now();
        List<Deal> deals = dealRepository.findByStatus(DealStatus.PRE,now);

        for (Deal deal : deals) {
            deal.startDeal();
            Post post=deal.getPost();

            Alarm alarm1=Alarm.builder()
                    .member(deal.getMember())
                    .title("거래 시작")
                    .content("거래가 시작되었어요.")
                    .photo_dir(post.getPhotos().get(0).getFilePath())
                    .build();
            alarmRepository.save(alarm1);
            Alarm alarm2=Alarm.builder()
                    .member(post.getMember())
                    .title("거래 시작")
                    .content("거래가 시작되었어요.")
                    .photo_dir(post.getPhotos().get(0).getFilePath())
                    .build();
            alarmRepository.save(alarm2);
        }

        log.info("스케줄링 서비스 실행 끝");
    }



}
