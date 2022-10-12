package swproject.yoohoo.scheduler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import swproject.yoohoo.service.DealService;

@Component
@EnableAsync
@Slf4j
@RequiredArgsConstructor
public class Schedule {
    private final DealService dealService;

//    @Scheduled(cron = "0 27 10 * * *")
//    @Scheduled(fixedDelay = 3000)
//    @Scheduled(cron = "0 0 0 * * *") //매일 0시에 실행
    @Scheduled(fixedDelay = 10000)
    public void scheduleDeal(){
        long now = System.currentTimeMillis() / 1000;
        log.info("schedule tasks using cron jobs - {}", now);

        dealService.PREtoIN();
    }
}
