import figlet from "figlet";

const server=Bun.serve({
    port:3000,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
        const body=figlet.textSync("Thaw Zin Aung")
        return new Response(body)
    }
    if(url.pathname==="/about"){
        return new Response("about me !")
    }
    if(url.pathname==="/contact"){
        return new Response("contact me !")
    }
    //handle Error
    if(url.pathname==="/feed"){
        return new Error("Could Not Fetch feed")
    }
    if (url.pathname==="/greet"){
        return new Response(Bun.file('./greet.txt'))
    }
    return new Response("Not Found", { status: 404 });
    },
    error (error){
        return new Response('<pre> ${error} \n ${error.stack} </pre>',{
            status:500,
            headers:{
                "Content-Type": "text/html"
                }
        })
    }
})                
console.log(`Server is running on http://localhost:${server.port}`);
                       // server.listen(3000);