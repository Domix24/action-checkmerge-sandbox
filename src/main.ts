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
    const token = core.getInput('token')
    //    const octokit = github.getOctokit(token)

    if (github.context.action === 'pull_request')
      throw new Error('Not a pull request')

    console.log(github.context.action)
    console.log(github.context.eventName)
    console.log(github.context.eventName == 'pull_request')
    console.log(github.context.action == 'pull_request')

    console.log('--')
    console.log(github.context)
    console.log(token)
    core.info(arguments.length + '')
  } catch (error) {
    if (error instanceof Error) {
      core.error(error)
    } else {
      core.error('Unexpected')
    }
  }
}
