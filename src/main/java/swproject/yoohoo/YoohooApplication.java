package swproject.yoohoo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class YoohooApplication {

	public static void main(String[] args) {
		SpringApplication.run(YoohooApplication.class, args);
	}

}
