package swproject.yoohoo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import swproject.yoohoo.domain.ResultVO;
import swproject.yoohoo.service.RequestService;

@RestController
@RequiredArgsConstructor
public class RequestController {
    private final RequestService requestService;

    @PostMapping("/requests")
    public ResultVO create(@RequestBody RequestForm form){
        return new ResultVO(201,"거래요청 생성 성공",null);
    }
}
