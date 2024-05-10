package com.corhuila.TallerMecanico;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TallerMecanicoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TallerMecanicoApplication.class, args);
	}

	// CREACION DE CONTRASENAS ENCRIPTADAS
	// @Autowired
	// private PasswordEncoder passwordEncoder;
	//
	// @Bean
	// public CommandLineRunner createPasswordCommand() {
	//
	// return args -> {
	// System.out.println(passwordEncoder.encode("hola123"));
	// System.out.println(passwordEncoder.encode("hola456"));
	// };
	// }

}
