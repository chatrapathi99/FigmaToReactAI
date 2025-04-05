const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs-extra");
const axios = require("axios");
const simpleGit =require('simple-git');
const git = simpleGit();
const path=require('path');
const app = express();
app.use(cors());
app.use(express.json());

// File Upload Setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Handle File Upload
app.post("/upload", upload.single("file"), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const figmaJson = JSON.parse(req.file.buffer.toString());

    // Convert Figma JSON to JSX
    const generatedCode = figmaToJSX(figmaJson);
    const __dirname = path.resolve();

    // Save JSX to a temporary React project
    const outputDir = `./webapp/src/components`;
    const filePath = path.join(__dirname, "webapp", "src", "components", `GeneratedComponent.jsx`);
    console.log(filePath);
    fs.writeFileSync(filePath, generatedCode, "utf-8");

   // await git.init();
   // await git.add(`/webapp/src/components/GeneratedComponent.jsx`);
    //await git.commit(`Added LoginPage component`);
    //await git.push('origin', 'main'); // or 'master' or your branch
    console.log(`🚀 Pushed LoginPage to GitHub`);
    
    // Deploy React App (Vercel or Netlify)
    const previewUrl = await deployReactApp(outputDir);

    res.json({ code: generatedCode, previewUrl });
});

// Convert Figma JSON to JSX
function figmaToJSX(figmaJson) {
    return `
        import React from "react";
        const LoginPage = () => (
            <div style={{ textAlign: "center", padding: "50px" }}>
                <h1>${figmaJson.children[0].characters}</h1>
                <input type="email" placeholder="${figmaJson.children[1].placeholder}" />
                <input type="password" placeholder="${figmaJson.children[2].placeholder}" />
                <button>${figmaJson.children[3].label}</button>
            </div>
        );
        export default LoginPage;
    `;
}

// Deploy to Netlify or Vercel (Mock)
async function deployReactApp(directory) {
    return "https://your-deployed-preview-link.com";
}

app.listen(5001, () => console.log("Server running on port 5000"));
