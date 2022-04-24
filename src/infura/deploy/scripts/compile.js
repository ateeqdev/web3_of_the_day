const fs = require("fs").promises;
const path = require("path");
const solc = require("solc");

async function main() {
  const sourceCode = await fs.readFile(
    path.join(__dirname, '..', 'contracts/VerifySignature.sol'),
    "utf8"
  );
  const { abi, bytecode } = compile(sourceCode, "VerifySignature");

  const artifact = JSON.stringify({ abi, bytecode }, null, 2);
  await fs.writeFile(path.join(__dirname, '..', 'contracts/artifacts/VerifySignature.json'), artifact);
}

function compile(sourceCode, contractName) {
  const input = {
    language: 'Solidity',
    sources: { main: { content: sourceCode } },
    settings: { outputSelection: { '*': { '*': ['abi', 'evm.bytecode'] } } },
  };

  const output = solc.compile(JSON.stringify(input));
  const artifact = JSON.parse(output).contracts.main[contractName];
  return {
    abi: artifact.abi,
    bytecode: artifact.evm.bytecode.object,
  };
}

main().then(() => {
  process.exit(0);
});
