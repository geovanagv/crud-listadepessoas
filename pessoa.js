let pessoas = [];

const adicionarPessoa = (pessoa) => {
  pessoas.push(pessoa);
};

const getPessoas = () => {
  return pessoas;
};

const getPessoaById = (id) => {
  return pessoas.find(pessoa => pessoa.id === id);
};

const atualizarPessoa = (id, novaPessoa) => {
  pessoas = pessoas.map(pessoa => {
    if (pessoa.id === id) {
      return { ...pessoa, ...novaPessoa };
    }
    return pessoa;
  });
};

const removerPessoa = (id) => {
  pessoas = pessoas.filter(pessoa => pessoa.id !== id);
};

module.exports = {
  adicionarPessoa,
  getPessoas,
  getPessoaById,
  atualizarPessoa,
  removerPessoa
};
