//criando o objeto funcionário, para poder instanciá-lo mais de uma vez
class Funcionario {
  constructor(id, nome, salario) {
    ;(this.id = id), (this.nome = nome), (this.salario = salario)
  }
}
//criando duas instâncias do objeto funcionario
const TassioFreire = new Funcionario(1, 'Tássio Freire', 1200.35)
const MariaDePaula = new Funcionario(2, 'Maria de Paula', 1250.48)

totalSalarios = TassioFreire.salario + MariaDePaula.salario
console.log(TassioFreire)

function conferirFolha(id, nome, salario_pago) {
  if (id == TassioFreire.id) nome == TassioFreire.nome
  {
    diferenca = TassioFreire.salario - salario_pago
    if (diferenca == 0) {
      console.log('Salario correto')
    } else {
      console.log('Salario incorreto. Diferença de R$', diferenca)
    }
  }

  if (id == MariaDePaula.id) nome == MariaDePaula.nome
  {
    diferenca = MariaDePaula.salario - salario_pago
    if (diferenca == 0) {
      console.log('Salario correto')
    } else {
      console.log('Salario incorreto. Diferença de R$', diferenca)
    }
  }
}

tassioMes08 = conferirFolha(1, 'Tassio Freire', 1260.6) //Salario incorreto, diferença de R$60.25
mariadpMes08 = conferirFolha(2, 'Maria de Paula', 1250.48)

totalPagos = tassioMes08.salario_pago + mariadpMes08.salario_pago
console.log('Total de diferenças: R$', totalPagos - totalSalarios)
