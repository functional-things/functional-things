"use strict";

const fs = require("fs").promises;
const path = require("path");

const distPath = path.join(__dirname, "..", "dist");
const rootPath = path.join(__dirname, "..");

const main = async () =>
{
    const fileNames = await fs.readdir(distPath).catch(() => {});

    if (!fileNames) return;

    for (const fileName of fileNames)
    {
        await fs.rename(
            path.join(distPath, fileName),
            path.join(rootPath, fileName));
    }

    await fs.rmdir(distPath, { maxRetries: 4 });
};

main();