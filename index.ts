const server=Bun.serve({
    fetch(req) {
        // if (req.url === "/test") {
        //     return {
        //         status: 200,
        //         headers: {"Content-Type": "text/html"},
        //         body: `<h1>Welcome to my website!</h1>`
        //         };
        //         }
        //         else{
        //             return {
        //                 status: 404,
        //                 headers: {"Content-Type": "text/plain"},
        //                 body: "Not Found"
        //                 };
        //                 }
        return new Response("hello world bun project")
             }
      });
                        console.log(`Server is running on http://localhost:3000`);
                       // server.listen(3000);