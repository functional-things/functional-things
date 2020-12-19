"use strict";

const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "..", "dist");
const rootPath = path.join(__dirname, "..");

try
{
    const fileNames = fs.readdirSync(distPath);

    for (const fileName of fileNames)
    {
        fs.renameSync(
            path.join(distPath, fileName),
            path.join(rootPath, fileName));
    }

    fs.rmdirSync(distPath, { maxRetries: 4 });
}
catch (error)
{
    console.error(error.message);
}