import { Livro } from "./livro";

export interface Emprestimo {
    leitor: string;
    email: string;
    telefone: string;
    status: string;
    livro: Livro;
    dataEmprestimo: Date;
}
