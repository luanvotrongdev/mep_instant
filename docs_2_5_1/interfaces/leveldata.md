[@mep.tech/instant](../DOCS.md) / [Exports](../modules.md) / LevelData

# Interface: LevelData

## Table of contents

### Properties

- [applySanityCheck](leveldata.md#applysanitycheck)
- [bpm](leveldata.md#bpm)
- [difficulties](leveldata.md#difficulties)
- [duration](leveldata.md#duration)
- [filterByEnergyLevel](leveldata.md#filterbyenergylevel)
- [fullNotes](leveldata.md#fullnotes)
- [notes](leveldata.md#notes)
- [ppq](leveldata.md#ppq)
- [selectNotesByLines](leveldata.md#selectnotesbylines)

## Properties

### applySanityCheck

• **applySanityCheck**: (`fullNote`: [*Note*](note.md)[], `minDistanceSecond`: *number*, `maxDistanceSecond`: *number*) => [*Note*](note.md)[]

#### Type declaration:

▸ (`fullNote`: [*Note*](note.md)[], `minDistanceSecond`: *number*, `maxDistanceSecond`: *number*): [*Note*](note.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`fullNote` | [*Note*](note.md)[] |
`minDistanceSecond` | *number* |
`maxDistanceSecond` | *number* |

**Returns:** [*Note*](note.md)[]

Defined in: index.ts:91

Defined in: index.ts:91

___

### bpm

• **bpm**: *number*

Defined in: index.ts:87

___

### difficulties

• **difficulties**: Object

Defined in: index.ts:89

___

### duration

• **duration**: *number*

Defined in: index.ts:86

___

### filterByEnergyLevel

• **filterByEnergyLevel**: (`notes`: [], `percentage`: *number*) => [*Note*](note.md)[]

#### Type declaration:

▸ (`notes`: [], `percentage`: *number*): [*Note*](note.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`notes` | [] |
`percentage` | *number* |

**Returns:** [*Note*](note.md)[]

Defined in: index.ts:97

Defined in: index.ts:97

___

### fullNotes

• **fullNotes**: [*Note*](note.md)[]

Defined in: index.ts:90

___

### notes

• **notes**: [*Note*](note.md)[]

Defined in: index.ts:85

___

### ppq

• **ppq**: *number*

Defined in: index.ts:88

___

### selectNotesByLines

• **selectNotesByLines**: (`fullNotes`: [*Note*](note.md)[], `lines`: [*NoteLine*](../enums/noteline.md)[]) => [*Note*](note.md)[]

#### Type declaration:

▸ (`fullNotes`: [*Note*](note.md)[], `lines`: [*NoteLine*](../enums/noteline.md)[]): [*Note*](note.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`fullNotes` | [*Note*](note.md)[] |
`lines` | [*NoteLine*](../enums/noteline.md)[] |

**Returns:** [*Note*](note.md)[]

Defined in: index.ts:96

Defined in: index.ts:96
