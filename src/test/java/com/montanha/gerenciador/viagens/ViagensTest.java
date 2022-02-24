package com.montanha.gerenciador.viagens;
import io.restassured.http.ContentType;
import org.junit.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class ViagensTest {
    
    @Test
    public void testDadoUmAdministradorQuandoCadastroViagensEntaoObtenhoStatusCode201() {

        //Configurar o caminho comum de acesso a minha API REST

        baseURI = "http://localhost";
        port = 8089;
        basePath = "/api";

        // Login na API Rest com Administrador

        String token = given()
                .body("{\n" +
                        "    \"email\": \"admin@email.com\",\n" +
                        "    \"senha\": \"654321\"\n" +
                        "}")
                .contentType(ContentType.JSON)
            .when()
                .post("/v1/auth")
            .then()
                .log().all()
                .extract()
                    .path("data.token");

        // Cadastrar a viagem
        given()
                .header("Authorization", token)
                .body("{\n" +
                        "  \"acompanhante\": \"Tabta\",\n" +
                        "  \"dataPartida\": \"2022-02-09\",\n" +
                        "  \"dataRetorno\": \"2022-03-09\",\n" +
                        "  \"localDeDestino\": \"Natal\",\n" +
                        "  \"regiao\": \"Nordeste\"\n" +
                        "}")
                .contentType(ContentType.JSON)
        .when()
                .post("/v1/viagens")
        .then()
                .log().all()
                .assertThat()
                .statusCode(201);
    }
}
