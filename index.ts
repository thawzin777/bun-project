const server=Bun.serve({
    port:3000,
    fetch(req) {
        return new Response("hello world bun project beginner")
    }
})                
console.log(`Server is running on http://localhost:${server.port}`);
                       // server.listen(3000);