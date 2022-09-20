package swproject.yoohoo.controller;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter @Setter
public class PostForm {
    private String title;
    private String rental_unit;
    private int rental_price;
    private int quantity;
    private String explain;
    private List<MultipartFile> photos;
    private List<Long> categories;
}
