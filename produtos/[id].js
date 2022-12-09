import axios from "axios";

function Profile({produto = {}}){
    return(
        <div>
            <p>{produto.title}</p>
            <p>{produto.price}</p>
            <p>{produto.category}</p>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get (
        'https://fakestoreapi.com/products' + context.params.id
    );
    const produto = await response.data;
    return{
        props: {produto}
    }
}

export async function getStaticPaths() {
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const produto = await response.data;
    const paths = produtos.map((produto) => {
        return {params:{id:String(user.id)}};
    })
    return {
        paths,
        fallback: true
    };
}
export default Profile;