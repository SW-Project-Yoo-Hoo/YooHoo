package swproject.yoohoo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import swproject.yoohoo.service.DealService;

@RestController
@RequiredArgsConstructor
public class DealController {
    private final DealService dealService;

}
