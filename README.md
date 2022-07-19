# O problema da folha
O processo de construção de uma folha salarial é, por vezes, muito complexo e algumas empresas podem acabar preferindo utilizar serviços de empresas especializadas. Isso, entretanto, não é garantia de que a folha será construída com corretude, e uma boa prática acaba sendo fazer a conferência entre os valores enviados pela empresa especializada e aqueles que deveriam ser os valores de fato.
Os dois conjuntos de dados têm o mesmo formato: um id (único), nome e o valor do salário em si. E, portanto, poderiam ser armazenados em um banco de dados - ainda que em tabelas distintas - da seguinte forma:
| id |      Nome       | Salário |
|----|-----------------|---------|
| 1  |  Tássio Freire  | 1200,35 |
| 2  | Marina de Paula | 1250,48 | 

Sua tarefa é escrever uma função que, dado um conjunto de dados de referência (ou seja, com os valores corretos) e um outro conjunto com os dados enviados pela empresa especializada, entregue um relatório que contenha:
Indicação de quais colaboradores estão com o salário errado e de quanto é essa diferença;
Qual a diferença entre o valor total da folha de referência e o valor da folha que foi enviada pela empresa especializada;
A diferença média entre os valores da folha de referência e os valores da folha enviada pela empresa especializada.
