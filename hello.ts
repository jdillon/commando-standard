/**
 * Hello command - Simple test command for module loading
 */

import type { CommandoCommand } from '@planet57/commando/types';

/**
 * Say hello
 */
export const greet: CommandoCommand = {
  description: 'Say hello to someone',
  usage: '[name]',

  execute: async (options, args, context) => {
    const name = args[0] || 'World';
    console.log(`Hello, ${name}!`);
    console.log(`Loaded from commando-standard package`);
  },
};

/**
 * Show info about this module
 */
export const info: CommandoCommand = {
  description: 'Show information about this module',

  execute: async (options, args, context) => {
    console.log('Module: @planet57/commando-standard/hello');
    console.log('Version: 0.1.0');
    console.log('Commands: greet, info');
  },
};
