window.wc = new ClientManager("wc", "body", {
    rest: {
        baseUri: "http://51.140.121.29:8080/chathealth/"
    },
    // Temp for testing
    user: {
        name: "mattg",
        password: "ct"
    }
});