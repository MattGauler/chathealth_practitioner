window.wc = new ClientManager("wc", "body", {
    rest: {
        baseUri: "http://51.140.121.29:8580/chathealth/practitioner/"
    },
    // Temp for testing
    user: {
        name: "mattg",
        password: "ct"
    }
});