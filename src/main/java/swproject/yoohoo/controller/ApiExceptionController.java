package swproject.yoohoo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import swproject.yoohoo.domain.ResultVO;
import swproject.yoohoo.exception.UserException;

import java.io.IOException;

@Slf4j
@RestControllerAdvice
public class ApiExceptionController {


    @ResponseStatus(HttpStatus.BAD_REQUEST) //400기본,
    @ExceptionHandler(IllegalArgumentException.class)
    public ResultVO illegalExHandle(IllegalArgumentException e) {
        log.error("[exceptionHandle] ex", e);
        return new ResultVO(400, e.getMessage(),null);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST) //400기본, 메소드를 호출하기 위한 상태가 아닐 때
    @ExceptionHandler(IllegalStateException.class)
    public ResultVO illegalExHandle(IllegalStateException e) {
        log.error("[exceptionHandle] ex", e);
        return new ResultVO(400, e.getMessage(),null);
    }

    @ExceptionHandler
    public ResultVO userExHandle(UserException e) {
        log.error("[exceptionHandle] ex", e);
        return new ResultVO(400, e.getMessage(),null);
    }



    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR) //500기본
    @ExceptionHandler
    public ResultVO exHandle(Exception e) {
        log.error("[exceptionHandle] ex", e);
        return new ResultVO(500, "내부 오류",null);
    }


}
