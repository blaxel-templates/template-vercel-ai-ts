# Blaxel Vercel AI SDK Agent

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 18+](https://img.shields.io/badge/node-18+-blue.svg)](https://nodejs.org/downloads/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-powered-brightgreen.svg)](https://sdk.vercel.ai/)
[![TypeScript](https://img.shields.io/badge/TypeScript-enabled-blue.svg)](https://www.typescriptlang.org/)

</div>

A template implementation of a conversational agent using Vercel AI SDK and GPT-4. This agent demonstrates the power of Vercel AI SDK for building interactive AI agents with tool integration capabilities and streaming responses.

## 📑 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Running Locally](#running-the-server-locally)
  - [Testing](#testing-your-agent)
  - [Deployment](#deploying-to-blaxel)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## ✨ Features

- Interactive conversational interface with TypeScript type safety
- Tool integration support (including weather and search capabilities)
- Streaming responses for real-time interaction
- Built on Vercel AI SDK for efficient agent orchestration
- Easy deployment and integration with Blaxel platform
- Modern TypeScript development experience

## 🚀 Quick Start

For those who want to get up and running quickly:

```bash
# Clone the repository
git clone https://github.com/blaxel-ai/template-vercel-ai-ts.git

# Navigate to the project directory
cd template-vercel-ai-ts

# Install dependencies
npm install

# Start the server
bl serve --hotreload

# In another terminal, test the agent
bl chat --local blaxel-agent
```

## 📋 Prerequisites

- **Node.js:** 18.0 or later
- **[NPM](https://www.npmjs.com/):** Node package manager
- **Blaxel Platform Setup:** Complete Blaxel setup by following the [quickstart guide](https://docs.blaxel.ai/Get-started#quickstart)
  - **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have the Blaxel CLI installed. If not, install it globally:
    ```bash
    curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=/usr/local/bin sudo -E sh
    ```
  - **Blaxel login:** Login to Blaxel platform
    ```bash
    bl login YOUR-WORKSPACE
    ```

## 💻 Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/blaxel-ai/template-vercel-ai-ts.git
cd template-vercel-ai-ts
npm install
```

## 🔧 Usage

### Running the Server Locally

Start the development server with hot reloading:

```bash
bl serve --hotreload
```

_Note:_ This command starts the server and enables hot reload so that changes to the source code are automatically reflected.

### Testing your agent

You can test your agent using the chat interface:

```bash
bl chat --local blaxel-agent
```

Or run it directly with specific input:

```bash
bl run agent blaxel-agent --local --data '{"input": "What is the weather in Paris?"}'
```

### Deploying to Blaxel

When you are ready to deploy your application:

```bash
bl deploy
```

This command uses your code and the configuration files under the `.blaxel` directory to deploy your application.

## 📁 Project Structure

- **src/index.ts** - Application entry point
- **src/agent.ts** - Core agent implementation with Vercel AI SDK integration
- **package.json** - Node.js package configuration
- **tsconfig.json** - TypeScript configuration
- **blaxel.toml** - Blaxel deployment configuration

## ❓ Troubleshooting

### Common Issues

1. **Blaxel Platform Issues**:
   - Ensure you're logged in to your workspace: `bl login MY-WORKSPACE`
   - Verify models are available: `bl get models`
   - Check that functions exist: `bl get functions`

2. **Node.js Version Issues**:
   - Make sure you have Node.js 18+
   - Try `node --version` to check your version

3. **Package Installation Problems**:
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

4. **TypeScript Compilation Errors**:
   - Check your TypeScript version: `npx tsc --version`
   - Ensure all types are properly installed

5. **Connection Problems**:
   - Verify your network connection
   - Check firewall settings if API calls are failing

For more help, please [submit an issue](https://github.com/blaxel-templates/template-vercel-ai-ts/issues) on GitHub.

## 👥 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Submit** a Pull Request

Please make sure to update tests as appropriate and follow the TypeScript code style of the project.

## 🆘 Support

If you need help with this template:

- [Submit an issue](https://github.com/blaxel-templates/template-vercel-ai-ts/issues) for bug reports or feature requests
- Visit the [Blaxel Documentation](https://docs.blaxel.ai) for platform guidance
- Check the [Vercel AI SDK Documentation](https://sdk.vercel.ai/) for framework-specific help
- Join our [Discord Community](https://discord.gg/G3NqzUPcHP) for real-time assistance

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
