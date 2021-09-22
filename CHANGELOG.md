# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [0.0.0] - 2012-09-15
 
Initial feature set for the JSON Schema Manager.
Focus is on core library functions.
 
### Added
- `$ref` resolver from local file system.
  - Configure via: 
    - `baseDir` + `path.ext`
    - `file://**/path.ext` Use file's dir as `baseDir` to resolve additional schemas.
  - Accept relative paths from [process.cwd()](https://nodejs.org/api/process.html#process_process_cwd)
- Use [AJV](https://github.com/ajv-validator/ajv) to validate JSON Schemas.
- accept `yml` or `yaml` extentions
- Extentions required on files
- JSDoc generation with link in README.md

 
### Changed

- N/A

### Fixed

- N/A