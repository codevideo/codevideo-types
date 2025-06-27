import { isLesson } from '../src/type-guards/isLesson';
import { IAction } from '../src/interfaces/IAction';
import { ILesson } from '../src/interfaces/toplevel/ILesson';
import { extractActionsFromProject } from '../src/extractors/extractActionsFromProject';

describe('isLesson type guard', () => {
    
    const validAction: IAction = {
        name: 'editor-type',
        value: 'test content'
    };

    const validLesson: ILesson = {
        id: 'lesson-1',
        name: 'Test Lesson',
        description: 'A test lesson',
        actions: [validAction]
    };

    describe('valid lessons', () => {
        it('should return true for a valid lesson', () => {
            expect(isLesson(validLesson)).toBe(true);
        });

        it('should return true for a lesson with empty actions array', () => {
            const lessonWithEmptyActions = {
                id: 'lesson-2',
                name: 'Empty Lesson',
                description: 'A lesson with no actions',
                actions: []
            };
            expect(isLesson(lessonWithEmptyActions as any)).toBe(true);
        });

        it('should return true for a lesson with optional snapshots', () => {
            const lessonWithSnapshots = {
                ...validLesson,
                initialSnapshot: { 
                    isUnsavedChangesDialogOpen: false,
                    unsavedFileName: "",
                    fileExplorerSnapshot: {} as any,
                    editorSnapshot: {} as any,
                    terminalSnapshot: {} as any,
                    mouseSnapshot: {} as any,
                    authorSnapshot: {} as any
                },
                finalSnapshot: { 
                    isUnsavedChangesDialogOpen: false,
                    unsavedFileName: "",
                    fileExplorerSnapshot: {} as any,
                    editorSnapshot: {} as any,
                    terminalSnapshot: {} as any,
                    mouseSnapshot: {} as any,
                    authorSnapshot: {} as any
                }
            };
            expect(isLesson(lessonWithSnapshots)).toBe(true);
        });

        it('should return true for a lesson with multiple valid actions', () => {
            const lessonWithMultipleActions = {
                id: 'lesson-3',
                name: 'Multi Action Lesson',
                description: 'A lesson with multiple actions',
                actions: [
                    { name: 'editor-type', value: 'first action' } as IAction,
                    { name: 'terminal-enter', value: '1' } as IAction,
                    { name: 'author-speak-before', value: 'Hello world' } as IAction
                ]
            };
            expect(isLesson(lessonWithMultipleActions as any)).toBe(true);
        });
    });

    describe('invalid lessons - missing required properties', () => {
        it('should return false when id is missing', () => {
            const lessonWithoutId = {
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithoutId as any)).toBe(false);
        });

        it('should return false when name is missing', () => {
            const lessonWithoutName = {
                id: 'lesson-1',
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithoutName as any)).toBe(false);
        });

        it('should return false when description is missing', () => {
            const lessonWithoutDescription = {
                id: 'lesson-1',
                name: 'Test Lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithoutDescription as any)).toBe(false);
        });

        it('should return false when actions is missing', () => {
            const lessonWithoutActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson'
            };
            expect(isLesson(lessonWithoutActions as any)).toBe(false);
        });
    });

    describe('invalid lessons - wrong property types', () => {
        it('should return false when id is not a string', () => {
            const lessonWithNumberId = {
                id: 123,
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithNumberId as any)).toBe(false);
        });

        it('should return false when name is not a string', () => {
            const lessonWithNullName = {
                id: 'lesson-1',
                name: null,
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithNullName as any)).toBe(false);
        });

        it('should return false when description is not a string', () => {
            const lessonWithBooleanDescription = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: true,
                actions: [validAction]
            };
            expect(isLesson(lessonWithBooleanDescription as any)).toBe(false);
        });

        it('should return false when actions is not an array', () => {
            const lessonWithStringActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: 'not an array'
            };
            expect(isLesson(lessonWithStringActions as any)).toBe(false);
        });

        it('should return false when actions contains invalid action objects', () => {
            const lessonWithInvalidActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: [
                    validAction,
                    { name: 'invalid-action-name', value: 'test' }, // invalid action name
                    { name: 'editor-type' } // missing value
                ]
            };
            expect(isLesson(lessonWithInvalidActions as any)).toBe(false);
        });

        it('should return false when optional snapshots are null', () => {
            const lessonWithNullSnapshots = {
                ...validLesson,
                initialSnapshot: null,
                finalSnapshot: null
            };
            expect(isLesson(lessonWithNullSnapshots as any)).toBe(false);
        });
    });

    describe('invalid inputs', () => {
        it('should return false for null', () => {
            expect(isLesson(null as any)).toBe(false);
        });

        it('should return false for undefined', () => {
            expect(isLesson(undefined as any)).toBe(false);
        });

        it('should return false for arrays', () => {
            expect(isLesson([validAction] as any)).toBe(false);
        });

        it('should return false for primitive types', () => {
            expect(isLesson('string' as any)).toBe(false);
            expect(isLesson(123 as any)).toBe(false);
            expect(isLesson(true as any)).toBe(false);
        });

        it('should return false for empty objects', () => {
            expect(isLesson({} as any)).toBe(false);
        });
    });

    describe('edge cases that the old implementation would incorrectly validate', () => {
        it('should return false for object with only actions property (old implementation would pass)', () => {
            const objectWithOnlyActions = {
                actions: [validAction]
            };
            expect(isLesson(objectWithOnlyActions as any)).toBe(false);
        });

        it('should return false for object with actions but wrong other types (old implementation would pass)', () => {
            const objectWithWrongTypes = {
                id: 123,
                name: [],
                description: {},
                actions: [validAction]
            };
            expect(isLesson(objectWithWrongTypes as any)).toBe(false);
        });

        it('should return false for object with non-array actions (old implementation would pass)', () => {
            const objectWithNonArrayActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: { some: 'object' }
            };
            expect(isLesson(objectWithNonArrayActions as any)).toBe(false);
        });
    });

    describe('real lesson example', () => {
        const lesson: ILesson = {
  "id": "typescript-mcp-lesson",
  "name": "Building an MCP Server with TypeScript",
  "description": "Learn how to create the same MCP server using TypeScript and Anthropic's official SDK",
  "actions": [
    {
      "name": "author-speak-before",
      "value": "In the previous lesson, we built our first MCP server using FastMCP in Python and successfully tested it with mcp-cli."
    },
    {
      "name": "author-speak-before",
      "value": "Now let's create the exact same functionality using TypeScript and Anthropic's official MCP SDK. First, we'll organize our project by moving the Python file into its own folder."
    },
    {
      "name": "author-speak-before",
      "value": "We can close this python file for now."
    },
    {
      "name": "mouse-move-editor-tab-close",
      "value": "hello_mcp.py"
    },
    {
      "name": "mouse-left-click",
      "value": "1"
    },
    {
      "name": "terminal-open",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "We'll make the folder with mkdir in the terminal."
    },
    {
      "name": "terminal-type",
      "value": "mkdir python"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "And move it into that folder."
    },
    {
      "name": "terminal-type",
      "value": "mv hello_mcp.py python/hello_mcp.py"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "Now let's create a typescript folder to keep our TypeScript implementation organized."
    },
    {
      "name": "terminal-type",
      "value": "mkdir typescript"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "terminal-type",
      "value": "cd typescript"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "Perfect! Now let's set up our TypeScript project. We'll start by initializing a new Node.js project."
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
      "name": "file-explorer-create-file",
      "value": "~/typescript/package.json"
    },
    {
      "name": "file-explorer-set-file-contents",
      "value": "~/typescript/package.json_____{\n  \"name\": \"hello-mcp-typescript\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"main\": \"build/index.js\",\n  \"bin\": {\n    \"hello-mcp-ts\": \"./build/index.js\"\n  },\n  \"scripts\": {\n    \"build\": \"tsc\",\n    \"start\": \"node build/index.js\"\n  },\n  \"dependencies\": {\n    \"@modelcontextprotocol/sdk\": \"^1.13.1\",\n    \"zod\": \"^3.22.4\"\n  },\n  \"devDependencies\": {\n    \"@types/node\": \"^22.10.5\",\n    \"typescript\": \"^5.7.2\"\n  }\n}"
    },
    {
      "name": "terminal-set-output",
      "value": "Wrote to package.json"
    },
    {
      "name": "author-speak-before",
      "value": "Now we'll install the Anthropic MCP SDK and TypeScript dependencies."
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
      "name": "terminal-type",
      "value": "npm install -D typescript @types/node"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "terminal-set-output",
      "value": "added 3 packages, and audited 19 packages in 1s"
    },
    {
      "name": "author-speak-before",
      "value": "Let's create our TypeScript configuration file."
    },
    {
      "name": "mouse-move-file-explorer-folder",
      "value": "typescript"
    },
    {
      "name": "mouse-right-click",
      "value": "1"
    },
    {
      "name": "mouse-move-file-explorer-folder-context-menu-new-file",
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
      "name": "editor-type",
      "value": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"Node16\",\n    \"moduleResolution\": \"Node16\",\n    \"outDir\": \"./build\",\n    \"rootDir\": \"./src\",\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"skipLibCheck\": true,\n    \"forceConsistentCasingInFileNames\": true\n  },\n  \"include\": [\"src /**/*\"],\n  \"exclude\": [\"node_modules\"]\n}"
    },
    {
      "name": "editor-save",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "Now let's create a source directory and our main TypeScript file."
    },
    {
      "name": "mouse-move-file-explorer-folder",
      "value": "typescript"
    },
    {
      "name": "mouse-right-click",
      "value": "1"
    },
    {
      "name": "mouse-move-file-explorer-folder-context-menu-new-folder",
      "value": "1"
    },
    {
      "name": "mouse-left-click",
      "value": "1"
    },
    {
      "name": "file-explorer-type-new-folder-input",
      "value": "src"
    },
    {
      "name": "file-explorer-enter-new-folder-input",
      "value": "1"
    },
    {
      "name": "mouse-move-file-explorer-folder",
      "value": "typescript/src"
    },
    {
      "name": "mouse-right-click",
      "value": "1"
    },
    {
      "name": "mouse-move-file-explorer-folder-context-menu-new-file",
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
      "value": "Perfect! Now let's write our TypeScript MCP server. We'll start by importing the necessary modules from Anthropic's SDK."
    },
    {
      "name": "editor-type",
      "value": "import { McpServer } from \"@modelcontextprotocol/sdk/server/mcp.js\";"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "import { StdioServerTransport } from \"@modelcontextprotocol/sdk/server/stdio.js\";"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "import { z } from \"zod\";"
    },
    {
      "name": "editor-enter",
      "value": "2"
    },
    {
      "name": "author-speak-before",
      "value": "Next, we'll create our MCP server instance with the same 'hello' namespace we used in Python."
    },
    {
      "name": "editor-type",
      "value": "// 1. Create an MCP server with the same namespace"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "const server = new McpServer({"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  name: \"hello\","
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  version: \"1.0.0\""
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "});"
    },
    {
      "name": "editor-enter",
      "value": "2"
    },
    {
      "name": "author-speak-before",
      "value": "Now we'll register our greet tool using the same logic as our Python version. The TypeScript SDK uses registerTool method with Zod schema validation."
    },
    {
      "name": "editor-type",
      "value": "// 2. Register the same greet tool"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "server.registerTool("
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  \"greet\","
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  {"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "    title: \"Greeting Tool\","
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "    description: \"Return a friendly greeting\","
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "    inputSchema: {"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "      name: z.string().describe(\"Name to greet\")"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "    }"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  },"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  async ({ name }) => ({"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "    content: [{"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "      type: \"text\","
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "      text: `Hello, ${name}! 👋`"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "    }]"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  })"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": ");"
    },
    {
      "name": "editor-enter",
      "value": "2"
    },
    {
      "name": "author-speak-before",
      "value": "Finally, let's add the startup code that connects our server to the stdio transport, just like our Python version."
    },
    {
      "name": "editor-type",
      "value": "// 3. Start the server with stdio transport"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "async function main() {"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  const transport = new StdioServerTransport();"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "  await server.connect(transport);"
    },
    {
      "name": "editor-enter",
      "value": "1"
    },
    {
      "name": "editor-type",
      "value": "}"
    },
    {
      "name": "editor-enter",
      "value": "2"
    },
    {
      "name": "editor-type",
      "value": "main().catch(console.error);"
    },
    {
      "name": "author-speak-before",
      "value": "Excellent! Our TypeScript MCP server is complete. Let's save the file and then update our package.json to include build scripts."
    },
    {
      "name": "editor-save",
      "value": "1"
    },
    {
      "name": "mouse-move-file-explorer",
      "value": "1"
    },
    {
      "name": "mouse-left-click",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "Now let's build our TypeScript project."
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
      "value": "TypeScript compilation completed successfully"
    },
    {
      "name": "author-speak-before",
      "value": "Perfect! Now let's test our TypeScript MCP server the same way we tested the Python version."
    },
    {
      "name": "terminal-type",
      "value": "nohup npm start &"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "terminal-set-output",
      "value": "🚀 MCP server \"hello\" listening on STDIN/STDOUT"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "Excellent! Our TypeScript server is now running. Let's test it with the exact same mcp-cli command we used before."
    },
    {
      "name": "terminal-open",
      "value": "1"
    },
    {
      "name": "terminal-type",
      "value": "echo '{ \"tool\": \"hello\", \"action\": \"greet\", \"params\": { \"name\": \"world\" } }' | npx mcp-cli call -"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "terminal-set-output",
      "value": "{ \"status\": \"ok\", \"result\": \"Hello, world! 👋\" }"
    },
    {
      "name": "terminal-enter",
      "value": "1"
    },
    {
      "name": "author-speak-before",
      "value": "Perfect! We've successfully recreated the exact same MCP server functionality using TypeScript and Anthropic's official SDK."
    },
    {
      "name": "author-speak-before",
      "value": "Let's compare what we just built. Both servers expose the same 'hello' namespace with a 'greet' action that returns identical responses. The key differences are in the implementation approach."
    },
    {
      "name": "author-speak-before",
      "value": "The Python version used FastMCP with decorators - a more pythonic approach where @mcp.tool automatically converts functions into tools."
    },
    {
      "name": "author-speak-before",
      "value": "The TypeScript version uses Anthropic's official SDK with explicit registration and Zod schema validation, giving you more control over input validation and response formatting."
    },
    {
      "name": "author-speak-before",
      "value": "Both approaches achieve the same goal: creating MCP servers that any compatible client can connect to. Whether you choose Python or TypeScript depends on your team's preferences and existing tech stack."
    },
    {
      "name": "author-speak-before",
      "value": "In our next lesson, we'll explore more advanced MCP capabilities like resources and prompts, and see how to add multiple tools to create more sophisticated AI integrations!"
    }
  ],
  "initialSnapshot": {
    "isUnsavedChangesDialogOpen": false,
    "unsavedFileName": "",
    "fileExplorerSnapshot": {
      "fileStructure": {
        "hello_mcp.py": {
          "type": "file",
          "content": "from fastmcp import FastMCP\n\n# 1. Instantiate a server and give our tool a namespace\nmcp = FastMCP(\"hello\")\n\n# 2. Expose a single action\n@mcp.tool\ndef greet(name: str) -> str:\n    \"\"\"Return a friendly greeting.\"\"\"\n    return f\"Hello,{name}! 👋\"\n\n# 3. Run with the built-in stdio transport (works with any client)\nif __name__ == \"__main__\":\n    mcp.run()",
          "language": "py",
          "caretPosition": {
            "row": 0,
            "col": 0
          }
        }
      },
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
      "editors": [
        {
          "isActive": true,
          "filename": "hello_mcp.py",
          "content": "from fastmcp import FastMCP\n\n# 1. Instantiate a server and give our tool a namespace\nmcp = FastMCP(\"hello\")\n\n# 2. Expose a single action\n@mcp.tool\ndef greet(name: str) -> str:\n    \"\"\"Return a friendly greeting.\"\"\"\n    return f\"Hello,{name}! 👋\"\n\n# 3. Run with the built-in stdio transport (works with any client)\nif __name__ == \"__main__\":\n    mcp.run()",
          "caretPosition": {
            "row": 14,
            "col": 14
          },
          "highlightCoordinates": null,
          "isSaved": true
        }
      ],
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
          "currentSpeechCaption": "In the next lesson, we'll see how to create the same server but using TypeScript with Anthropic's TypeScript SDK. See you there!"
        }
      ]
    }
  }
};
        expect(isLesson(lesson)).toBe(true);

        // another test - extract actions
        const actions = extractActionsFromProject(lesson, null);

        expect(actions.length).toBe(lesson.actions.length);
        expect(actions[0].name).toBe('author-speak-before');
    })
});
