class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    // Métodos para 'estado'
    getEstado() { return this.estado; }
    getEstadoMaiusculo() { return this.estado.toUpperCase(); }
    getEstadoMinusculo() { return this.estado.toLowerCase(); }

    // Métodos para 'cidade'
    getCidade() { return this.cidade; }
    getCidadeMaiusculo() { return this.cidade.toUpperCase(); }
    getCidadeMinusculo() { return this.cidade.toLowerCase(); }

    // Métodos para 'rua'
    getRua() { return this.rua; }
    getRuaMaiusculo() { return this.rua.toUpperCase(); }
    getRuaMinusculo() { return this.rua.toLowerCase(); }
    
    // Métodos para 'numero' (convertido para string para os métodos de case)
    getNumero() { return this.numero; }
    getNumeroMaiusculo() { return String(this.numero).toUpperCase(); }
    getNumeroMinusculo() { return String(this.numero).toLowerCase(); }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    // Métodos para 'ddd'
    getDdd() { return this.ddd; }
    getDddMaiusculo() { return String(this.ddd).toUpperCase(); }
    getDddMinusculo() { return String(this.ddd).toLowerCase(); }

    // Métodos para 'numero'
    getNumero() { return this.numero; }
    getNumeroMaiusculo() { return String(this.numero).toUpperCase(); }
    getNumeroMinusculo() { return String(this.numero).toLowerCase(); }
}

class Cliente {
    #cpf; // Atributo privado

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    // Método de acesso get para o atributo privado 'cpf'
    getCPF() {
        return this.#cpf;
    }

    // Métodos para 'nome'
    getNome() { return this.nome; }
    getNomeMaiusculo() { return this.nome.toUpperCase(); }
    getNomeMinusculo() { return this.nome.toLowerCase(); }
    
    // Métodos para 'endereco'
    getEndereco() { return this.endereco; }
}

class Empresa {
    #cnpj; // Atributo privado

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    // Método de acesso get para o atributo privado 'cnpj'
    getCNPJ() {
        return this.#cnpj;
    }
    
    // Métodos para 'razaoSocial'
    getRazaoSocial() { return this.razaoSocial; }
    getRazaoSocialMaiusculo() { return this.razaoSocial.toUpperCase(); }
    getRazaoSocialMinusculo() { return this.razaoSocial.toLowerCase(); }

    // Métodos para 'nomeFantasia'
    getNomeFantasia() { return this.nomeFantasia; }
    getNomeFantasiaMaiusculo() { return this.nomeFantasia.toUpperCase(); }
    getNomeFantasiaMinusculo() { return this.nomeFantasia.toLowerCase(); }
    
    // Métodos para 'endereco'
    getEndereco() { return this.endereco; }

    detalhe() {
        let descricao = `Razão Social: ${this.getRazaoSocialMaiusculo()}\n`;
        descricao += `Nome fantasia: ${this.getNomeFantasia()}\n`;
        descricao += `CNPJ: ${this.getCNPJ()}\n\n`;
        descricao += `--- Clientes ---\n`;

        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.getNome()}\n`;
            const end = cliente.getEndereco();
            descricao += `Estado: ${end.getEstado()} cidade: ${end.getCidade()} rua: ${end.getRua()} numero: ${end.getNumero()}\n`;
            
            cliente.telefones.forEach(tel => {
                descricao += `ddd: ${tel.getDdd()} numero: ${tel.getNumero()}\n`;
            });
            descricao += `\n`;
        });

        return descricao;
    }
}

// 1. Crie uma empresa e atribua a ela um endereço e pelo menos dois telefones.
const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Av. Faria Lima', 1500);
const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-99', enderecoEmpresa);
empresa.telefones.add(new Telefone('11', '3333-4444'));
empresa.telefones.add(new Telefone('11', '3333-5555'));

// 2. Crie cinco clientes, cada um com seu endereço e dois telefones.
const clientesParaAdicionar = [
    { nome: 'João', cpf: '111.111.111-11', end: new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 987), tels: [new Telefone('12', '99999-9999'), new Telefone('12', '99999-9998')] },
    { nome: 'Gabriel', cpf: '222.222.222-22', end: new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 412), tels: [new Telefone('12', '88888-8888'), new Telefone('12', '88888-8887')] },
    { nome: 'Barbara', cpf: '333.333.333-33', end: new Endereco('SP', 'São José dos Campos', 'Av São João', 789), tels: [new Telefone('12', '77777-7777'), new Telefone('12', '77777-7776')] },
    { nome: 'Márcia', cpf: '444.444.444-44', end: new Endereco('SP', 'São José dos Campos', 'Av Andromeda', 452), tels: [new Telefone('12', '66666-6666'), new Telefone('12', '66666-6665')] },
    { nome: 'Carlos', cpf: '555.555.555-55', end: new Endereco('SP', 'Jacareí', 'Rua Principal', 100), tels: [new Telefone('12', '55555-5555'), new Telefone('12', '55555-5554')] }
];

// 3. Coloque os clientes dentro do conjunto de clientes da empresa.
clientesParaAdicionar.forEach(c => {
    const novoCliente = new Cliente(c.nome, c.cpf, c.end);
    c.tels.forEach(tel => novoCliente.telefones.add(tel));
    empresa.clientes.add(novoCliente);
});

console.log(empresa.detalhe());