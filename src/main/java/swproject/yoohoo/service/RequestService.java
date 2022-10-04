package swproject.yoohoo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swproject.yoohoo.controller.RequestForm;
import swproject.yoohoo.domain.*;
import swproject.yoohoo.repository.AlarmRepository;
import swproject.yoohoo.repository.MemberRepository;
import swproject.yoohoo.repository.PostRepository;
import swproject.yoohoo.repository.RequestRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
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
                        .rental_period(form.getRental_period()).rental_quantity(form.getRental_quantity())
                        .total_price(form.getTotal_price()).build();

        Alarm alarm = new Alarm();
        alarm.setMember(writer);
        alarm.setTitle("거래 요청");
        alarm.setContent("회원님의 게시물에 거래 요청이 들어왔어요. 거래를 수락해주세요!");
        alarm.setAlarmDate(LocalDateTime.now());
        alarmRepository.save(alarm);

        requestRepository.save(request);
    }

    @Transactional
    public void rejectRequest(Long requestId){
        Request request=requestRepository.findOne(requestId);
        request.reject();
    }

    @Transactional
    public void acceptRequest(Long requestId){
        Request request=requestRepository.findOne(requestId);
        request.accept();
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
}
