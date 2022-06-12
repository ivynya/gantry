# GANTRY

Gantry is a super half-baked visual JSON editor for lists of JSON items. It is particularly to generate JSON files for my **port**folio website (get it? because gantry cranes load cargo at ports).

It probably won't really ever be fixed by me. See #Contributing.

## ~~Good~~ Features&trade;
- Visual list of JSON items, with ability to specify which property is the title
- Editable properties (which are all strings)
- Editable arrays (which are all string arrays)
- Editable schema (between strings and string arrays)

## Contributing

Gantry has the following issues that don't impact me.

- Only supports lists of JSON items, not an object with keys as the top level
- Property title filtering only looks at keys for the first element in the list
- Schema editing is super moldy (and doesn't restore from clipboard)
- Doesn't support anything other than strings (and string arrays) in JSON objects

PRs are welcome for these issues (and others, if you want).

## License
MIT