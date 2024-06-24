serve({
    fetch(req) {
      // something like this:
      return new Response('Hello world!');
    }
  })
                        console.log(`Server is running on http://localhost:3000`);
                       // server.listen(3000);