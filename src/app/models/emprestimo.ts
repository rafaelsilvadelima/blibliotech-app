import { Livro } from "./livro";

export interface Emprestimo {
    id?: string
    leitor: string;
    email: string;
    telefone: string;
    status: string;
    livro: Livro;
    dataEmprestimo: string;
}
