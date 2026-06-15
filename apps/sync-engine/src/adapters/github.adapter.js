/**
 * GitHub API Adapter
 *
 * Wraps the GitHub REST API for outbound operations.
 * This adapter layer isolates the external API from domain logic,
 * making it easy to mock in tests and swap implementations.
 *
 * TODO: Implement with Octokit or native fetch.
 */

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetches repository information from GitHub.
 * @param {string} owner - Repository owner
 * @param {string} repo - Repository name
 * @param {string} token - GitHub personal access token
 */
export async function getRepository(owner, repo, token) {
  const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'Shipyard-Sync-Engine/0.1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetches open pull requests for a repository.
 * @param {string} owner - Repository owner
 * @param {string} repo - Repository name
 * @param {string} token - GitHub personal access token
 */
export async function getOpenPullRequests(owner, repo, token) {
  const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}/pulls?state=open`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'Shipyard-Sync-Engine/0.1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
