//criando a classe funcionário, para poder instanciá-la mais de uma vez
class Funcionario {
  constructor(id, nome, salario) {
    this.id = id
    this.nome = nome
    this.salario = salario
  }
}
//criando a classe folha, para poder instanciá-la mais de uma vez
class Folha {
  constructor(id, nome, salarioPago) {
    this.id = id
    this.nome = nome
    this.salarioPago = salarioPago
  }
}

//criando duas instâncias do objeto funcionario
const TassioFreire = new Funcionario(1, 'Tássio Freire', 1200.35)
const MariaDePaula = new Funcionario(2, 'Maria de Paula', 1250.48)

//criando variáveis para identificar o total dos salarios
var totalSalarios = TassioFreire.salario + MariaDePaula.salario

//criando duas instancias do objeto folha
var FolhaTassio = new Folha(1, 'Tássio Freire', 1260.35)
var FolhaMaria = new Folha(2, 'Maria de Paula', 1250.48)

//calculando o total da Folha, a diferença entre o total da folha e o total dos salarios e a quantidade de salarios errados
var totalFolha = FolhaTassio.salarioPago + FolhaMaria.salarioPago;
var diferencaTotal = totalSalarios- totalFolha;
var salariosErrados = 0;

//comparando as instâncias dos salários base com as instancias da folha
if (FolhaTassio.salarioPago !== TassioFreire.salario) {
  salariosErrados = salariosErrados + 1
  diferencaTassio = TassioFreire.salario - FolhaTassio.salarioPago
  console.log("O salário de Tássio apresenta uma diferença de: R$", diferencaTassio)
}

if (FolhaMaria.salarioPago !== MariaDePaula.salario) {
  salariosErrados = salariosErrados + 1
  diferencaMaria = MariaDePaula.salario - FolhaMaria.salarioPago
  console.log("O salário de Maria de Paula apresenta uma diferença de: R$", diferencaMaria)
}

console.log("Número de salários incompatíveis com a folha: ", salariosErrados)
console.log("A diferença total é de: R$", diferencaTotal)
console.log("A diferença média é de: ", (diferencaTotal / salariosErrados))

