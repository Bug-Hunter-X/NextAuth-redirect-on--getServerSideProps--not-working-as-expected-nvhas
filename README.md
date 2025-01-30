# NextAuth redirect on `getServerSideProps` not working as expected

This repository demonstrates a common issue when using NextAuth.js with `getServerSideProps` for authentication.  The redirect to the login page doesn't always work as expected.

## Problem
The provided code attempts to redirect an unauthenticated user to the login page using `getServerSideProps`. However, under certain conditions, the redirect might fail or behave unexpectedly.

## Solution
The solution involves ensuring that the `authOptions` are correctly configured and imported, and verifying that the `unstable_getServerSession` function is used appropriately.  Additionally, proper handling of potential errors is crucial.

## Setup
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

Test the application to observe both the buggy behavior and the corrected functionality.