const root = {
    method: "GET",
    path: "/",
    handler: (request, reply) => ({
      version: "0.0.1",
      title: "Bullet"
    })
  };
  
  export default root;