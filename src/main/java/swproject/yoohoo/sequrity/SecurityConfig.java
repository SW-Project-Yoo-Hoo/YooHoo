package swproject.yoohoo.sequrity;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //정적 파일에 대한 요청들
    private static final String[] AUTH_WHITELIST={
            "/static/**"
    };

    @Bean
    public BCryptPasswordEncoder encodePassword(){ //회원가입 시 비밀번호 암호화에 사용할 Encoder 빈 등록
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
                //login없이 접근 허용하는 url
                .antMatchers("/member/**").permitAll()
                //'/admin'의 경우 ADMIN권한이 있는 사용자만 접근 가능
                .antMatchers("/admin").hasRole("ADMIN")
                //그 외 모든 요청은 인증과정 필요
                .anyRequest().authenticated();
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(AUTH_WHITELIST);
        //정적 파일요청에 대해 무시
    }

   
}
