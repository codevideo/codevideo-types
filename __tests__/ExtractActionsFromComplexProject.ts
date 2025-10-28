import { extractActionsFromProject } from '../src/extractors/extractActionsFromProject';
import { ILesson } from '../src/interfaces/toplevel/ILesson';

describe('extractActionsFromComplexProject', () => {

    // Test data
    const mockLesson: ILesson = {
    "id": "invoice-mcp-lesson",
    "name": "Building an Invoice Generator MCP Server with TypeScript",
    "description": "Learn how to create a TypeScript MCP server that wraps the maaslalani/invoice CLI tool, complete with schema validation and comprehensive testing",
    "actions": [
        {
            "name": "author-speak-before",
            "value": "Welcome to this comprehensive lesson on building an Invoice Generator MCP server! We'll wrap the popular maaslalani/invoice CLI tool with a TypeScript FastMCP server, add proper schema validation, and create a complete test suite. By the end, you'll have a production-ready MCP server that can generate professional PDF invoices."
        },
        {
            "name": "author-speak-before",
            "value": "First, let's create our project directory and initialize it with npm."
        },
        {
            "name": "terminal-open",
            "value": "1"
        },
        {
            "name": "terminal-type",
            "value": "mkdir invoice-mcp && cd invoice-mcp"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-type",
            "value": "npm init -y"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-type",
            "value": "touch package.json"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "Wrote to /path/to/invoice-mcp/package.json"
        },
        {
            "name": "author-speak-before",
            "value": "Now let's install the dependencies we'll need. We need the FastMCP SDK for the server framework and Zod for schema validation."
        },
        {
            "name": "terminal-type",
            "value": "npm install @modelcontextprotocol/sdk zod"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "added 15 packages, and audited 16 packages in 2s"
        },
        {
            "name": "author-speak-before",
            "value": "And let's install our development dependencies for TypeScript and testing."
        },
        {
            "name": "terminal-type",
            "value": "npm install -D typescript @types/node tsx jest @types/jest ts-jest"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "added 32 packages, and audited 48 packages in 3s"
        },
        {
            "name": "author-speak-before",
            "value": "We also need to install the invoice CLI tool that we'll be wrapping. This is a Go tool, so we'll install it using Go."
        },
        {
            "name": "terminal-type",
            "value": "go install github.com/maaslalani/invoice@main"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "go: downloading github.com/maaslalani/invoice v0.1.0"
        },
        {
            "name": "author-speak-before",
            "value": "Let's create our project structure. First, we'll create the source directory."
        },
        {
            "name": "terminal-type",
            "value": "mkdir src"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Now let's create our TypeScript configuration file."
        },
        {
            "name": "mouse-move-file-explorer",
            "value": "1"
        },
        {
            "name": "mouse-right-click",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-context-menu-new-file",
            "value": "1"
        },
        {
            "name": "mouse-left-click",
            "value": "1"
        },
        {
            "name": "file-explorer-type-new-file-input",
            "value": "tsconfig.json"
        },
        {
            "name": "file-explorer-enter-new-file-input",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Let's configure TypeScript for our MCP server with modern ES modules."
        },
        {
            "name": "editor-type",
            "value": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"node\",\n    \"outDir\": \"./dist\",\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"skipLibCheck\": true\n  },\n  \"include\": [\"src/**/*\"]\n}"
        },
        {
            "name": "editor-save",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Now let's update our package.json to include proper scripts and make it an ES module."
        },
        {
            "name": "mouse-move-file-explorer",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-file",
            "value": "package.json"
        },
        {
            "name": "mouse-left-click",
            "value": "1"
        },
        {
            "name": "editor-backspace",
            "value": "100"
        },
        {
            "name": "editor-type",
            "value": "{\n  \"name\": \"invoice-mcp\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"main\": \"dist/index.js\",\n  \"scripts\": {\n    \"build\": \"tsc\",\n    \"start\": \"node dist/index.js\",\n    \"dev\": \"tsx src/index.ts\",\n    \"test\": \"jest\"\n  },\n  \"dependencies\": {\n    \"@modelcontextprotocol/sdk\": \"^0.5.0\",\n    \"zod\": \"^3.22.0\"\n  },\n  \"devDependencies\": {\n    \"@types/node\": \"^20.0.0\",\n    \"@types/jest\": \"^29.0.0\",\n    \"typescript\": \"^5.0.0\",\n    \"tsx\": \"^4.0.0\",\n    \"jest\": \"^29.0.0\",\n    \"ts-jest\": \"^29.0.0\"\n  }\n}"
        },
        {
            "name": "editor-save",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Perfect! Now let's create our main MCP server file. This will contain the FastMCP server implementation."
        },
        {
            "name": "mouse-move-file-explorer",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-folder",
            "value": "src"
        },
        {
            "name": "mouse-right-click",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-context-menu-new-file",
            "value": "1"
        },
        {
            "name": "mouse-left-click",
            "value": "1"
        },
        {
            "name": "file-explorer-type-new-file-input",
            "value": "index.ts"
        },
        {
            "name": "file-explorer-enter-new-file-input",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Let's start by importing our dependencies and creating our schema. This is the heart of our MCP server - it defines all the parameters that the invoice CLI tool accepts."
        },
        {
            "name": "editor-type",
            "value": "#!/usr/bin/env node\n\nimport { FastMCP } from '@modelcontextprotocol/sdk/server/fastmcp.js';\nimport { z } from 'zod';\nimport { spawn } from 'child_process';\nimport { promises as fs } from 'fs';\nimport { resolve } from 'path';\n\n// Schema for invoice generation tool\nconst InvoiceGenerateSchema = z.object({\n  from: z.string().default(\"Full Stack Craft LLC\\nSchenectady, New York\\nUnited States\"),\n  to: z.string().default(\"\"),\n  item: z.string().default(\"\"),\n  quantity: z.number().positive().optional(),\n  rate: z.number().positive().optional(),\n  tax: z.number().min(0).max(1).optional(),\n  discount: z.number().min(0).max(1).optional(),\n  note: z.string().default(\"\"),\n  output: z.string().optional(),\n  logo: z.string().optional()\n});\n\ntype InvoiceParams = z.infer<typeof InvoiceGenerateSchema>;\n\n// Create FastMCP server\nconst server = new FastMCP('Invoice Generator MCP Server', {\n  version: '1.0.0'\n});"
        },
        {
            "name": "author-speak-before",
            "value": "Now comes the core functionality - a function that executes the invoice CLI command. This function will map our parameters to CLI arguments and spawn the process."
        },
        {
            "name": "editor-type",
            "value": "\n\n/**\n * Execute the invoice CLI command with the provided parameters\n */\nasync function executeInvoiceCommand(params: InvoiceParams) {\n  return new Promise((resolve, reject) => {\n    const args: string[] = ['generate'];\n\n    // Add parameters to command\n    if (params.from) args.push('--from', params.from);\n    if (params.to) args.push('--to', params.to);\n    if (params.item) args.push('--item', params.item);\n    if (params.quantity) args.push('--quantity', params.quantity.toString());\n    if (params.rate) args.push('--rate', params.rate.toString());\n    if (params.tax) args.push('--tax', params.tax.toString());\n    if (params.discount) args.push('--discount', params.discount.toString());\n    if (params.note) args.push('--note', params.note);\n    if (params.output) args.push('--output', params.output);\n    if (params.logo) args.push('--logo', params.logo);\n\n    const invoicePath = `${process.env.HOME}/go/bin/invoice`;\n\n    const child = spawn(invoicePath, args, {\n      stdio: ['pipe', 'pipe', 'pipe'],\n      env: { ...process.env, PATH: `${process.env.PATH}:${process.env.HOME}/go/bin` }\n    });\n\n    let stdout = '';\n    let stderr = '';\n\n    child.stdout?.on('data', (data) => stdout += data.toString());\n    child.stderr?.on('data', (data) => stderr += data.toString());\n\n    child.on('close', (code) => {\n      if (code === 0) {\n        resolve({ success: true, message: 'Invoice generated successfully' });\n      } else {\n        reject(new Error(`Invoice generation failed: ${stderr}`));\n      }\n    });\n\n    child.on('error', (error) => {\n      reject(new Error(`Failed to execute invoice: ${error.message}`));\n    });\n  });\n}"
        },
        {
            "name": "author-speak-before",
            "value": "Now let's register our tool with the FastMCP server and add the main function to start our server."
        },
        {
            "name": "editor-type",
            "value": "\n\n// Register the invoice generation tool\nserver.tool('generate_invoice', {\n  description: 'Generate an invoice PDF using the maaslalani/invoice CLI tool',\n  inputSchema: InvoiceGenerateSchema,\n  handler: async (params) => {\n    try {\n      const result = await executeInvoiceCommand(params);\n      return {\n        content: [{ type: 'text', text: result.message }]\n      };\n    } catch (error) {\n      return {\n        content: [{ type: 'text', text: `Error: ${error.message}` }],\n        isError: true\n      };\n    }\n  }\n});\n\n// Start the server\nasync function main() {\n  console.log('Starting Invoice Generator MCP Server...');\n  await server.run({ transport: 'stdio' });\n}\n\nif (import.meta.url === `file://${process.argv[1]}`) {\n  main().catch(console.error);\n}"
        },
        {
            "name": "editor-save",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Excellent! Our MCP server is complete. Now let's create a test to verify our implementation works correctly with the rubber duck scenario."
        },
        {
            "name": "terminal-type",
            "value": "mkdir src/__tests__"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-folder",
            "value": "src/__tests__"
        },
        {
            "name": "mouse-left-click",
            "value": "1"
        },
        {
            "name": "mouse-right-click",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-context-menu-new-file",
            "value": "1"
        },
        {
            "name": "mouse-left-click",
            "value": "1"
        },
        {
            "name": "file-explorer-type-new-file-input",
            "value": "invoice.test.ts"
        },
        {
            "name": "file-explorer-enter-new-file-input",
            "value": "1"
        },
        {
            "name": "editor-type",
            "value": "import { describe, it, expect } from '@jest/globals';\nimport { z } from 'zod';\n\n// Import our schema\nconst InvoiceGenerateSchema = z.object({\n  from: z.string().default(\"Full Stack Craft LLC\\nSchenectady, New York\\nUnited States\"),\n  to: z.string().default(\"\"),\n  item: z.string().default(\"\"),\n  quantity: z.number().positive().optional(),\n  rate: z.number().positive().optional(),\n  note: z.string().default(\"\")\n});\n\ndescribe('Invoice Generator Schema', () => {\n  it('should validate the rubber duck test case', () => {\n    const testParams = {\n      item: \"Rubber Duck\",\n      quantity: 2,\n      rate: 25,\n      note: \"test for MCP server\"\n    };\n\n    const result = InvoiceGenerateSchema.safeParse(testParams);\n    expect(result.success).toBe(true);\n    \n    if (result.success) {\n      expect(result.data.item).toBe(\"Rubber Duck\");\n      expect(result.data.quantity).toBe(2);\n      expect(result.data.rate).toBe(25);\n      expect(result.data.note).toBe(\"test for MCP server\");\n    }\n  });\n});"
        },
        {
            "name": "editor-save",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Now let's configure Jest for our TypeScript testing."
        },
        {
            "name": "mouse-move-file-explorer",
            "value": "1"
        },
        {
            "name": "mouse-right-click",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-context-menu-new-file",
            "value": "1"
        },
        {
            "name": "mouse-left-click",
            "value": "1"
        },
        {
            "name": "file-explorer-type-new-file-input",
            "value": "jest.config.js"
        },
        {
            "name": "file-explorer-enter-new-file-input",
            "value": "1"
        },
        {
            "name": "editor-type",
            "value": "export default {\n  preset: 'ts-jest/presets/default-esm',\n  extensionsToTreatAsEsm: ['.ts'],\n  testEnvironment: 'node'\n};"
        },
        {
            "name": "editor-save",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Perfect! Now let's build our TypeScript code and run our tests."
        },
        {
            "name": "terminal-type",
            "value": "npm run build"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "Successfully compiled TypeScript"
        },
        {
            "name": "terminal-type",
            "value": "npm test"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "PASS src/__tests__/invoice.test.ts\n✓ should validate the rubber duck test case (2 ms)\n\nTest Suites: 1 passed, 1 total\nTests: 1 passed, 1 total"
        },
        {
            "name": "author-speak-before",
            "value": "Excellent! Our test passes. Now let's test our MCP server to see it generate an actual invoice."
        },
        {
            "name": "terminal-type",
            "value": "npm start"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "Starting Invoice Generator MCP Server...\n🚀 MCP server listening on STDIN/STDOUT"
        },
        {
            "name": "terminal-open",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Let's create a test request for our rubber duck invoice and send it to our MCP server."
        },
        {
            "name": "terminal-type",
            "value": "echo '{\"tool\": \"generate_invoice\", \"params\": {\"item\": \"Rubber Duck\", \"quantity\": 2, \"rate\": 25, \"note\": \"test for MCP server\", \"output\": \"./rubber-duck-invoice.pdf\"}}' > test-request.json"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-type",
            "value": "cat test-request.json | npx mcp-cli call node dist/index.js"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "{\n  \"status\": \"success\",\n  \"result\": {\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Invoice generated successfully\"\n      }\n    ]\n  }\n}"
        },
        {
            "name": "author-speak-before",
            "value": "Perfect! Let's verify the PDF was created."
        },
        {
            "name": "terminal-type",
            "value": "ls -la *.pdf"
        },
        {
            "name": "terminal-enter",
            "value": "1"
        },
        {
            "name": "terminal-set-output",
            "value": "-rw-r--r--  1 user  staff  15234 rubber-duck-invoice.pdf"
        },
        {
            "name": "author-speak-before",
            "value": "Fantastic! Our MCP server successfully generated the invoice PDF. Let's create a README to document our project."
        },
        {
            "name": "mouse-move-file-explorer",
            "value": "1"
        },
        {
            "name": "mouse-right-click",
            "value": "1"
        },
        {
            "name": "mouse-move-file-explorer-context-menu-new-file",
            "value": "1"
        },
        {
            "name": "mouse-left-click",
            "value": "1"
        },
        {
            "name": "file-explorer-type-new-file-input",
            "value": "README.md"
        },
        {
            "name": "file-explorer-enter-new-file-input",
            "value": "1"
        },
        {
            "name": "editor-type",
            "value": "# Invoice MCP Server\n\nA TypeScript MCP server that wraps the maaslalani/invoice CLI tool for generating professional PDF invoices.\n\n## Features\n\n- Generate professional PDF invoices\n- Schema validation with Zod\n- TypeScript for type safety\n- Comprehensive test suite\n\n## Usage\n\n```bash\nnpm install\nnpm run build\nnpm start\n```\n\n## Test Case\n\nThe server successfully handles the rubber duck test case:\n- 2x Rubber Duck @ $25 each\n- Note: \"test for MCP server\"\n- Generates professional PDF invoice"
        },
        {
            "name": "editor-save",
            "value": "1"
        },
        {
            "name": "author-speak-before",
            "value": "Congratulations! You've successfully built a complete Invoice Generator MCP server that can generate professional PDF invoices through the Model Context Protocol."
        },
        {
            "name": "author-speak-before",
            "value": "In this lesson, we covered key concepts: TypeScript project setup, Zod schema validation, CLI tool integration, FastMCP server implementation, comprehensive testing, and end-to-end validation with real invoice generation."
        },
        {
            "name": "author-speak-before",
            "value": "You now have a production-ready MCP server that AI models can use to generate invoices. This demonstrates the power of wrapping existing CLI tools with MCP to make them accessible to AI systems like Claude Desktop, ChatGPT, or any MCP-compatible client."
        },
        {
            "name": "author-speak-before",
            "value": "The skills you've learned - schema design, process management, error handling, and MCP integration - are foundational for building more advanced AI-powered tools. Great work completing this comprehensive implementation!"
        }
    ],
    "initialSnapshot": {
        "isUnsavedChangesDialogOpen": false,
        "unsavedFileName": "",
        "fileExplorerSnapshot": {
            "fileStructure": {},
            "isFileExplorerContextMenuOpen": false,
            "isFileContextMenuOpen": false,
            "isFolderContextMenuOpen": false,
            "isNewFileInputVisible": false,
            "isNewFolderInputVisible": false,
            "newFileInputValue": "",
            "newFolderInputValue": "",
            "isRenameFileInputVisible": false,
            "isRenameFolderInputVisible": false,
            "originalFileBeingRenamed": "",
            "originalFolderBeingRenamed": "",
            "renameFileInputValue": "",
            "renameFolderInputValue": "",
            "newFileParentPath": "",
            "newFolderParentPath": ""
        },
        "editorSnapshot": {
            "editors": [],
            "isEditorContextMenuOpen": false
        },
        "terminalSnapshot": {
            "terminals": [
                {
                    "content": ""
                }
            ]
        },
        "mouseSnapshot": {
            "location": "editor",
            "currentHoveredFileName": "",
            "currentHoveredFolderName": "",
            "currentHoveredEditorTabFileName": "",
            "x": 0,
            "y": 0,
            "timestamp": 0,
            "type": "move",
            "button": 0,
            "buttonStates": {
                "left": false,
                "right": false,
                "middle": false
            },
            "scrollPosition": {
                "x": 0,
                "y": 0
            },
            "scrollDelta": 0
        },
        "authorSnapshot": {
            "authors": [
                {
                    "currentSpeechCaption": ""
                }
            ]
        }
    }
}

    it('should extract the actions from the complex lesson ', () => {
        const result = extractActionsFromProject(mockLesson, 0);
        // expect extracted actions to be the same length as the actions in the lesson
        expect(result.length).toEqual(mockLesson.actions.length);
    })
});
