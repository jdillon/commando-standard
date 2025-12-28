# commando-standard

Standard library of reusable Commando command modules.

## Status

**Work in Progress** - Initial testing of Phase 3 module loading system.

## Structure

```
commando-standard/
├── build/              # Build outputs (gitignored)
├── hello.ts           # Example module with greet and info commands
├── package.json       # Package metadata
├── bunfig.toml        # Bun configuration
└── README.md          # This file
```

## Development Setup

This package is designed to be developed locally and tested with the main commando repository.

### Installation to Commando Home

```bash
# Install local clone to commando home using file: protocol
cd ~/.commando
bun add file:/Users/jason/ws/jdillon/commando-standard
```

This creates symlinks in `~/.commando/node_modules/@planet57/commando-standard/` pointing to your local working directory. Changes to files are immediately visible.

### Usage in Projects

In your project's `.commando/config.yml`:

```yaml
modules:
  - "@planet57/commando-standard/hello"
```

This loads the `hello.ts` module, creating a `hello` command group with `greet` and `info` subcommands.

## Directory Conventions

- **build/** - All build outputs go here (tarballs, compiled artifacts, etc.)
- **Source files** - TypeScript modules in root directory
- **No dist/** - We use `build/` consistently across all projects

## Available Modules

### hello.ts

Example module demonstrating basic command structure.

Commands:
- `greet [name]` - Say hello to someone
- `info` - Show module information

## Testing

Test module loading using cmdo:

```bash
# From a test project
cd /tmp/commando-module-test
cmdo hello greet Jason
cmdo hello info
```

## Notes

- **Peer dependency**: `@planet57/commando` is marked as optional peer dependency
- **Type**: ESM module (`"type": "module"` in package.json)
- **Development**: Changes to source files are immediately reflected (symlinked installation)
