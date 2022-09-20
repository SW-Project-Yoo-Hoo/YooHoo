package swproject.yoohoo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import swproject.yoohoo.domain.ResultVO;

import java.io.IOException;

@Slf4j
@RestControllerAdvice
public class ApiExceptionController {

//    @ExceptionHandler
//    public ResponseEntity<ErrorResult> userExHandle(UserException e) {
//        log.error("[exceptionHandle] ex", e);
//        ErrorResult errorResult = new ErrorResult("USER-EX", e.getMessage());
//        return new ResponseEntity<>(errorResult, HttpStatus.BAD_REQUEST);
//    }


    @ResponseStatus(HttpStatus.BAD_REQUEST) //400기본
    @ExceptionHandler(IllegalArgumentException.class)
    public ResultVO illegalExHandle(IllegalArgumentException e) {
        log.error("[exceptionHandle] ex", e);
        return new ResultVO(400, e.getMessage(),null);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST) //400기본
    @ExceptionHandler(IllegalArgumentException.class)
    public ResultVO illegalExHandle(IOException e) {
        log.error("[exceptionHandle] ex", e);
        return new ResultVO(400, e.getMessage(),null);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST) //400기본
    @ExceptionHandler(IllegalStateException.class)
    public ResultVO illegalExHandle(IllegalStateException e) {
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
