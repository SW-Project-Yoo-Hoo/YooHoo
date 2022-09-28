package swproject.yoohoo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swproject.yoohoo.domain.Alarm;
import swproject.yoohoo.domain.Member;
import swproject.yoohoo.domain.Request;
import swproject.yoohoo.repository.RequestRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RequestService {
    private final RequestRepository requestRepository;

    @Transactional
    public void save(Request request){
        requestRepository.save(request);
    }

    public List<Request> findAlarms(){
        return requestRepository.findAll();
    }

    public Request findOne(Long requestid){
        return requestRepository.findOne(requestid);
    }

    public List<Request> findbyWriter(Member member){
        return requestRepository.findByRequester(member);
    }

    public List<Request> findbyPostwriter(Member member){
        return requestRepository.findByRequester(member);
    }
}
