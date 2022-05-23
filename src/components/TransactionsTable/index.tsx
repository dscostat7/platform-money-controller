import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Trasaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Trasaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>
            </table>
        </Container>
    );
}