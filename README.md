# ADDI Challenge

## Implementation

- [x] [Next.js](https://nextjs.org/)
- [x] [React redux](https://react-redux.js.org/)
- [x] [Redux observable](https://redux-observable.js.org/)
- [x] [TailwindCSS](https://tailwindcss.com/)
- [x] [Testing library](https://testing-library.com/docs/) _&_ [Jest](https://jestjs.io/)
- [x] [TypeScript](https://www.typescriptlang.org/)

## Design

- [x] Layout container for global index page.
- [x] Shared components.
- [x] `99.9%` of styles based on TailwindCSS.

## Directory structure

- `__tests__/` - Unit test files.
- `__tests_util__/` - Utils for unit test files.
- `components/` - Shared components.
- `pages/` - Next.js pages.
   - `api/` - API for demo services.
- `public/` - Public files and assets.
- `store/` - Redux store for application.
- `styles/` - Contain global styles.

## Requirements

1. The person should exist in the national registry identification external system, and their personal information should
   match the information stored in our local database.
2. The person does not have any judicial records in the national archives' external system.
3. Our internal prospect qualification system gives a satisfactory score for that person. This system outputs a random
   score between 0 and 100. **A lead could be turned into prospect if the score is greater than 60.**

### Data

#### Client basic personal information

1. National identification number.
2. Birthdate.
3. First name.
4. Last name.
5. Email.
6. Phone number.

## API

API built using Next.js `/api` folder:

| # | Endpoint                            | Method | Params/Body      | Description                             |
|---|-------------------------------------|--------|------------------|-----------------------------------------|
| 1 | `/api/crm/users`                    | `GET`  | `?limit=N`       | Get users list                          |
| 2 | `/api/check_prospect_qualification` | `GET`  | `identification` | Generate a random number.               |
| 3 | `/api/check_judicial_records`       | `GET`  |                  | Returns true if the user is approved.   |
| 4 | `/api/check_national_registry`      | `GET`  | `identification` | Returns true if the user is approved.   |

_____________________________

_Developed by [juliandavidmr](https://github.com/juliandavidmr/)_.
