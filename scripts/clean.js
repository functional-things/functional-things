"use strict";

const fs = require('fs').promises;
const path = require('path');

const main = async () =>
{
    const fileNames = await fs.readdir(path.join(__dirname, ".."));

    for (const fileName of fileNames)
    {
        if (fileName.match(/\.(js(\.map)?|d\.ts|tsbuildinfo)$/))
            await fs.rm(path.join(__dirname, "..", fileName));
        
        else if (fileName.match(/^dist$/))
        {
            await fs.rmdir(
                path.join(__dirname, "..", fileName),
                {
                    recursive: true,
                });
        }
    }
}

try
{
    main();
}
catch (error)
{
    console.error(error.message)
}