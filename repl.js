// import path from "path";
import { fs } from "memfs";
import path from "path";
console.log(path.isAbsolute("worker:/workspaces/bundle/repl.js"))
console.log(path.join("js", "worker:/workspaces/bundle/repl.js"))
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// import resolve from "resolve";
// console.log(require.resolve('memfs'));
// console.log(/([\S]+)@([\S]+)/g.test("@react@latest"));
// console.log(/([\S]+)@([\S]+)/g.exec("@react@latest"));
// require
// console.log(
//     resolve("/", { basedir: "https://unpkg.com/@babel/core@7.14.3/lib/" }, function (err, res) {
//         if (err) console.error(err);
//         else console.log(res);
//     })
// );
