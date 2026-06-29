const express = require("express");

const app = express();
const PORT = 3000;

const users = [
    {
        username: "Aiiin jummma",
        displayName: "<color=blue>IBPッ<#52b6f7>[W]"
    },
    {
        username: "mz:mkz",
        displayName: "<color=blue>Mkzzgg9<#e8ff00><sup>PRO"
    },
    {
        username: "-jprimee",
        displayName: "<color=blue>Primewqz<#e8ff00><sup>PRO"
    },
    {
        username: "Player frh8M_pDg8",
        displayName: "<#ffffff>=zRaiin7 gstz<sup><#ffed00>DEV"
    },
    {
        username: "PulsePlayer-1540D",
        displayName: "<#125bb4>IBP<#52b6f7>[W]<#e8ff00><sup>Dev"
    }
];

app.get("/username/:name", (req, res) => {
    const user = users.find(u => u.username === req.params.name);

    if (user) {
        res.json(user);
    } else {
        res.json({
            username: req.params.name,
            displayName: req.params.name
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
