import { parse } from "./go-slang-parser/src";
import { GoCompiler } from "./compiler/compiler";
import { Runner } from "./runner/runner";
import { Program } from "./go-slang-parser/src/parser_mapper/ast_types";
import * as programs from "./programs";

// select a program to run
const program = programs.makeArrayStressTest;

const ast = parse(program) as Program;

const compiler = new GoCompiler(ast);

compiler.compile();

const instructions = compiler.getInstrs();

// let i = 0;
// instructions.forEach((instr) => {
//   console.log(i, instr);
//   i++;
// })

const QUANTUM = 22;

// select a runner to run the program
const runner = new Runner(instructions, QUANTUM, 8000, true, true);

runner.run();
