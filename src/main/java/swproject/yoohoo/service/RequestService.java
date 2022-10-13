package swproject.yoohoo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swproject.yoohoo.controller.RequestForm;
import swproject.yoohoo.domain.*;
import swproject.yoohoo.repository.AlarmRepository;
import swproject.yoohoo.repository.MemberRepository;
import swproject.yoohoo.repository.PostRepository;
import swproject.yoohoo.repository.RequestRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@EnableAsync
@Slf4j
public class RequestService {
    private final RequestRepository requestRepository;
    private final MemberRepository memberRepository;
    private final PostRepository postRepository;
    private final AlarmRepository alarmRepository;

    @Transactional
    public void save(Long memberId, RequestForm form){
        Member member= memberRepository.findOne(memberId);
        Post post=postRepository.findOne(form.getPost_id());
        Member writer=post.getMember();
        if(writer.getId()==memberId){
            throw  new IllegalArgumentException("자신의 게시물에 요청할 수 없습니다.");
        }

        Request request = Request.builder()
                        .member(member).post(post)
                        .startDate(form.getStartDate()).returnDate(form.getReturnDate())
                        .rental_quantity(form.getRental_quantity())
                        .total_price(form.getTotal_price()).build();
        requestRepository.save(request);

        Alarm alarm = Alarm.builder()
                .member(writer)
                .title("거래 요청")
                .content("회원님의 게시물에 거래 요청이 들어왔어요. 거래를 수락해주세요!")
                .photo_dir(post.getPhotos().get(0).getFilePath()).build();
        alarmRepository.save(alarm);
    }

    @Transactional
    public void cancelRequest(Long requestId,Long loginId){
        Request request=requestRepository.findOne(requestId);
        Post post=request.getPost();//
        Member member=request.getMember();//요청자
        if(member.getId()==loginId){//요청자가 취소
            request.cancel();
        }
        else {//받은사람이 취소
            request.reject();

            Alarm alarm = Alarm.builder()
                    .member(member)
                    .title("거래 취소")
                    .content("거래가 취소 되었어요. 재요청을 하시겠습니까?")
                    .photo_dir(post.getPhotos().get(0).getFilePath()).build();
            alarmRepository.save(alarm);
        }
    }

    @Transactional
    public void acceptRequest(Long requestId){
        Request request=requestRepository.findOne(requestId);
        Post post=request.getPost();
        Member member=request.getMember();
        request.accept();

        Alarm alarm = Alarm.builder()
                .member(member)
                .title("거래 요청")
                .content("회원님이 요청이 수락되었습니다.")
                .photo_dir(post.getPhotos().get(0).getFilePath()).build();
        alarmRepository.save(alarm);
    }

    public List<Request> findRequests(){
        return requestRepository.findAll();
    }

    public Request findOne(Long requestid){
        return requestRepository.findOne(requestid);
    }

    public List<Request> findbyWriter(Long memberId){
        Member member= memberRepository.findOne(memberId);
        RequestStatus status=RequestStatus.REQUEST;
        return requestRepository.findByRequester(member,status);
    }

    public List<Request> findbyPostwriter(Long memberId){
        Member member= memberRepository.findOne(memberId);
        RequestStatus status=RequestStatus.REQUEST;
        return requestRepository.findByProvider(member,status);
    }

    @Transactional
    public void deleteOVERTIMERequest(){
        log.info("기간지난 삭제 시작");
        LocalDate now = LocalDate.now();
        requestRepository.deleteByStatusStartBeforeDate(RequestStatus.REQUEST, now);//요청 중이고 시작날짜 지난 요청 삭제

        log.info("기간지난 삭제 끝");
    }

    @Transactional
    public void deleteDELETERequest(){
        log.info("취소된 요청 삭제 시작");
        requestRepository.deleteByStatus(RequestStatus.DELETED); //요청취소해서 DELETE인 요청 삭제
        log.info("취소된 요청 삭제 끝");
    }
}
