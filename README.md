# Movie Night public downloads

This public repository is the distribution front door for Movie Night. Its
GitHub Pages site explains the product; its GitHub Releases hold versioned,
unsigned binaries, checksums, notices, screenshots, and release notes.

The application source and build pipeline remain in a separate private
repository. The automatically generated “Source code” archives on releases are
therefore this small download site's source, not the Movie Night application.

Official page: <https://monirul-islam-47.github.io/movie-night/>

## Trust model

- Releases are unsigned and say so explicitly.
- SHA-256 manifests detect altered or incomplete downloads but are not a
  substitute for a code-signing identity.
- Release assets are built and tested in the private source repository, then
  published here with a narrowly scoped GitHub credential.
- This site contains no analytics, advertising, cookies, or third-party scripts.
- Movie Night is an independent personal project and is not affiliated with a business or company.
- Releases recommend lawful, non-pirated media and include the no-warranty and
  user-responsibility notice in `legal.html`.
- A release is incomplete without the exact FFmpeg corresponding-source archive
  and `release-compliance.json` beside its binaries.
