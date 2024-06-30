import H1 from "@/components/h1";


type PostPageProps ={
    params:{id:string}
}

const PostPageId = async ({params}:PostPageProps) =>{
   
    

const id = params.id


    return(<main className="flex flex-col items-center"><H1>
      Create a post
        </H1>
    <p>{id}</p>
        </main>)
}
export default PostPageId