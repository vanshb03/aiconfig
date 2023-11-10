// Use commander or whatever to start CLI
// Make it use dev mode for devserver, make it use built next app for regular usage
// aiconfig devserver
// aiconfig server

// Should be only two commands for now, then most of the work is going to be in the next app & packaging it up properly as a correct CLI / putting stuff into the regular npm package as well

import { program } from "commander";
import { spawn } from "child_process";
import path from "path";

program
  .name("aiconfig")
  .description("CLI utilities for aiconfig including local editor")
  .version("0.1.0");

program
  .command("devserver")
  .option("--directory <directory>")
  .option("-p, --port <port>", "Server port", "3000")
  .option("--plugins <directory>")
  .action((options) => {
    let port = 3000;
    if (options.port) {
      port = parseInt(options.port, 10);
    }

    if (options.directory) {
      // TODO: Get the right directory to run from - aiconfig server itself needs access to the directory too
    } else {
      spawn("yarn", ["dev", "-p", `${port}`], {
        cwd: path.join(process.cwd(), "./aiconfig-editor"),
        stdio: "inherit",
      });
    }
  });

program
  .command("server")
  .option("-p, --port <port>", "Server port", "3000")
  .option("--plugins <directory>")
  .action((options) => {
    let port = 3000;
    if (options.port) {
      port = parseInt(options.port, 10);
    }

    // Use npm run start to start production server - this should work if they have to install the package from npm, if not, then will need to package node & stuff too
    if (options.directory) {
      // TODO: Get the right directory to run from - aiconfig server itself needs access to the directory too
    } else {
      spawn("yarn", ["start", "-p", `${port}`], {
        cwd: path.join(process.cwd(), "./aiconfig-editor"),
        stdio: "inherit",
      });
    }
  });

program.parse();

// const options = program.opts();
