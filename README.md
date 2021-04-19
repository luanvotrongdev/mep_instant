# MEPIntant
> Amanotes's mep_instant SDK DOC

---------------------------------------------------------

# MEPIntant SDK

| Version | Changelog | Doc | Link | Cocos extension |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| 2.5.0 | <ul><li>Fix current time precision </li><li>Save game support</li></ul> | [Doc](docs_2_5_0/DOCS.md) | [UNPKG](https://unpkg.com/@mep.tech/instant@2.5.0/dist/mepinstant.umd.production.min.js) | [ZIP](https://d1wkdokb986dq4.cloudfront.net/mep-instant-sdk/mep_instant_2.3.0-alpha8.zip)
| 2.5.1 | <ul><li>autoSpecificContent flag added </li> | [Doc](docs_2_5_1/DOCS.md) | [UNPKG](https://unpkg.com/@mep.tech/instant@2.5.1/dist/mepinstant.umd.production.min.js) | [ZIP](https://d1wkdokb986dq4.cloudfront.net/mep-instant-sdk/mep_instant_2.3.0-alpha8.zip)
| 2.5.2 | <ul><li> specificContent flag added </li> | [Doc](docs_2_5_2/DOCS.md) | --- | ---

# How to enable Native-like game

## Prerequisite
- Cocos Creator version 2.4.4
- Programming language: Typescript.
- mep_instant’s cocos extension: 
  - [Cocos's guideline](https://docs.cocos.com/creator/manual/en/extension/install-and-share.html#project-packages)
  - [mep_instant cocos creator](#mepintant-sdk)
- Game bundling: [cocos’s guideline](https://docs.cocos.com/creator/manual/en/scripting/asset-bundle.html)
- SandboxApp testflight version 2.0.0 - 202104081641
- Bundle size limit: 5MB
## Unsupported
- cookie
- DOM
- NodeJS 
## Sample steps to test with SandBox app
> [Sample template](./resources/mep-instant-samplegame-native.zip) <br>
> Sample Game: Magic Tiles 3 <br>
> Sample Game ID: mt3

- install [mep_instant’s cocos extension](#prerequisite) in project <br>
<img src="./resources/install_extension.png" width=70% height=70% >
- [Bundling project](#prerequisite) <br>
<img src="./resources/bundling_project.png" width=70% height=70% >
- Export bundle <br>
<img src="./resources/export_project.png" width=70% height=70% >
- Testing <br>
<img src="./resources/install_extension.png" width=70% height=70% >
- [Debug with google chrome devtools](https://docs.cocos.com/creator/manual/en/publish/debug-jsb.html)
  - NOTE: only works on google Chrome devtools.
  - NOTE: In case of JS exception, devtools will failed to connect as well. 
