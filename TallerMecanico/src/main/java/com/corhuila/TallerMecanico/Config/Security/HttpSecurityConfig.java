package com.corhuila.TallerMecanico.Config.Security;

import com.corhuila.TallerMecanico.Util.Permission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;

@Configuration
@EnableWebSecurity
public class HttpSecurityConfig {

	@Autowired
	private AuthenticationProvider authenticationProvider;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http
				.csrf(csrf -> csrf.disable())
				.sessionManagement(
						sessionMangConfig -> sessionMangConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authenticationProvider(authenticationProvider)
				.httpBasic(Customizer.withDefaults())
				.authorizeHttpRequests(authConfig -> {
					authConfig

							// ACCESO PUBLICO
							.requestMatchers(HttpMethod.POST, "/auth/login").permitAll()

							// ACCESO CON AUTORIZACION
							// VEHICULO
							.requestMatchers(HttpMethod.GET, "/api/vehicle/")
							.hasAuthority(Permission.READ_BY_PLATE_VEHICLES.name())

							.requestMatchers(HttpMethod.GET, "/api/vehicle/placa/{plate}")
							.hasAuthority(Permission.READ_BY_PLATE_VEHICLES.name())

							.requestMatchers(HttpMethod.POST, "/api/vehicle")
							.hasAuthority(Permission.SAVE_ONE_VEHICLE.name())

							.requestMatchers(HttpMethod.PUT, "/api/vehicle/{plate}")
							.hasAuthority(Permission.UPDATE_ONE_VEHICLE.name())

							.requestMatchers(HttpMethod.DELETE, "/api/vehicle/estado/{plate}")
							.hasAuthority(Permission.DELETE_ONE_VEHICLE.name())

							// ORDEN
							.requestMatchers(HttpMethod.POST, "/api/order")
							.hasAuthority(Permission.SAVE_ONE_ORDER.name())

							.requestMatchers(HttpMethod.PUT, "/api/order/{id}")
							.hasAuthority(Permission.UPDATE_ONE_ORDER.name())

							.requestMatchers(HttpMethod.DELETE, "/api/order/{id}")
							.hasAuthority(Permission.DELETE_ONE_ORDER.name())

							// PERSONA
							.requestMatchers(HttpMethod.POST, "/api/person")
							.hasAuthority(Permission.SAVE_ONE_PERSON.name())

							.requestMatchers(HttpMethod.PUT, "/api/person/{id}")
							.hasAuthority(Permission.UPDATE_ONE_PERSON.name())

							.requestMatchers(HttpMethod.DELETE, "/api/person/{id}")
							.hasAuthority(Permission.DELETE_ONE_PERSON.name())

							// SERVICIO
							.requestMatchers(HttpMethod.POST, "/api/service")
							.hasAuthority(Permission.SAVE_ONE_SERVICE.name())

							.requestMatchers(HttpMethod.PUT, "/api/service/{id}")
							.hasAuthority(Permission.UPDATE_ONE_SERVICE.name())

							.requestMatchers(HttpMethod.DELETE, "/api/service/{id}")
							.hasAuthority(Permission.DELETE_ONE_SERVICE.name())

							// INVENTARIO
							.requestMatchers(HttpMethod.POST, "/api/inventory")
							.hasAuthority(Permission.SAVE_ONE_INVENTORY.name())

							.requestMatchers(HttpMethod.PUT, "/api/inventory/{id}")
							.hasAuthority(Permission.UPDATE_ONE_INVENTORY.name())

							.requestMatchers(HttpMethod.DELETE, "/api/inventory/{id}")
							.hasAuthority(Permission.DELETE_ONE_INVENTORY.name())

							// ACCESO THE ALL
							// .anyRequest().permitAll()

							// LAS QUE NO QUEDARON MAPEADAS VAN A QUEDAR SIN ACCESO
							.anyRequest().authenticated();

				});

		return http.build();
	}

}
