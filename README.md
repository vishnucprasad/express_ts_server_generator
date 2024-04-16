# express-ts-server-generator

Create Express TypeScript Server is a command-line tool that allows you to quickly generate a new Express.js server project with TypeScript support.

## Installation

You can install the `express-ts-server-generator` package globally using npm:

```bash
npm install -g express-ts-server-generator
```

Alternatively, you can use `npx` to run the package without installing it globally:

```bash
npx express-ts-server-generator new <project-name>
```

Replace `<project-name>` with the desired name for your project.

## Usage

To create a new Express TypeScript server project, run the following command:

```bash
express-ts-server-generator new <project-name>
```

After running the above command, the tool will clone a base repository from GitHub and initialize it for clean use. It will set up an Express server with TypeScript configuration and install necessary dependencies.

Once the project is initialized successfully, navigate to the project directory, create the .env file and .ev.test file then start the server:

```bash
cd <project-name>
```

### To start the server in production mode

```bash
pnpm start
```

### To start the server in debug mode

```bash
pnpm start:dev
```

### To run the test suite

```bash
pnpm test
```

This will start the Express server, and you can access it at `http://localhost:3000`.

## Note

- This package only supports the use of `pnpm` as the package manager.

## License

This project is licensed under the [MIT License](LICENSE).
