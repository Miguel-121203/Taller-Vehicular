package com.corhuila.TallerMecanico.Service;

import com.corhuila.TallerMecanico.Dto.AuthenticationRequest;
import com.corhuila.TallerMecanico.Dto.AuthenticationResponse;
import com.corhuila.TallerMecanico.Entity.User;
import com.corhuila.TallerMecanico.IRepository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    public AuthenticationResponse login(AuthenticationRequest authRequest) {

        UsernamePasswordAuthenticationToken authToken= new UsernamePasswordAuthenticationToken(
                authRequest.getUsername(), authRequest.getPassword() );
        authenticationManager.authenticate(authToken);

        User user = userRepository.findByUsername(authRequest.getUsername()).get();

       String jwt =jwtService.generateToken(user, gemerateExtraClaims(user));

       return new AuthenticationResponse(jwt);

    }

    private Map<String, Object> gemerateExtraClaims(User user) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("name", user.getName());
        extraClaims.put("rol",user.getRol().name());
        extraClaims.put("permissions", user.getAuthorities());

        return extraClaims;
    }
}
