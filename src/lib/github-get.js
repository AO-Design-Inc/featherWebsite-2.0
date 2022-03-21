// const { Octokit } = require("@octokit/core");
import { Octokit } from "@octokit/core";

export let getGithub = async () => {
    const result = await Octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        headers: {
            authorization: 'token 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'
        },
        owner: 'AO-Design-Inc',
        repo: 'Feather-Releases'
    });
    console.log(result.data.assets);
    // return result.data
}