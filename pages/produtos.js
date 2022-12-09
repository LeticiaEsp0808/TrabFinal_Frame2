import React from "react";
import axios from "axios";
import Link from "next/link";

function Produtos ({produtos}){
    return (
        <div>
            {produtos.map((produto) => (
             <div>
                <Link href='/produtos/[id]'as={`/produtos/${produtos.id}`}>
                <p>{produto.title}</p>
                </Link>
             </div>
            ))}
        </div>
    )
}

export async function getStaticPaths(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;
    return {
        props: {produtos:data}
    }
}

export default Produtos;