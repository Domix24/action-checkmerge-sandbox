import * as core from '@actions/core'
import * as github from '@actions/github'
//import { wait } from './wait.js'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const token = '(token)'
    console.log(token)
    console.log('--')
    console.log(github.context)
    console.log('--')
    core.info(arguments.length + '')
  } catch (error) {
    if (error instanceof Error) {
      core.error(error)
    } else {
      core.error('Unexpected')
    }
  }
}
