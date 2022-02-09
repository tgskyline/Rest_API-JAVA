Resquisições utilizadas

Subir a API: mvn spring-boot:run

Documentação Swagger da API: http://localhost:8089/api/swagger-ui.html

Usuários:

User: admin@email.com 
Pass: 654321

User: usuario@email.com
Pass: 123456

TOKEN ADMIN: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImNyZWF0ZWQiOjE2NDQxNzY1OTQ2MTMsImV4cCI6MTY0NDI3NjU5M30.3rTCOjIwGGCi1Hyr930zROFzZUw_3CBPIgBgGxe-jvmND7rR_vpfr9Si1Lken4qQFO07N83Eh3wvRO8GHVSOmA

TOKEN USUARIO: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvQGVtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTVUFSSU8iLCJjcmVhdGVkIjoxNjQ0MTgwNjExNzgzLCJleHAiOjE2NDQyODA2MTB9.q3JuhcEnASb70VMSuJOk5YbcaafxBT3W6IeJrAD43FojLSYBU_dpwHpwECknuBfcFbnkwOuXR7ShiqTc1Wz4TQ

Parametros

-d = Envio de Body, é passado uma string escrita em formato JSON
-H = Envio de Header, o valor do Header é definido depois dos dois pontos ":", nele é usado aspas simples
-s = Retirar o relatórios de tempo

 -- Status Aplication
 
curl -X GET -is http://localhost:8089/api/v1/status

 -- Realizar login

ADMIN
curl -X POST -i http://localhost:8089/api/v1/auth -d '{ "email": "admin@email.com", "senha": "654321" }' -H 'Content-Type: application/json'

USUARIO
curl -X POST -i http://localhost:8089/api/v1/auth -d '{ "email": "usuario@email.com", "senha": "123456" }' -H 'Content-Type: application/json'

 -- Cadastrar uma Viagem

ADMIN
curl -X POST -i http://localhost:8089/api/v1/viagens -d '{ "acompanhante": "Tabta", "dataPartida": "2022-02-10", "dataRetorno": "2022-03-10", "id": 0, "localDeDestino": "Natal", "regiao": "Nordeste"}' -H 'Content-Type: application/json' -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImNyZWF0ZWQiOjE2NDQxNzY1OTQ2MTMsImV4cCI6MTY0NDI3NjU5M30.3rTCOjIwGGCi1Hyr930zROFzZUw_3CBPIgBgGxe-jvmND7rR_vpfr9Si1Lken4qQFO07N83Eh3wvRO8GHVSOmA'

USUARIO
curl -X POST -i http://localhost:8089/api/v1/viagens -d '{ "acompanhante": "Tabta", "dataPartida": "2022-02-10", "dataRetorno": "2022-03-10", "id": 0, "localDeDestino": "Natal", "regiao": "Nordeste"}' -H 'Content-Type: application/json' -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvQGVtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTVUFSSU8iLCJjcmVhdGVkIjoxNjQ0MTgwNjExNzgzLCJleHAiOjE2NDQyODA2MTB9.q3JuhcEnASb70VMSuJOk5YbcaafxBT3W6IeJrAD43FojLSYBU_dpwHpwECknuBfcFbnkwOuXR7ShiqTc1Wz4TQ'

 -- Consultar todas viagens
 
ADMIN 
curl -X GET -is http://localhost:8089/api/v1/viagens -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImNyZWF0ZWQiOjE2NDQxNzY1OTQ2MTMsImV4cCI6MTY0NDI3NjU5M30.3rTCOjIwGGCi1Hyr930zROFzZUw_3CBPIgBgGxe-jvmND7rR_vpfr9Si1Lken4qQFO07N83Eh3wvRO8GHVSOmA'
 
USUARIO
curl -X GET -is http://localhost:8089/api/v1/viagens -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvQGVtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTVUFSSU8iLCJjcmVhdGVkIjoxNjQ0MTgwNjExNzgzLCJleHAiOjE2NDQyODA2MTB9.q3JuhcEnASb70VMSuJOk5YbcaafxBT3W6IeJrAD43FojLSYBU_dpwHpwECknuBfcFbnkwOuXR7ShiqTc1Wz4TQ'

response
{"data":[{"id":1,"localDeDestino":"Natal","dataPartida":"2022-02-10","dataRetorno":"2022-03-10","acompanhante":"Tabta","regiao":"Nordeste"}],"errors":[]}

> Envio de parametro como QUERY no caso ela é inserida após o EndPoint da seguinte forma [?regiao=]
curl -X GET -is http://localhost:8089/api/v1/viagens?regiao=Nordeste -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvQGVtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTVUFSSU8iLCJjcmVhdGVkIjoxNjQ0MTgwNjExNzgzLCJleHAiOjE2NDQyODA2MTB9.q3JuhcEnASb70VMSuJOk5YbcaafxBT3W6IeJrAD43FojLSYBU_dpwHpwECknuBfcFbnkwOuXR7ShiqTc1Wz4TQ'

 -- Consultar Viagem Especifica
 
USUARIO
curl -X GET -is http://localhost:8089/api/v1/viagens/1 -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvQGVtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTVUFSSU8iLCJjcmVhdGVkIjoxNjQ0MTgwNjExNzgzLCJleHAiOjE2NDQyODA2MTB9.q3JuhcEnASb70VMSuJOk5YbcaafxBT3W6IeJrAD43FojLSYBU_dpwHpwECknuBfcFbnkwOuXR7ShiqTc1Wz4TQ'
 
curl -X GET -i http://localhost:8089/api/v1/viagens/1 -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvQGVtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTVUFSSU8iLCJjcmVhdGVkIjoxNjQ0MTgwNjExNzgzLCJleHAiOjE2NDQyODA2MTB9.q3JuhcEnASb70VMSuJOk5YbcaafxBT3W6IeJrAD43FojLSYBU_dpwHpwECknuBfcFbnkwOuXR7ShiqTc1Wz4TQ'