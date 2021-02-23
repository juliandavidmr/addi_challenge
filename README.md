# ADDI Challenge

## Requirements

1. The person should exist in the national registry identification external system and their personal information should
   match the information stored in our local database.
2. The person does not have any judicial records in the national archives' external system.
3. Our internal prospect qualification system gives a satisfactory score for that person. This system outputs a random
   score between 0 and 100. **A lead could be turned into prospect if the score is greater than 60.**

### Dependencies

### Data

#### Client basic personal information

1. National identification number.
2. Birthdate.
3. First name.
4. Last name.
5. Email.

## API

| # | Endpoint                            | Method | Params      | Description |
|---|-------------------------------------|--------|-------------|-------------|
| 1 | `/api/crm/users`                    | `GET`  | `?limit=N`  |             |
| 2 | `/api/check_prospect_qualification` | `GET`  |             |             |
| 3 | `/api/check_judicial_records`       | `GET`  |             |             |
| 4 | `/api/check_national_registry`      | `GET`  |             |             |
