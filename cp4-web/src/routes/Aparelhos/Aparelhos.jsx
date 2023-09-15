import { Link } from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos.js"

export default function Aparelhos(){
    return(
        <main>
            <h1>Aparelhos</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/aparelhos/visualizar/:id/${prod.id}`}>
                        ID do Produto: {prod.produto} 
                    </Link>
                    <Link to={`/aparelhos/visualizar/:id/${prod.id}`}>
                        Produto: {prod.produto} 
                    </Link>
                    <Link to={`/aparelhos/visualizar/:id/${prod.id}`}>
                        Preço: {prod.preco} 
                    </Link>
                    <Link to={`/aparelhos/visualizar/:id/${prod.id}`}>
                        Descrição: {prod.desc} 
                    </Link>

                </div>
            ))}
        </main>
    )
}