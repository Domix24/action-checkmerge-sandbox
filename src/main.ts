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
    const octokit = github.getOctokit(token)

    if (github.context.eventName !== 'pull_request')
      throw new Error('Not a pull request')

    const info = await octokit.rest.pulls.get({
      owner: github.context.repo.owner,
      pull_number: github.context.payload.pull_request!.number,
      repo: github.context.repo.repo
    })

    console.log(info)
    console.log('--')
    console.log(github.context)
    console.log(token)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error)
    } else {
      core.setFailed('Unexpected')
    }
  }
}
